angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.project-detail.todo', {
              url: '/todos',
              controller: "TodoHomeCtrl as TodoHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/todo/views/todo-home.html',
              resolve: {
                todos: ['TodoService','$stateParams', function(TodoService,$stateParams) {
                  return TodoService.query({project_id: $stateParams.id
                  }).$promise;
                }]
            }
          })

}]);
