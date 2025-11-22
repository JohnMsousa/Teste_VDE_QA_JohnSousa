const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://betaconcursos.metodovde.com.br",
        viewportWidth: 1280,
        viewportHeight: 720,
        video: false,
        screenshotOnRunFailure: true,
        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        responseTimeout: 10000,
        experimentalStudio: true,
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
        },
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.js",
        fixturesFolder: "cypress/fixtures",
        screenshotsFolder: "cypress/screenshots",
        videosFolder: "cypress/videos",
        reporter: "cypress-mochawesome-reporter",
        reporterOptions: {
            reportDir: "cypress/reports",
            overwrite: false,
            html: true,
            json: true,
            timestamp: "mmddyyyy_HHMMss",
        },
    },
});
