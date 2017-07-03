'use strict';
var app = app || {};

(function(module){
  const initpage = function(){
    // app.sortProjects();
    $(`.tab-content`).hide();
    $(`.tab-content`).fadeIn();
  };

  const aboutPageInit = function() {

    $(`.tab-content`).hide();
    $(`#about`).fadeIn();

  }
  module.aboutPageInit = aboutPageInit;
  module.initpage = initpage;
}(app));