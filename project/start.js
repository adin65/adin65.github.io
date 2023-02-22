var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

// Set up the app's routing
app.get('/profile', function(request, response) {
  response.render('pages/index');
});
app.get('/profile/experience', function(request, response) {
  response.render('pages/experience');
});
app.get('/profile/projects', function(request, response) {
  response.render('pages/projects');
});
app.get('/profile/courses', function(request, response) {
  response.render('pages/courses');
});
app.get('/profile/resume', function(request, response) {
  response.render('pages/resume');
});
app.get('/profile/projects/trackTimesMacro', function(request, response) {
  response.render('pages/eportfolio/ttctracktimesmacro');
});
app.get('/profile/projects/maintenancenotif', function(request, response) {
  response.render('pages/eportfolio/scmaintenancenotif');
});
app.get('/profile/projects/momeca', function(request, response) {
  response.render('pages/eportfolio/momeca');
});
app.get('/profile/projects/shoop', function(request, response) {
  response.render('pages/eportfolio/shoop');
});
app.get('/profile/projects/epsilon', function(request, response) {
  response.render('pages/eportfolio/epsilon');
});
app.get('/profile/projects/campfire', function(request, response) {
  response.render('pages/eportfolio/campfire');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
