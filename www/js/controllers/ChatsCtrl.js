define(['app'],function(app){
   'use strict';
   function ctrl($scope,Chats){
      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
         Chats.remove(chat);
      };
   }
   ctrl.$inject = ['$scope','Chats'];
   app.registerController('ChatsCtrl',ctrl);
})