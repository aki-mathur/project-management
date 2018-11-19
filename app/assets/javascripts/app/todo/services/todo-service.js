angular.module('projectManagement').factory('TodoService', ['$resource', function($resource) {

  var TodoService = $resource('todos/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    },
    dashboard: {
      method: 'get',
      isArray: true,
      url: '/dashboard'
    },
    charts: {
      method: 'get',
      isArray: true,
      url: '/charts'
    }
  });
  return TodoService;
}]);
