define(['ionic','Chats'],function(){
   'use strict';
   var services = angular.module('starter.services',[])
   services.factory('Chats',require('Chats'));
   return services;
})
