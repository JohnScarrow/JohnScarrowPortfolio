'use strict';
var projects = [];
var projectData = projectData || [];

$.ajax({
  url: 'scripts/ProjectData.json',
  type: 'get',
  dataType: 'json',
  error: function(data){
    console.log('No JSON to GET');
  },
  success: function(data){
    projectData = data;
    console.log(data);
    sortProjects();
  }
});

$( '.cross' ).hide();
$( '.menu' ).hide();
$( '.hamburger' ).click(function() {
  $( '.menu' ).slideToggle( 'slow', function() {
    $( '.hamburger' ).hide();
    $( '.cross' ).show();
  });
});

$( '.cross' ).click(function() {
  $( '.menu' ).slideToggle( 'slow', function() {
    $( '.cross' ).hide();
    $( '.hamburger' ).show();
  });
});

function Project (projectsObj) {
  this.title = projectsObj.title;
  this.link = projectsObj.link;
  this.description = projectsObj.description;
}
var sortProjects = function(){
  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };
  projectData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  projectData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  projects.forEach(function(project){
    $('#project').append(project.toHtml())
  });
};
var headerNav = function() {
  $('#tabs').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
};

headerNav();