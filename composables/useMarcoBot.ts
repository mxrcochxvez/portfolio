export function useMarcoBot() {
	/**
	 * Ask the Marco Bot a question.
	 * @param question - The user's question to send to the API
	 */
	const getAnswer = async (question: string): Promise<string> => {
		try {
			const response = await $fetch<{ data: { answer: string | null } }>('/api/marco-bot', {
				method: 'POST',
				body: { question },
			});

			return response?.data?.answer ?? "I don't know the answer to that question.";
		} catch (error) {
			console.error('❌ MarcoBot error:', error);
			return "Sorry, something went wrong while fetching the answer.";
		}
	};

	return { getAnswer };
}