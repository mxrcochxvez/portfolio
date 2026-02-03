import type { CloudflareEnv } from "@opennextjs/cloudflare";

declare module "@opennextjs/cloudflare" {
	interface CloudflareEnv {
		AI: {
			run: (
				model: string,
				options: {
					messages: Array<{ role: string; content: string }>;
					max_tokens?: number;
				}
			) => Promise<{ response: string }>;
		};
		ASSETS: Fetcher;
	}
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			RESEND_API_KEY?: string;
			OWNER_EMAIL?: string;
		}
	}
}

export {};
