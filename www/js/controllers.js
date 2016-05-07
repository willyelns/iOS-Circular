angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Circulares) {

  $scope.circularesDireto =  Circulares.circularDiretoAll(); //Chats.all();
  $scope.remove = function(circular) {
    Circulares.remove(circular);
  };

})

.controller('ChatsCtrl', function($scope, Circulares) {
  

  $scope.chats =  Circulares.circularDireto; //Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
