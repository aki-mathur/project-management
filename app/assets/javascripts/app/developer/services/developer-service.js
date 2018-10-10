angular.module('projectManagement').factory('DeveloperService', ['$resource', function($resource) {

  var DeveloperService = $resource('users/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    }
  });
  return DeveloperService;
}]);
