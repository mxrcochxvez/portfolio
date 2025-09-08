import { pipeline } from "@xenova/transformers";

let qaPipeline: any = null;

async function loadModel() {
	if (!qaPipeline) {
		qaPipeline = await pipeline("text2text-generation", "Xenova/flan-t5-small");
	}
	return qaPipeline;
}

export async function askLLM(question: string, context: string): Promise<string> {
	const qa = await loadModel();
	const prompt = `Context: ${context}\n\nQuestion: ${question}\nAnswer:`;
	const output = await qa(prompt, { max_new_tokens: 100 });

	return output[0].generated_text;
}
