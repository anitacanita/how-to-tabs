(function() {
  "use strict";
// to see list of tasks and their description: `jake -T`


  desc("Default build");
  task("default", [ "version" ], function() {
    console.log("\n\nBUILD OK");
  });

  desc("Check Node version");
  task("version", function() {
    console.log("Checking node version: .");

    var packageJson = require("./package.json");
    var expectedVersion = "v" + packageJson.engines.node;

    let actualVersion = process.version;
    if ( actualVersion !== expectedVersion ) {
      fail( "Incorrect Node version: expected " +
      expectedVersion +
      ", but was " + actualVersion );
  }
  });

}());
