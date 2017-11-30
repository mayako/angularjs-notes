(function() {
  'use strict';

  angular
    .module('NotesApp')
    .controller('LoginController', LoginController)


    LoginController.$inject = ['$scope', '$location', '$cookies', '$firebaseObject'];

    function LoginController($scope, $location, $cookies, $firebaseObject) {
      $scope.showError = false;

      $scope.login = function() {

        let user_ref = db.ref('users/' + $scope.username.toLowerCase());

        $firebaseObject(user_ref).$loaded().then(user => {

          if (user.password === $scope.password) {

            var cookieExp = new Date();
                cookieExp.setDate(cookieExp.getDate() + 7);

            $cookies.putObject('currentUser', user.username.toLowerCase(), { expires: cookieExp });

            $location.path('/');
          }

          else {
            $scope.showError = true;
          }
        })
      }
    }
})();
