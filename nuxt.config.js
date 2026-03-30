export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	router: {
		base: '/botonera-scream/'
	},

	head: {
		title: 'Ghostface Botonera',
		htmlAttrs: {
			lang: 'es'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
		],
		script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4CYFZFVT7V',
        async: true
      }
    ],
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/main.css',
		'@/assets/css/main.scss'
	],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
    { src: '~/plugins/gtag.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/pwa',
	],

  // Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// gtag: {
	// 	id: 'G-4CYFZFVT7V'
	// },

	pwa: {
		manifest: {
			name: 'Ghostface Botonera',
			short_name: 'GFBotonera',
			lang: 'es',
			useWebmanifestExtension: false,
			theme_color: '#383838',
			background_color: '#383838',
			display: 'minimal-ui',
			orientation: 'portrait',
		}
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extend(config, { isDev, isClient }) {
      // Añadir configuración para loaders
			config.module.rules.push({
        test: /\.(mp3|ogg)$/i, // Agrega los formatos de archivo de audio que quieres manejar
        use: [
        	{
        		loader: 'url-loader',
        		options: {
              limit: 8192, // Si el archivo es más grande, se manejará con file-loader
              name: 'audio/[name].[ext]'
            }
          }
        ]
      });
		}
	}
}
