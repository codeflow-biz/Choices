import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  projectId: 'n7g5qp',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3001/test',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
