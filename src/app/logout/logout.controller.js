(function() {
  'use strict';

  angular
    .module('NotesApp')
    .controller('LogoutController', LogoutController)


    LogoutController.$inject = ['$scope', '$location', '$cookies'];

    function LogoutController($scope, $location, $cookies) {
      $cookies.remove('currentUser');
      $location.path('/login');
    }
})();
