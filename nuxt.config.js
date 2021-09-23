import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - devwan',
    title: 'devwan',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-socket-io',
  ],
  

  io: {
    sockets: [
      {
        name: 'home',
        url: 'http://localhost:3000',
        default: true,
        vuex: {
          mutations: [{ 
            // When "progress" is received, 
            // commit mutation "examples/SET_PROGRESS
            progress: 'examples/SET_PROGRESS' 
          },
            // Alternatively, use arrow syntax 
            'progress --> examples/SET_PROGRESS' // S/A 
          ],
          actions: [{ 
            // When "chatMessage" is received,
            // dispatch action "FORMAT_MESSAGE"
            chatMessage: 'FORMAT_MESSAGE' 
          },
            // When "SOMETHING_ELSE" is received,
            // dispatch action "SOMETHING_ELSE"
            'SOMETHING_ELSE' 
          ],
  
          emitBacks: [
            // When "examples/sample" state changes,
            // emit back the event "examples/sample"
            'examples/sample', 
            { 
              // When "examples/sample2" state changes,
              // emit back the event "sample2"
              'examples/sample2': 'sample2' 
            },
            // Alternatively, the previous entry 
            // could be written with the arrow format:
            'examples/sample2 <-- sample2'  // S/A 
          ]
        }
      }
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
