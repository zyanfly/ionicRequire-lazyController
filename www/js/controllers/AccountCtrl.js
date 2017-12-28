define(['app'],function(app){
   'use strict';
   function ctrl($scope){
      $scope.settings = {
         enableFriends: true
      };
   }
   ctrl.$inject = ['$scope'];
   app.registerController('AccountCtrl',ctrl);
})