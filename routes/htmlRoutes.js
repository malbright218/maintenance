// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/plans.html"));
  });


app.get("/portal", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/portal.html"));
});


};
