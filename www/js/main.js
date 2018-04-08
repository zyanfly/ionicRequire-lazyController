require.config({
   // baseUrl:'js',
   paths:{
      ionic:'../lib/ionic/js/ionic.bundle.min',
      controllers:'controllers/controllers',
      services:'services/services',
      DashCtrl:'controllers/DashCtrl',
      ChatsCtrl:'controllers/ChatsCtrl',
      ChatDetailCtrl:'controllers/ChatDetailCtrl',
      AccountCtrl:'controllers/AccountCtrl',
      Chats:'services/ChatsService'
   },
   deps:['bootstrap']
})
