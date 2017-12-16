/**
 * Manages the test specs configuration from e2e-test.conf.json file.
 */

const defaultConfig = {
  suites: [],
  activeSuites: [],
  generateReport: false,
  openReportInBrowser: false
}

exports.loadTestSpecs = (configFile) => {
  // Load JSON file
  const e2eTestConfig = Object.assign(defaultConfig, configFile);

  // Available test suites
  const suites = e2eTestConfig.suites;

  return {
    /**
     * Load desired specs from active suites
     */
    getTestSpecs: () => {
      const inputSuites = e2eTestConfig.activeSuites;
    
      if (inputSuites.length > 0) {
        let specs = [];
        inputSuites.forEach(s => {
          if (!suites[s]) {
            console.warn('Warn: could not find the suite: ' + s);
            return;
          }
    
          specs = specs.concat(suites[s]);
        });
        
        if (specs.length > 0) {
          return specs;
        }
      }
    
      throw new Error("The value for `activeSuites` is not defined correctly in `e2e-test.conf.json`.");
    },

    /**
     * Checks if reporting is active.
     */
    shouldGenerateReport: () => {
      return e2eTestConfig.generateReport;
    },

    /**
     * Checks if the report should be opened in the end.
     */
    shouldOpenReportInBrowser: () => {
      return e2eTestConfig.openReportInBrowser;
    }
  };

};