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
    name: 'login',
    url: '/login',
    controller: 'LoginCtrl as LoginVM',
    templateUrl: 'app/common/views/login.html',
    onEnter: function(Auth, $state){
      console.log(Auth.currentUser());
         Auth.currentUser().then(function(){
           $state.go('container.user.dashboard')
         })
       }
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
