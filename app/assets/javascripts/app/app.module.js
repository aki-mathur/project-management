angular.module('projectManagement', [
  'ngResource',
  'ngAnimate',
  'templates', // Angular rails templates module
  'ui.router',
  'ngMaterial',
  'valdr',
  'vAccordion',
  'ng-mfb',
  'angular-loading-bar',
  'Devise'
]);

angular.module('projectManagement')
  .run(['$rootScope', function($rootScope) {

  }]);

angular.module('projectManagement')
  .controller('RootController', ['$scope',function($scope) {
    console.log("HomeCtrl");
  }]);
