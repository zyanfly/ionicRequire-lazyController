//dashCtrl.js content:
define(['app'],function(app){
   'use strict';
   function ctrl($scope){
      $scope.greet = 'hello world';
   }
   app.registerController('DashCtrl',ctrl);
})