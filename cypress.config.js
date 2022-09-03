const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zwrf41',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
