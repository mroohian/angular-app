const fs = require('fs-extra');
const path = require('path');

const mkdirp = require('mkdirp');
const jasmineReporters = require('jasmine-reporters');
const HTMLReport = require("protractor-html-reporter");

// Path for XML, HTML files and screenShots
const xmlReports = path.join(process.cwd(), "/reports/xml");
const htmlReports = path.join(process.cwd(), "/reports/html");
const screenShots = path.join(process.cwd(), "/reports/html/screenshots");

// Results xml and HTML file path
const xmlFileName = 'results';
const xmlFile = xmlReports + '/' + xmlFileName + '.xml'

// Report config
const reportConfig = {
  reportTitle: 'Test Execution Report',
  outputPath: htmlReports,
  screenshotPath: 'file:///' + screenShots.replace(/\\/g, '/'),
  useHashAsScreenshotName: true,
  modifiedSuiteName: false,
  screenshotsOnlyOnFailure: true
};

const setupScreenShots = (browser) => {
  if (!fs.existsSync(screenShots)) {
    mkdirp(screenShots);
  }

  fs.emptyDir(screenShots, function (err) { });

  return browser.getCapabilities().then((caps) => {
    let browserName = caps.get('browserName');

    return {
      specDone: function(result) {
        if (!reportConfig.screenshotsOnlyOnFailure ||
          result.status == 'failed') {
          browser.takeScreenshot().then((png) => {            
            var fileName = browserName + '-' + result.id;
            let filePath = path.join(screenShots, fileName.hashCode() + '.png');

            var stream = fs.createWriteStream(filePath);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
          });
        }
      }
    };
  });
}

exports.reporter = {
  createHTMLReport: (browser) => {
    return browser.getCapabilities().then((caps) => {
      let browserName = caps.get('browserName');
      let browserVersion = caps.get('version');

      let config = Object.assign({}, reportConfig);
      config.testBrowser = browserName;
      config.browserVersion = browserVersion;

      // invoke protractor-html-reporter
      new HTMLReport().from(xmlFile, config); 

      return path.join(htmlReports, browserName + '-test-report.html');
    });
  },

  initReport: (browser, jasmine) => {
    if (!fs.existsSync(xmlReports)) {
      mkdirp(xmlReports);
    }
  
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: xmlReports,
      filePrefix: xmlFileName,
      useDotNotation: true,
      useFullTestName: true
    }));

    return setupScreenShots(browser).then(screenShotReporter => {
      jasmine.getEnv().addReporter(screenShotReporter);
    })
    
  }
};