(function() {
  'use strict';
  angular.module('projectManagement').controller('DeveloperHomeCtrl', DeveloperHomeCtrl);
  DeveloperHomeCtrl.$inject = ['$scope', '$stateParams', '$state', 'developers'];

  function DeveloperHomeCtrl($scope, $stateParams, $state, developers) {
    var DeveloperHomeVM = this;
    DeveloperHomeVM.developers = developers

  };
})();
