angular.module('projectManagement').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var containerState = {
    name: 'container',
    abstract: true,
    controller: 'HomeCtrl as HomeCtrlVM',
    templateUrl: 'app/common/views/home.html'
  }

  var containerPublicState = {
    name: 'container.public',
    abstract: true,
    template: '<ui-view />',
  }

  var containerPublicHomeState = {
    name: 'container.public.home',
    url: '/'
  }

  var containerUserState = {
    name: 'container.user',
    abstract: true,
    template: '<ui-view />',
  }

  $stateProvider.state(containerState);
  $stateProvider.state(containerPublicState);
  $stateProvider.state(containerPublicHomeState);
  $stateProvider.state(containerUserState);



}]);
