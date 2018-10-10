angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.project', {
              url: '/projects',
              controller: "ProjectHomeCtrl as ProjectHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/project/views/project-home.html',
              resolve: {
                projects: ['ProjectService', function(ProjectService) {
                  return ProjectService.query({
                  }).$promise;
                }]
            }
          })

}]);
