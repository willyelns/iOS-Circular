angular.module('starter.services', [])

.factory('Circulares', function(){

  //Lista de circulares
  var circularDireto = [
    {
      id: 0,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:00'
    },
    {
      id: 1,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:10'
    },
    {
      id: 2,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:30'
    },
    {
      id: 3,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:38'
    },
    {
      id: 4,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:45'
    },
    {
      id: 5,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:50'
    },
    {
      id: 6,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '06:55'
    },
    {
      id: 7,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:10'
    },
    {
      id: 8,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:20'
    },
    {
      id: 9,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:25'
    },
    {
      id: 10,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:30'
    },
    {
      id: 11,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:35'
    },
    {
      id: 12,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '07:53'
    },
    {
      id: 13,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:10'
    },
    {
      id: 14,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:18'
    },
    {
      id: 15,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:35'
    },
    {
      id: 16,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '08:51'
    },
    {
      id: 17,
      //Tipo 1 = dias uteis, tipo 2 = sábado, tipo 3 = Férias
      tipo:1,
      horario: '09:00'
    },
  ]

  return{
    circularDiretoAll: function() {
      return circularDireto;
    }
  };
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
