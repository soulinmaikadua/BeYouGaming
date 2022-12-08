// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Be You Gaming',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Play for challenge, challenge you to play' }
      ],
    }
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite:{
        define:{
            'process.env.DEBUG': false,
        }
    }
})
