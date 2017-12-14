// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const suites = {
  smoke: [
    './e2e/smoke/**/*.e2e-spec.ts'
  ],
  regression: [
    './e2e/regression/**/*.e2e-spec.ts'
  ]
};

/**
 * Load desired specs from test suites command line arguments.
 * NOTE: Defaults to regression test if no --suite argument is passes in.
 */
const getTestSpecs = () => {
  const inputSuites = process.argv.filter(arg => arg.startsWith('--suite=')).map(arg => arg.substring(8));

  if (inputSuites.length > 0) {
    let specs = [];
    inputSuites.forEach(s => {
      if (!suites[s]) {
        console.warn('Warn: could not find the the suite: ' + s);
        return;
      }

      specs = specs.concat(suites[s]);
    });
    
    if (specs.length > 0) {
      return specs;
    }
  }

  return suites.regression; /* Default suite */
}

exports.config = {
  allScriptsTimeout: 11000,  
  specs: getTestSpecs(),
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
  }
};
