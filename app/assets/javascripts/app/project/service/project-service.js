angular.module('projectManagement').factory('ProjectService', ['$resource', function($resource) {

  var ProjectService = $resource('projects/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    },
    developers: {
      method: 'get',
      isArray: true,
      url: '/developers'
    }
  });
  return ProjectService;
}]);
