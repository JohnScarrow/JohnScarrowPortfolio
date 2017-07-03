'use strict';
var app = app || {};
var projectData = projectData || [];
var projects = app.projects || [];

(function (module) {
  const hamburger = function (){
    console.log('hamburger works');
    $('.cross').hide();
    $('.menu').hide();
    $('.hamburger').click(function () {
      $('.menu').slideToggle('slow', function (e) {
        e.preventdefault();
        $('.hamburger').hide();
        $('.cross').show();
      });
    });

    $('.cross').click(function () {
      $('.menu').slideToggle('slow', function (e) {
        e.preventdefault();
        $('.cross').hide();
        $('.hamburger').show();
      });
    });
    $('#tabs').on('click', '.tab', function (e) {
      e.preventdefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
  };
  const appendProjects = function () {
    projects.forEach(function (project) {
      console.log(project);
      $('#project').append(project.toHtml())
    });
  };
  
  module.hamburger = hamburger;
  module.appendProjects = appendProjects;
}(app));