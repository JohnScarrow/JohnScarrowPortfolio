'use strict';
var app = app || {};

(function(module){
  const initpage = function(){
    // app.sortProjects();
    app.hamburger();
    app.fetchjson();
  };
  const tests = function(){
    console.log('test Complete');
  };
  app.initpage = initpage;
  app.tests = tests;
}(app));