(function() {
  'use strict';

  angular
    .module('NotesApp')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider

      .when('/', {
        controller: 'NoteController',
        templateUrl: 'app/note/note.template.html'
      })

      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'app/login/login.template.html'
      })

      .when('/logout', {
        controller: 'LogoutController',
        template: ''
      })

      .otherwise({
        redirectTo: '/login'
      });
  }
})();