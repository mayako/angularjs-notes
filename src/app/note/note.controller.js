(function() {
  'use strict';

  angular
    .module('NotesApp')
    .controller('NoteController', NoteController)


    NoteController.$inject = ['$scope', '$cookies', '$mdSidenav', '$mdDialog', '$firebaseArray', '$firebaseObject'];

    function NoteController($scope, $cookies, $mdSidenav, $mdDialog, $firebaseArray, $firebaseObject) {
      let notas_ref = db.ref('notas/' + $cookies.getObject('currentUser'));
      $scope.notes = $firebaseArray(notas_ref)

      let user_ref = db.ref('users/' + $cookies.getObject('currentUser'))
      $scope.user = $firebaseObject(user_ref)

      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
      }

      $scope.showDialog = function(ev) {
        $mdDialog.show({
          controller: NoteController,
          templateUrl: './app/note/note.create.template.html',
          clickOutsideToClose: true
        })
      }

      $scope.save = function() {
        $scope.notes.$add({
          titulo: $scope.title,
          comentario: $scope.comment
        });
        $mdDialog.hide()
      }

      $scope.cancel = function() {
        $mdDialog.hide()
      }

    }
})();
