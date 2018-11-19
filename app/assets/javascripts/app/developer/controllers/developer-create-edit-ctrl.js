(function() {
  'use strict';
  angular.module('projectManagement').controller('DeveloperCreateEditCtrl', DeveloperCreateEditCtrl);
  DeveloperCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','developer','developers','DeveloperService'];

  function DeveloperCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, developer, developers, DeveloperService) {
    var DeveloperCreateEditVM = this;

    $scope.formSubmitted = false;
    DeveloperCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    DeveloperCreateEditVM.developer = developer;
    DeveloperCreateEditVM.isUpdate = angular.isDefined(DeveloperCreateEditVM.developer.id);

    DeveloperCreateEditVM.saveDeveloper = saveDeveloper
    DeveloperCreateEditVM.deleteDeveloper = deleteDeveloper;
    DeveloperCreateEditVM.developerErrors = []


    function saveDeveloper(form) {
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;


      if (DeveloperCreateEditVM.isUpdate) {
        DeveloperService.update(DeveloperCreateEditVM.developer).$promise.then(function(value) {
          DeveloperCreateEditVM.developer = value
          DeveloperCreateEditVM.developerErrors = [];
          DeveloperCreateEditVM.developer.requestType = "update";
          $mdDialog.hide(DeveloperCreateEditVM.developer);
        }, function(badResponse) {
          DeveloperCreateEditVM.developerErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + DeveloperCreateEditVM.developerErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        DeveloperService.save(DeveloperCreateEditVM.developer).$promise.then(function(value) {
          DeveloperCreateEditVM.developer = value
          DeveloperCreateEditVM.developerErrors = [];
          DeveloperCreateEditVM.developer.requestType = "save";
          $mdDialog.hide(DeveloperCreateEditVM.developer);
        }, function(badResponse) {
          DeveloperCreateEditVM.developerErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + DeveloperCreateEditVM.developerErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteDeveloper(ev) {
      DeveloperService.delete({
        id: DeveloperCreateEditVM.developer.id
      }).$promise.then(function(value) {
        DeveloperCreateEditVM.developer.requestType = "delete";
        $mdDialog.hide(DeveloperCreateEditVM.developer);
      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
