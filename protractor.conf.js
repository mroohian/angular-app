// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const htmlReporter = require('./e2e/support/html-reporter').reporter;

const opn = require('opn');

const e2eTestConfig = require('./e2e-test.conf.json');

// Available test suites
const suites = e2eTestConfig.suites;

/**
 * Load desired specs from active suites
 */
const getTestSpecs = () => {
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
}

let config = {
  allScriptsTimeout: 11000,
  specs: getTestSpecs(),
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber command line options
  cucumberOpts: {
    require: ['./e2e/steps/*.ts'],
    tags: e2eTestConfig.useTags,
    strict: true,
    format: [
      'progress'
    ],
    'dry-run': false,
    compiler: "ts:ts-node/register"
  },

  onPrepare() {
    if (e2eTestConfig.generateReport) {
      htmlReporter.createReportDirectory();
    }    

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },

  onComplete: () => {
    if (e2eTestConfig.generateReport) {
      htmlReporter.createHTMLReport();

      if (e2eTestConfig.openReportInBrowser) {
        opn(htmlReporter.getTargetHtmlFilename());
      }
    }    
  }
};

if (e2eTestConfig.generateReport) {
  config.cucumberOpts.format.push('json:' + htmlReporter.getTargetJsonFilename())
} 

exports.config = config;