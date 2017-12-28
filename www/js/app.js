define(['controllers','services'],function(){
   'use strict';
   var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
   .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
         if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

         }
         if (window.StatusBar) {
            StatusBar.styleDefault();
         }
      });
   })
   .config(function($stateProvider, $urlRouterProvider,$controllerProvider) {
      app.registerController = $controllerProvider.register;
      app.loadControllerJs = function(controllerJs){
         return function($rootScope,$q){
            var def = $q.defer(),deps = [];
            angular.isArray(controllerJs)?(deps = controllerJs):deps.push(controllerJs);
            require(deps,function(){
               $rootScope.$apply(function(){
                  def.resolve();
               });
            });
            return def.promise;
         }
      }
      $stateProvider
      .state('tab', {
         url: '/tab',
         abstract: true,
         templateUrl: 'templates/tabs.html'
      })
      .state('tab.dash', {
         url: '/dash',
         views: {
            'tab-dash': {
               templateUrl: 'templates/tab-dash.html',
               controller: 'DashCtrl',
               resolve:{
                  deps:app.loadControllerJs('DashCtrl')
               }
            }
         }
      })
      .state('tab.chats', {
         url: '/chats',
         views: {
            'tab-chats': {
               templateUrl: 'templates/tab-chats.html',
               controller: 'ChatsCtrl',
               resolve:{
                  deps:app.loadControllerJs('ChatsCtrl')
               }
            }
         }
      })
      .state('tab.chat-detail', {
         url: '/chats/:chatId',
         views: {
            'tab-chats': {
               templateUrl: 'templates/chat-detail.html',
               controller: 'ChatDetailCtrl',
               resolve:{
                  deps:app.loadControllerJs('ChatDetailCtrl')
               }
            }
         }
      })
      .state('tab.account', {
         url: '/account',
         views: {
            'tab-account': {
               templateUrl: 'templates/tab-account.html',
               controller: 'AccountCtrl',
               resolve:{
                  deps:app.loadControllerJs('AccountCtrl')
               }
            }
         }
      });
      $urlRouterProvider.otherwise('/tab/dash');
   });
   return app
})
