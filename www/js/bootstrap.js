define(['app'],function(app){
   'use strict';
   console.log(app.name)
   angular.bootstrap(document,[app.name]);
})