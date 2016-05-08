angular.module('starter.services', [])

.factory('Circulares', function(){

  //Lista de circulares
  var circularDireto = [
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:00',
      favorite: false
    },
    {
      id: 1,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:10',
      favorite: false
    },
    {
      id: 2,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:30',
      favorite: false
    },
    {
      id: 3,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:38',
      favorite: false
    },
    {
      id: 4,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:45',
      favorite: false
    },
    {
      id: 5,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:50',
      favorite: false
    },
    {
      id: 6,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:55',
      favorite: false
    },
    {
      id: 7,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:10',
      favorite: true
    },
    {
      id: 8,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:20',
      favorite: true
    },
    {
      id: 9,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:25',
      favorite: true
    },
    {
      id: 10,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:30',
      favorite: true
    },
    {
      id: 11,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:35',
      favorite: false
    },
    {
      id: 12,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:53',
      favorite: false
    },
    {
      id: 13,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:10',
      favorite: false
    },
    {
      id: 14,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:18',
      favorite: false
    },
    {
      id: 15,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:35',
      favorite: false
    },
    {
      id: 16,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:51',
      favorite: false
    },
    {
      id: 17,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '09:00',
      favorite: false
    },
  ]

  var circularInverso = [
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:00',
      favorite: false
    },
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:30',
      favorite: false
    },
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:45',
      favorite: true
    },
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:15',
      favorite: true
    },
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:3,
      horario: '06:45',
      favorite: true
    },
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:3,
      horario: '07:15',
      favorite: true
    },
  ]

  return{
    circularDiretoAll: function() {
      return circularDireto;
    },

    circularInversoAll: function() {
      return circularInverso;
    },

    desfavoritarAll: function(){
      for(var i = 0; i < circularDireto.length; i++){
        if(circularDireto[i].favorite === true){
          circularDireto[i].favorite = false;
        }
      }
      for(var i = 0; i < circularInverso.length; i++){
        if(circularInverso[i].favorite === true){
          circularInverso[i].favorite = false;
        }
      }
    },

    favoritarDireto: function(id){
      for (var i = 0; i < circularDireto.length; i++) {
        if (circularDireto[i].id === parseInt(id)) {
            if(circularDireto[i].favorite === true){
              return circularDireto[i].favorite = false;
            }else{
              return circularDireto[i].favorite = true;
            }
        }
      }
    },
    desfavoritarDireto: function(){
      for(var i = 0; i < circularDireto.length; i++){
        if(circularDireto[i].favorite === true){
          circularDireto[i].favorite = false;
        }
      }
    },

    desfavoritarInverso: function(){
      for(var i = 0; i < circularInverso.length; i++){
        if(circularInverso[i].favorite === true){
          circularInverso[i].favorite = false;
        }
      }
    },

    favoritarInverso: function(id){
      for (var i = 0; i < circularInverso.length; i++) {
        if (circularInverso[i].id === parseInt(id)) {
            if(circularInverso[i].favorite === true){
              return circularInverso[i].favorite = false;
            }else{
              return circularInverso[i].favorite = true;
            }
        }
      }
    }
  }

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
