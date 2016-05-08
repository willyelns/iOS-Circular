angular.module('starter.controllers', [])

.controller('DiretoCtrl', function($scope, Circulares,$ionicPopup) {

  $scope.circularesDireto =  Circulares.circularDiretoAll(); //Chats.all();


  $scope.favoritar = function(circular) {

    var texto = "Você deseja favoritar este horário? \n" + circular.horario;
    var titulo = "Favoritar"

    if(circular.favorite === true){
      texto = "Você deseja desfavoritar este horário? \n" + circular.horario;
      titulo = "Desfavoritar";
    }

    var confirmPopup = $ionicPopup.confirm({
      title: titulo,
      template: texto
    });
    confirmPopup.then(function(res) {
      if(res) {

        Circulares.favoritarDireto(circular.id);
        console.log('circular favorito: ' + circular.favorite + ' Horario: ' + circular.horario);
        var timeNow = new Date();
        console.log('hora atual: ' + timeNow.getHours() + ':' + timeNow.getMinutes());

      } else {
        console.log('Não quis favoritar/desfavoritar');
      }
    });

  };


})

.controller('HomeCtrl', function($scope, $ionicPopup, $ionicActionSheet, Circulares) {

  $scope.proximoDireto = function(){

  }

  $scope.proximoInverso = function(){

  }


  $scope.config = function(){


    // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
            { text: 'Limpar fav. direto' },
            { text: 'Limpar fav. inverso' }
         ],

         destructiveText: 'Limpar Tudo',
         titleText: 'Opções dos Favoritos',
         cancelText: 'Cancelar',

         cancel: function() {
            // add cancel code...
         },

         buttonClicked: function(index) {
            if(index === 0) {
               // add edit 1 code
               var confirmPopup = $ionicPopup.confirm({
                 title: 'Limpar Favoritos' ,
                 template:'Você tem certeza que quer apagar todos os circulares diretos favoritos?'
               });
               confirmPopup.then(function(res) {
                 if(res) {
                   Circulares.desfavoritarDireto();

                 } else {
                   console.log('Não quis favoritar/desfavoritar');
                 }
               });
            }

            if(index === 1) {
               // add edit 2 code
               var confirmPopup = $ionicPopup.confirm({
                 title: 'Limpar Favoritos' ,
                 template:'Você tem certeza que quer apagar todos os circulares inversos favoritos?'
               });
               confirmPopup.then(function(res) {
                 if(res) {
                   Circulares.desfavoritarInverso();

                 } else {
                   console.log('Não quis favoritar/desfavoritar');
                 }
               });
            }
         },

         destructiveButtonClicked: function() {
            // add delete code..
            var confirmPopup = $ionicPopup.confirm({
              title: 'Limpar Favoritos' ,
              template:'Você tem certeza que quer apagar todos os circulares favoritos?'
            });
            confirmPopup.then(function(res) {
              if(res) {
                Circulares.desfavoritarAll();

              } else {
                console.log('Não quis favoritar/desfavoritar');
              }
            });
         }
      });

  }

  $scope.circularesInverso =  Circulares.circularInversoAll(); //Chats.all();
  $scope.circularesDireto =  Circulares.circularDiretoAll(); //Chats.all();
  $scope.remove = function(circular) {
    Circulares.remove(circular);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('InversoCtrl', function($scope, $ionicPopup,Circulares) {

  $scope.circularesInverso =  Circulares.circularInversoAll(); //Chats.all();

  $scope.favoritar = function(circular) {

    var texto = "Você deseja favoritar este horário? \n" + circular.horario;
    var titulo = "Favoritar"

    if(circular.favorite === true){
      texto = "Você deseja desfavoritar este horário? \n" + circular.horario;
      titulo = "Desfavoritar";
    }

    var confirmPopup = $ionicPopup.confirm({
      title: titulo,
      template: texto
    });
    confirmPopup.then(function(res) {
      if(res) {

        Circulares.favoritarInverso(circular.id);
        console.log('circular favorito: ' + circular.favorite + ' Horario: ' + circular.horario);
        var timeNow = new Date();
        console.log('hora atual: ' + timeNow.getHours() + ':' + timeNow.getMinutes());

      } else {
        console.log('Não quis favoritar/desfavoritar');
      }
    });

  };

  $scope.settings = {
    enableFriends: true
  };
});
