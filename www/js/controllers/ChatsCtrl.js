define(['app'],function(app){
   'use strict';
   function ctrl($scope,Chats){
      var vm = this;
      vm.chats = Chats.all();
      vm.remove = function(chat) {
         Chats.remove(chat);
      };
   }
   ctrl.$inject = ['$scope','Chats'];
   app.registerController('ChatsCtrl',ctrl);
})
