(function() {
  'use strict';
  angular.module('projectManagement').controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = ['$scope', '$stateParams', '$state','tasks'];

  function DashboardCtrl($scope, $stateParams, $state, tasks) {
    var DashboardVM = this;
    DashboardVM.tasks = tasks

  };
})();
