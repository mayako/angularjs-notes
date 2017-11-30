(function() {
  'use strict';

  angular
    .module('NotesApp')
    .controller('LogoutController', LogoutController)


    LogoutController.$inject = ['$location', '$cookies'];

    function LogoutController($location, $cookies) {
      $cookies.remove('currentUser');
      $location.path('/login');
    }
})();
