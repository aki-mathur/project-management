angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.developer', {
              url: '/developers',
              controller: "DeveloperHomeCtrl as DeveloperHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/developer/views/developer-home.html',
              resolve: {
                developers: ['DeveloperService', function(DeveloperService) {
                  return DeveloperService.query({role: "developer"
                  }).$promise;
                }]
            }
          })

}]);
