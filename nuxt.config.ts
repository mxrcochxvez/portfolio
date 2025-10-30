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
	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			titleTemplate: '%s · Marco Chavez Jr',
			meta: [
				{ name: 'robots', content: 'index,follow' },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'theme-color', content: '#111827' }
			]
		}
	},
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		public: {
			siteUrl: 'https://marcochavez.work'
		}
	}
})
