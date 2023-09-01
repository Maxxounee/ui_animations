// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // devtools: { enabled: true }
    modules: ['@pinia/nuxt', 'nuxt-lenis'],
    // vue: {
    //     compilerOptions: {
    //         directiveTransforms: {
    //
    //         },
    //     }
    // }
    // nuxtApp.vueApp.directive
    // plugins: ['~/plugins/parsec.client.js'],
    // plugins: ['@/assets/script/parsec.client.js'],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
