(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectCreateEditCtrl', ProjectCreateEditCtrl);
  ProjectCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','project','developers','ProjectService'];

  function ProjectCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, project, developers, ProjectService) {
    var ProjectCreateEditVM = this;

    $scope.formSubmitted = false;
    ProjectCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    ProjectCreateEditVM.project = project;
    ProjectCreateEditVM.isUpdate = angular.isDefined(ProjectCreateEditVM.project.id);
    ProjectCreateEditVM.selectedGroupItem = null;
    ProjectCreateEditVM.searchGroupText = null;

    ProjectCreateEditVM.querySearch = querySearch;
    ProjectCreateEditVM.selectedHeadItem = null;
    ProjectCreateEditVM.searchHeadText = null;

    ProjectCreateEditVM.developers = loadItems(developers);
    ProjectCreateEditVM.selectedDevelopers = [];
    ProjectCreateEditVM.transformChip = transformChip;
    ProjectCreateEditVM.saveProject = saveProject
    ProjectCreateEditVM.deleteProject = deleteProject;
    ProjectCreateEditVM.projectErrors = []

    if (ProjectCreateEditVM.isUpdate) {
      ProjectCreateEditVM.selectedDevelopers = ProjectCreateEditVM.project.developers;
    }

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return {
        name: chip
      }
    }

    function querySearch(query) {
      var results = query ? ProjectCreateEditVM.developers.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item._lowername.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadItems(items) {
      return items.map(function (item) {
       item._lowername = item.name.toLowerCase();
       console.log(item);
       return item;
      });
    }

    function saveProject(form) {
      console.log(form);
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;
      ProjectCreateEditVM.project.developer_ids = ProjectCreateEditVM.selectedDevelopers.map(function(head) {
        return head.id;
      })

      if (ProjectCreateEditVM.isUpdate) {
        ProjectService.update(ProjectCreateEditVM.project).$promise.then(function(value) {
          ProjectCreateEditVM.project = value
          ProjectCreateEditVM.projectErrors = [];
          ProjectCreateEditVM.project.requestType = "update";
          $mdDialog.hide(ProjectCreateEditVM.project);
        }, function(badResponse) {
          ProjectCreateEditVM.projectErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + ProjectCreateEditVM.projectErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        ProjectService.save({project: ProjectCreateEditVM.project}).$promise.then(function(value) {
          ProjectCreateEditVM.project = value
          ProjectCreateEditVM.projectErrors = [];
          ProjectCreateEditVM.project.requestType = "save";
          $mdDialog.hide(ProjectCreateEditVM.project);
        }, function(badResponse) {
          ProjectCreateEditVM.projectErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + ProjectCreateEditVM.projectErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteProject(ev) {
      ProjectService.delete({
        id: ProjectCreateEditVM.project.id
      }).$promise.then(function(value) {
        ProjectCreateEditVM.project.requestType = "delete";
        $mdDialog.hide(ProjectCreateEditVM.project);
      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
