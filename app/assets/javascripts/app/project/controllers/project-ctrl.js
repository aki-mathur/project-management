(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectCtrl', ProjectCtrl);
  ProjectCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog', 'project','$mdToast', '$rootScope'];

  function ProjectCtrl($scope, $stateParams, $state, $mdDialog, project,$mdToast,$rootScope) {
    var ProjectVM = this;
    ProjectVM.project = project



  };
})();
