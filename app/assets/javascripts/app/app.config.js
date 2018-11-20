angular.module('projectManagement').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

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
    onEnter: ['Auth','$state', function(Auth, $state){
         Auth.currentUser().then(function(){
           $state.go('container.user.dashboard')
         })
       }]
  }
  var containerPublicRegistrationState = {
    name: 'signup',
    url: '/signup',
    controller: 'RegistrationCtrl as RegistrationVM',
    templateUrl: 'app/common/views/registration.html'
  }

  var containerUserState = {
    name: 'container.user',
    abstract: true,
    template: '<ui-view />',
  }

  $stateProvider.state(containerState);
  $stateProvider.state(containerPublicState);
  $stateProvider.state(containerPublicHomeState);
  $stateProvider.state(containerPublicRegistrationState);
  $stateProvider.state(containerUserState);



}]);
