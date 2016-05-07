angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Circulares) {

  $scope.circularesDireto =  Circulares.circularDiretoAll(); //Chats.all();
  $scope.favoritar = function(circular) {
    Circulares.favoritarDireto(circular.id);
    console.log('circular favorito: ' + circular.favorite + ' Horario: ' + circular.horario);
    var timeNow = new Date();
    console.log('hora atual: ' + timeNow.getHours() + ':' + timeNow.getMinutes());
  };

})

.controller('ChatsCtrl', function($scope, Circulares) {
  

  $scope.circularesDireto =  Circulares.circularDiretoAll(); //Chats.all();
  $scope.remove = function(circular) {
    Circulares.remove(circular);
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
