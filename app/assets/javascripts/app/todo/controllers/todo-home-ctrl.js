(function() {
  'use strict';
  angular.module('projectManagement').controller('TodoHomeCtrl', TodoHomeCtrl);
  TodoHomeCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog', 'todos', '$mdToast', 'TodoService', '$location','$rootScope'];

  function TodoHomeCtrl($scope, $stateParams, $state, $mdDialog, todos, $mdToast, TodoService,$location,$rootScope) {
    var TodoHomeVM = this;
    TodoHomeVM.createEditTodo = createEditTodo;
    TodoHomeVM.todos = todos;
    TodoHomeVM.newTodo = {}
    TodoHomeVM.todo = {}

    TodoHomeVM.can_create = $rootScope.user.role == "admin" ? true : false


    function createEditTodo(ev, todo, index) {
      $mdDialog.show({
        controller: 'TodoCreateEditCtrl as TodoCreateEditVM',
        templateUrl: 'app/todo/views/todo-create-edit.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          todo: function() {
            return angular.copy(todo);
          },
          projects: ['ProjectService', function(ProjectService) {
            return ProjectService.query().$promise;
          }],
          developers: ['ProjectService','$stateParams', function(ProjectService, $stateParams) {
            return ProjectService.developers({id: $stateParams.id}).$promise;
          }]
        }
      }).then(function(todo) {
        switch (todo.requestType) {
          case "save":
            TodoHomeVM.todos.push(todo);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            TodoHomeVM.todos[index] = todo;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            TodoHomeVM.todos.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete todo.requestType;
      }, function(response) {
        console.log(response)
      });
    }


  };
})();
