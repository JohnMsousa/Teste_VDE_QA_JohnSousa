const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://betaconcursos.metodovde.com.br",
        viewportWidth: 1280,
        viewportHeight: 720,
        video: false,
        videosFolder: "cypress/videos",
        screenshotOnRunFailure: true,
        experimentalStudio: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.js",
        fixturesFolder: "cypress/fixtures",
        screenshotsFolder: "cypress/screenshots",
    },
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "mochawesome-report",
        overwrite: false,
        html: false,
        json: true,
    },
});
