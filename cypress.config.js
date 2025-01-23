const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9k5vxq",
  e2e: {
     baseUrl:"https://dev-finance-git-testecypress-querensales-projects.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      md: true,
      json: false,
      timesTamp: "mmddyyyy_HHMMss",
    },
  },
});
