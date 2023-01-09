import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  defaultCommandTimeout: 2000,
  responseTimeout: 2800,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: '**/integration/examples/*.ts',
    specPattern: 'cypress/e2e/**/*.spec.ts',
  },
})
