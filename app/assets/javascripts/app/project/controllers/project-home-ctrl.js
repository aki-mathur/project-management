(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectHomeCtrl', ProjectHomeCtrl);
  ProjectHomeCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog','projects'];

  function ProjectHomeCtrl($scope, $stateParams, $state, $mdDialog, projects) {
    var ProjectHomeVM = this;
    ProjectHomeVM.projects = projects
    ProjectHomeVM.createEditProject = createEditProject

    function createEditProject(ev, project, index) {
      $mdDialog.show({
        controller: 'ProjectCreateEditCtrl as ProjectCreateEditVM',
        templateUrl: 'app/project/views/create-edit-project.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          project: function() {
            return angular.copy(project);
          },
          developers: ['DeveloperService', function(DeveloperService) {
            return DeveloperService.query({role:"developer"}).$promise;
          }]
        }
      }).then(function(project) {
        switch (project.requestType) {
          case "save":
            ProjectHomeVM.projects.push(project);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            ProjectHomeVM.projects[index] = project;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            ProjectHomeVM.projects.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete project.requestType;
      }, function(response) {
        console.log(response);
      });
    }

  };
})();
