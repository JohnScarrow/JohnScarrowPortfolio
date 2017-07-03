'use strict';
var app = app || {};
var projectData = projectData || [];
var projects = app.projects || [];


(function (module) {
  var projects = projects || [];
  var projectData = projectData || [];

  const fetchjson = function(){
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
        console.log(projectData);
        sortProjects();
        app.appendProjects();
      }
    });
  };
  var sortProjects = function () {
    function Project(projectsObj) {
      this.img = projectsObj.img;
      this.title = projectsObj.title;
      this.link = projectsObj.link;
      this.description = projectsObj.description;
    }
    Project.prototype.toHtml = function () {
      var template = Handlebars.compile($('#project-template').text());
      return template(this);
    };
    projectData.sort(function (a, b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    projectData.forEach(function (projectObject) {
      console.log(projectObject);
      projects.push(new Project(projectObject));
    });
    // projects.forEach(function (project) {
    //   $('#project').append(project.toHtml())
    // });
    console.log(projectData);
  };
  module.projects = projects;
  module.sortProjects = sortProjects;
  module.fetchjson = fetchjson;
}(app))