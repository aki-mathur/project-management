angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.todo', {
              url: '/todos',
              controller: "TodoHomeCtrl as TodoHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/todo/views/todo-home.html',
              resolve: {
                todos: ['TodoService', function(TodoService) {
                  return TodoService.query({
                  }).$promise;
                }]
            }
          })

}]);
