angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.dashboard', {
              url: '/dashboard',
              controller: "DashboardCtrl as DashboardVM",
              reloadOnSearch: false,
              templateUrl: 'app/dashboard/views/dashboard.html',
              resolve: {
                tasks: ['TodoService', function(TodoService) {
                  return TodoService.dashboard().$promise;
                }]
              }
          })

}]);
