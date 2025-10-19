import { createAgent } from 'langchain';
import { ChatOpenAI } from '@langchain/openai';
import * as z from 'zod';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	const body = await readBody<{ question: string }>(event);
	const { question } = body;

	if (!body?.question) {
		return { success: false, data: null }
	}

	const systemPrompt = `
		You are an expert about Marco, This is some information about Marco's Work Experience:
	
		Marco Chavez
		Senior Fullstack Software Engineer
		Clovis, CA | 559-682-2888 | marcode.chavez.jr@gmail.com | LinkedIn: linkedin.com/in/marco-chavez-jr-334514b4/ | Github: https://github.com/mxrcochxvez | Portfolio: https://mxrcochxvez.github.io/portfolio/
		Profile
		Full-Stack Software Engineer with 6+ years of experience delivering scalable SaaS, e-commerce, and mobile solutions. Known for driving accessibility, performance, and maintainability across complex codebases. Proven record of leading modernization initiatives, mentoring developers, and shipping products that improve user experience and business outcomes. Thrive in fast-paced environments where autonomy, problem solving, and measurable impact are valued.
		Skills
		Languages & Frameworks: TypeScript, JavaScript, React, Vue, Next.js, Node.js, Python
		APIs & Data: REST, GraphQL, PostgreSQL, SQL, NoSQL
		Tools & Platforms: Docker, Git, CI/CD, npm workspaces
		Expertise: Accessibility (WCAG 2.1 AA), Component Libraries, Performance Optimization
		Exploring: AI/ML applications with FastAPI, TensorFlow, Hugging Face
		Experience
		Software Engineer — Pressed Juicery
		Jul 2023 – Aug 2025, Clovis, CA
		- Built and scaled web applications supporting thousands of daily transactions with Vue, TypeScript, REST, and GraphQL.
		- Reduced manual marketing workflows by 30% through internal operations tools.
		- Co-created npm workspace component libraries, cutting feature delivery time by 25% across web and mobile.
		- Resolved 50+ accessibility audit issues, embedding WCAG standards into development.
		- Led PostgreSQL data migrations and API optimizations that supported cross-department operations.
		Lead Software Developer — Bitwise Industries
		Sep 2021 – Jun 2023, Fresno, CA
		- Migrated legacy Angular apps to React + Next.js, improving maintainability and cutting build times.
		- Mentored and led 6 junior/apprentice developers in TypeScript, accessibility, and testing best practices.
		- Boosted release confidence with automated testing, raising test coverage by 45%.
		- Established coding standards and CI/CD pipelines, reducing deployment bottlenecks.
		- Partnered with product and design to align technical roadmaps with business outcomes.
		Course Instructor — Bitwise Industries
		May 2022 – Jan 2023, Fresno, CA
		- Taught React, SQL, NoSQL, TypeScript, JavaScript, and Unit Testing.
		- Facilitated group projects and code reviews, mentoring diverse learners.
		Software Developer — Ordrslip
		Apr 2020 – Sep 2021, Fresno, CA
		- Developed SaaS applications with React and Python, improving functionality and usability.
		- Integrated APIs with third-party services, expanding platform capabilities.
		- Built internal tools to track sales metrics, enabling data-driven marketing.
		- Optimized code for performance, scalability, and reliability in a production SaaS environment.
		Education
		Certificate — Software Development
		Southern Careers Institute of Texas | Jul 2018 – Jul 2019
		Completed full-stack program (React, Node.js, SQL). Invited to serve as instructor during the program for strong technical performance and mentorship.
		
		DO NOT GIVE OUT ANY INFORMATION LIKE EMAIL, PHYSICAL ADDRESS, PHONE NUMBER, OR CITY/STATE INFORMATION. ONLY ANSWER QUESTIONS RELATED TO WORK EXPERIENCE, SKILLS, AND EDUCATION.
	`;

	const responseFormat = z.object({
		answer: z.string(),
	});

	const model = new ChatOpenAI({
		model: 'gpt-4o-mini',
		temperature: 0.3,
		apiKey: String(config.OPENAI_API_KEY),
	});

	const agent = createAgent({
		model,
		responseFormat,
		systemPrompt,
	});

	const result = await agent.invoke({
		messages: [{ role: 'user', content: question }],
	});

	return { success: true, data: result.structuredResponse };
});