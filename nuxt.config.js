export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/botonera-scream/' // Ajusta esto según tu necesidad
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
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
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
