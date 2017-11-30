(function() {
  'use strict';

  angular

    // Dependencias
    .module('NotesApp', [
      'ngCookies',
      'ngRoute',
      'ngMaterial',
      'firebase'
    ])

    .run(run);

    run.$inject = ['$rootScope', '$location', '$cookies'];

    function run($rootScope, $location, $cookies) {

      $rootScope.$on('$locationChangeStart', function() {
          let restrictedPage = $location.path() !== '/login';

          let loggedIn = $cookies.getObject('currentUser');

          if (restrictedPage && !loggedIn) {
              $location.path('/login');
          }
      });

    }
})();