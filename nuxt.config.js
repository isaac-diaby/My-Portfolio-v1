export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    htmlAttrs: {
      lang: "en-GB"
    },
    title: "Isaac Diaby",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Hello, i'm Moustapha Isaac Diaby and this is my portfolio"
      }
    ],
    // script: [
    //   {
    //     src: `https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js`,
    //     body: true
    //   }
    // ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: ["~/assets/scss/_config.scss"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // "~/plugins/google-dialog.js",
    { src: "~plugins/ga.js", mode: "client" },
    { src: "~/plugins/google-dialog.js", mode: "client" }
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    "@nuxtjs/style-resources",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],
  styleResources: {
    scss: ["~/assets/scss/_config.scss"]
  },

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
