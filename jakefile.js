(function() {
  "use strict";
// to see list of tasks and their description: `jake -T`

var EXPECTED_NODE_VERSION = "v9.2.1";

  desc("Default build");
  task("default", [ "version" ], function() {
    console.log("\n\nBUILD OK");
  });

  desc("Check Node version");
  task("version", function() {
    console.log("Checking node version: .");

    let actualVersion = process.version;
    if ( actualVersion !== EXPECTED_NODE_VERSION ) {
      fail( "Incorrect Node version: expected " +
      EXPECTED_NODE_VERSION +
      ", but was " + actualVersion );
  }
  });

}());
