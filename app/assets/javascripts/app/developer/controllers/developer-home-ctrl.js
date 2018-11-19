(function() {
  'use strict';
  angular.module('projectManagement').controller('DeveloperHomeCtrl', DeveloperHomeCtrl);
  DeveloperHomeCtrl.$inject = ['$scope', '$stateParams', '$state', 'developers','$mdDialog','$mdToast'];

  function DeveloperHomeCtrl($scope, $stateParams, $state, developers, $mdDialog, $mdToast) {
    var DeveloperHomeVM = this;
    DeveloperHomeVM.developers = developers
    DeveloperHomeVM.createEditDeveloper = createEditDeveloper


    function createEditDeveloper(ev, developer, index) {
      $mdDialog.show({
        controller: 'DeveloperCreateEditCtrl as DeveloperCreateEditVM',
        templateUrl: 'app/developer/views/create-edit-developer.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          developer: function() {
            return angular.copy(developer);
          },
          developers: ['DeveloperService', function(DeveloperService) {
            return DeveloperService.query({role:"developer"}).$promise;
          }]
        }
      }).then(function(developer) {
        switch (developer.requestType) {
          case "save":
            DeveloperHomeVM.developers.push(developer);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            DeveloperHomeVM.developers[index] = developer;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            DeveloperHomeVM.developers.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete developer.requestType;
      }, function(response) {
        console.log(response);
      });
    }

  };
})();
