const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');
const reporter = require("cucumber-html-reporter");

// Path for json and HTML files
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");

// Results json and HTML file path
const targetJson = jsonReports + "/results.json";
const targetHtml = htmlReports + "/results.html";

// HTML reporter options
const cucumberReporterOptions = {
  jsonFile: targetJson,
  output: targetHtml,
  reportSuiteAsScenarios: true,
  theme: "bootstrap",
};

exports.reporter = {
  getTargetJsonFilename: () => {
    return targetJson;
  },

  getTargetHtmlFilename: () => {
    return targetHtml;
  },

  createReportDirectory: () => {
    if (!fs.existsSync(jsonReports)) {
        mkdirp(jsonReports);
    }
  },

  createHTMLReport: () => {
    try {
        reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
    } catch (err) {
        if (err) {
            throw new Error("Failed to save cucumber test results to json file.");
        }
    }
  }
};