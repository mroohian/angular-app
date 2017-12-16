// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const opn = require('opn');
const { SpecReporter } = require('jasmine-spec-reporter');
const htmlReporter = require('./e2e/support/html-reporter').reporter;
const testSpecsManager = require('./e2e/support/test-specs').loadTestSpecs(require('./e2e-test.conf.json'));

exports.config = {
  allScriptsTimeout: 11000,
  specs: testSpecsManager.getTestSpecs(),
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    if (testSpecsManager.shouldGenerateReport()) {
      return htmlReporter.initReport(browser, jasmine);
    }    
  },

  onComplete: () => {
    if (testSpecsManager.shouldGenerateReport()) {
      htmlReporter.createHTMLReport(browser).then((htmlFileName) => {
        if (testSpecsManager.shouldOpenReportInBrowser()) {
          opn(htmlFileName);
        }
      });
    }    
  }
};
