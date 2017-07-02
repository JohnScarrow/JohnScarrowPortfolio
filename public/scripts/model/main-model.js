'use strict';
var app = app || {};

(function (module) {
  var projects = [];
  var projectData = projectData || [];

  $.ajax({
    url: 'scripts/ProjectData.json',
    type: 'get',
    dataType: 'json',
    error: function (data) {
      console.log('No JSON to GET: ' + data);
    },
    success: function (data) {
      projectData = data;
      console.log(data);
      app.sortProjects();
    }
  });
}(app))