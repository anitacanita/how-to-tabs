(function() {
  "use strict";
// to see list of tasks and their description: `jake -T`

  var semver = require("semver");

  desc("Default build");
  task("default", [ "version", "lint" ], function() {
    console.log("\n\nBUILD OK");
  });

  desc("Check Node version");
  task("version", function() {
    console.log("Checking node version: .");

    var packageJson = require("./package.json");
    var expectedVersion = packageJson.engines.node;

    var actualVersion = process.version;
    if ( semver.neq(expectedVersion, actualVersion ) ) {
      fail( "Incorrect Node version: expected " +
      expectedVersion +
      ", but was " + actualVersion );
  }
  });

  desc("Lint JavaScript");
  task("lint", function() {
    console.log("Linting JavaScript: .");

    jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", { interactive: true }, complete);
  }, { async: true });

}());
