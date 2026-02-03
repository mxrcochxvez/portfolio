import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface ProjectData {
	projectType: string;
	description: string;
	features: string[];
	platforms: string[];
	timeline: string;
	budget: string;
	clientName: string;
	clientEmail: string;
	additionalNotes: string;
}

export interface ConversationState {
	stage:
		| "intro"
		| "project_type"
		| "description"
		| "features"
		| "platforms"
		| "timeline"
		| "budget"
		| "contact"
		| "summary"
		| "complete";
	projectData: Partial<ProjectData>;
	messageHistory: Array<{ role: "user" | "assistant"; content: string }>;
}

const STAGES_ORDER = [
	"intro",
	"project_type",
	"description",
	"features",
	"platforms",
	"timeline",
	"budget",
	"contact",
	"summary",
	"complete",
] as const;

const getStageProgress = (stage: ConversationState["stage"]): number => {
	const index = STAGES_ORDER.indexOf(stage);
	return Math.round((index / (STAGES_ORDER.length - 1)) * 100);
};

const systemPrompt = `You are Marco's friendly project discovery assistant. Your job is to help potential clients describe their project needs clearly and gather the information Marco needs to provide an accurate quote.

Be conversational, helpful, and ask clarifying questions when needed. Keep responses concise (2-3 sentences max). Don't be overly formal.

Guidelines:
- Help users articulate their project needs
- Ask one question at a time
- If they give short answers, ask a follow-up to get more detail
- Be encouraging and professional
- Never discuss specific pricing - that comes later from an automated estimate`;

const estimatePricing = (data: Partial<ProjectData>): { min: number; max: number; confidence: string } => {
	let baseMin = 1000;
	let baseMax = 3000;

	switch (data.projectType?.toLowerCase()) {
		case "mobile app":
			baseMin = 3000;
			baseMax = 15000;
			break;
		case "web app":
			baseMin = 2000;
			baseMax = 10000;
			break;
		case "website":
			baseMin = 500;
			baseMax = 3000;
			break;
		case "desktop app":
			baseMin = 3000;
			baseMax = 12000;
			break;
		default:
			baseMin = 1500;
			baseMax = 8000;
	}

	const platforms = data.platforms?.length || 1;
	if (platforms > 1) {
		baseMin *= 1 + (platforms - 1) * 0.4;
		baseMax *= 1 + (platforms - 1) * 0.5;
	}

	const featureCount = data.features?.length || 0;
	if (featureCount > 3) {
		baseMin *= 1 + (featureCount - 3) * 0.15;
		baseMax *= 1 + (featureCount - 3) * 0.2;
	}

	if (data.timeline?.toLowerCase().includes("asap") || data.timeline?.toLowerCase().includes("urgent")) {
		baseMin *= 1.25;
		baseMax *= 1.3;
	}

	const confidence = data.description && data.description.length > 50 ? "medium" : "low";

	return {
		min: Math.round(baseMin / 100) * 100,
		max: Math.round(baseMax / 100) * 100,
		confidence,
	};
};

const getNextStageQuestion = (
	state: ConversationState
): { nextStage: ConversationState["stage"]; question: string; quickOptions?: string[] } => {
	switch (state.stage) {
		case "intro":
			return {
				nextStage: "project_type",
				question: "What type of project are you looking to build?",
				quickOptions: ["Mobile App", "Web App", "Website", "Desktop App", "Other"],
			};
		case "project_type":
			return {
				nextStage: "description",
				question: `Great choice! Tell me more about your ${state.projectData.projectType || "project"}. What problem are you trying to solve, or what's the main goal?`,
			};
		case "description":
			return {
				nextStage: "features",
				question:
					"What are the key features you need? List the must-haves. (You can separate them with commas)",
			};
		case "features":
			return {
				nextStage: "platforms",
				question: "Which platforms do you need this to work on?",
				quickOptions:
					state.projectData.projectType?.toLowerCase() === "mobile app"
						? ["iOS only", "Android only", "Both iOS & Android"]
						: ["Web Browser", "Windows", "Mac", "Linux", "Multiple"],
			};
		case "platforms":
			return {
				nextStage: "timeline",
				question: "What's your ideal timeline for this project?",
				quickOptions: ["ASAP (Rush)", "1-2 months", "3-6 months", "Flexible / No rush"],
			};
		case "timeline":
			return {
				nextStage: "budget",
				question: "Do you have a budget range in mind? This helps me understand the scope.",
				quickOptions: ["Under $2k", "$2k - $5k", "$5k - $10k", "$10k+", "Not sure yet"],
			};
		case "budget":
			return {
				nextStage: "contact",
				question: "Almost done! What's your name and email so Marco can follow up with you?",
			};
		case "contact":
			return {
				nextStage: "summary",
				question: "", // Will be generated dynamically
			};
		default:
			return {
				nextStage: "complete",
				question: "",
			};
	}
};

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { state, userMessage } = body as {
			state: ConversationState;
			userMessage: string;
		};

		if (!state) {
			const initialState: ConversationState = {
				stage: "intro",
				projectData: {},
				messageHistory: [],
			};
			const { question, quickOptions } = getNextStageQuestion(initialState);
			return Response.json({
				state: {
					...initialState,
					stage: "project_type",
					messageHistory: [{ role: "assistant", content: question }],
				},
				response: question,
				quickOptions,
				progress: getStageProgress("project_type"),
			});
		}

		const updatedState = { ...state };
		updatedState.messageHistory = [
			...state.messageHistory,
			{ role: "user" as const, content: userMessage },
		];

		switch (state.stage) {
			case "project_type":
				updatedState.projectData.projectType = userMessage;
				break;
			case "description":
				updatedState.projectData.description = userMessage;
				break;
			case "features":
				updatedState.projectData.features = userMessage.split(/[,\n]/).map((f) => f.trim()).filter(Boolean);
				break;
			case "platforms":
				updatedState.projectData.platforms = userMessage.split(/[,\n&]/).map((p) => p.trim()).filter(Boolean);
				break;
			case "timeline":
				updatedState.projectData.timeline = userMessage;
				break;
			case "budget":
				updatedState.projectData.budget = userMessage;
				break;
			case "contact": {
				const emailMatch = userMessage.match(/[\w.-]+@[\w.-]+\.\w+/);
				const nameMatch = userMessage.replace(/[\w.-]+@[\w.-]+\.\w+/, "").trim();
				updatedState.projectData.clientEmail = emailMatch?.[0] || "";
				updatedState.projectData.clientName = nameMatch || userMessage;
				break;
			}
		}

		const { nextStage, question, quickOptions } = getNextStageQuestion(state);
		updatedState.stage = nextStage;

		if (nextStage === "summary") {
			const estimate = estimatePricing(updatedState.projectData);
			const summaryResponse = generateProjectSummary(updatedState.projectData, estimate);

			updatedState.messageHistory.push({ role: "assistant", content: summaryResponse });

			return Response.json({
				state: updatedState,
				response: summaryResponse,
				progress: getStageProgress("summary"),
				estimate,
				projectData: updatedState.projectData,
				isComplete: true,
			});
		}

		let response = question;

		if (state.stage === "description" || state.stage === "features") {
			let ai: any;
			try {
				const ctx = await getCloudflareContext();
				ai = (ctx.env as any)?.AI;
			} catch {
				// Local dev - use static response
			}

			if (ai && userMessage.length < 30) {
				try {
					const aiResponse = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
						messages: [
							{ role: "system", content: systemPrompt },
							...updatedState.messageHistory.slice(-4),
							{
								role: "user",
								content: `The user gave a short answer: "${userMessage}". Ask a brief follow-up to get more detail, then transition to the next question about ${nextStage}. Keep it to 2 sentences max.`,
							},
						],
						max_tokens: 150,
					});
					if (aiResponse.response) {
						response = aiResponse.response;
					}
				} catch (e) {
					console.error("AI follow-up failed:", e);
				}
			}
		}

		updatedState.messageHistory.push({ role: "assistant", content: response });

		return Response.json({
			state: updatedState,
			response,
			quickOptions,
			progress: getStageProgress(nextStage),
		});
	} catch (error) {
		console.error("Project discovery error:", error);
		return Response.json(
			{ error: "Something went wrong. Please try again." },
			{ status: 500 }
		);
	}
}

function generateProjectSummary(
	data: Partial<ProjectData>,
	estimate: { min: number; max: number; confidence: string }
): string {
	const features = data.features?.join(", ") || "Not specified";
	const platforms = data.platforms?.join(", ") || "Not specified";

	return `Here's a summary of your project:

**Project Type:** ${data.projectType || "Not specified"}
**Description:** ${data.description || "Not provided"}
**Key Features:** ${features}
**Platforms:** ${platforms}
**Timeline:** ${data.timeline || "Not specified"}
**Budget Range:** ${data.budget || "Not specified"}

---

**Estimated Cost:** $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}

⚠️ *This is a preliminary AI-generated estimate. Final pricing will be confirmed by Marco after reviewing your requirements in detail. The estimate is open to negotiation based on scope and timeline.*

---

If this looks good, click **Send Proposal** and Marco will receive this summary along with your contact info (${data.clientName}, ${data.clientEmail}). He'll get back to you within 24-48 hours!`;
}
