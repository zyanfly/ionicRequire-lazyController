define(['app'],function(app){
   'use strict';
   function ctrl($scope, $stateParams, Chats){
      $scope.chat = Chats.get($stateParams.chatId);
      console.log(111)
   }
   ctrl.$inject = ['$scope','$stateParams','Chats'];
   app.registerController('ChatDetailCtrl',ctrl);
})
