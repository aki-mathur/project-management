(function() {
  'use strict';
  angular.module('projectManagement').controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = ['$scope', '$stateParams', '$state','tasks','TodoService'];

  function DashboardCtrl($scope, $stateParams, $state, tasks, TodoService) {
    var DashboardVM = this;
    DashboardVM.developer_tasks = tasks;
    DashboardVM.switchDashboard = switchDashboard;

    DashboardVM.dashboardType = [{name:"Developer",value:"developer"},{name:"Project",value:"project"}];
    DashboardVM.selectedType = "developer";

    function switchDashboard(){
      TodoService.dashboard({
        type: DashboardVM.selectedType
      }).$promise.then(function(value) {
        DashboardVM.developer_tasks = value
      }, function(response) {
          console.log(response);
      });

    }


  };
})();
