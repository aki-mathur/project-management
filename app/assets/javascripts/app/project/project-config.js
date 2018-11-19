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
          }).state('container.user.project-detail', {
                url: '/projects/:id',
                controller: "ProjectCtrl as ProjectVM",
                reloadOnSearch: false,
                templateUrl: 'app/project/views/project-detail.html',
                resolve: {
                  project: ['ProjectService','$stateParams', function(ProjectService,$stateParams) {
                    return ProjectService.get({id: $stateParams.id}).$promise;
                  }]
              }
          })

}]);
