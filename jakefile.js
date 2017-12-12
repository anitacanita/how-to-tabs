(function() {
  "use strict";
// to see list of tasks and their description: `jake -T`

  desc("Default build");
  task("default", function() {
    console.log("\n\nBUILD OK");
  });

}());
