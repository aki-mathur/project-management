(function() {
  'use strict';
  angular.module('projectManagement').controller('TodoCreateEditCtrl', TodoCreateEditCtrl);
  TodoCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','todo','developers','projects','TodoService'];

  function TodoCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, todo, developers, projects, TodoService) {
    var TodoCreateEditVM = this;

    $scope.formSubmitted = false;
    TodoCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    TodoCreateEditVM.todo = todo;
    TodoCreateEditVM.isUpdate = angular.isDefined(TodoCreateEditVM.todo.id);

    TodoCreateEditVM.developers = developers;
    TodoCreateEditVM.projects = projects;
    TodoCreateEditVM.saveTodo = saveTodo
    TodoCreateEditVM.deleteTodo = deleteTodo;
    TodoCreateEditVM.todoErrors = []


    function saveTodo(form) {
      console.log(form);
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;
      TodoCreateEditVM.todo.developer_ids = TodoCreateEditVM.selectedDevelopers.map(function(head) {
        return head.id;
      })

      if (TodoCreateEditVM.isUpdate) {
        TodoService.update(TodoCreateEditVM.todo).$promise.then(function(value) {
          TodoCreateEditVM.todo = value
          TodoCreateEditVM.todoErrors = [];
        }, function(badResponse) {
          TodoCreateEditVM.todoErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + TodoCreateEditVM.todoErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        TodoService.save({todo: TodoCreateEditVM.todo}).$promise.then(function(value) {
          TodoCreateEditVM.todo = value
          TodoCreateEditVM.todoErrors = [];
        }, function(badResponse) {
          TodoCreateEditVM.todoErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + TodoCreateEditVM.todoErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteTodo(ev) {
      TodoService.delete({
        id: TodoCreateEditVM.todo.id
      }).$promise.then(function(value) {

      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
