// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],
	tailwindcss: {
		config: {
			darkMode: 'class'
		}
	},
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
	}
})
