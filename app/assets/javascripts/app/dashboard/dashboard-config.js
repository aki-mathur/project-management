angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.dashboard', {
              url: '/dashboard',
              controller: "DashboardCtrl as DashboardVM",
              templateUrl: 'app/dashboard/views/dashboard.html',
              resolve: {
                tasks: ['TodoService', function(TodoService) {
                  return TodoService.dashboard({type: 'developer'}).$promise;
                }]
              }
          }).state('container.user.chart', {
                url: '/charts',
                controller: "ChartCtrl as ChartVM",
                templateUrl: 'app/dashboard/views/chart.html',
                resolve: {
                  tasks: ['TodoService', function(TodoService) {
                    return TodoService.charts().$promise;
                  }]
                }
            })

}]);
