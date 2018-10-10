(function() {
  'use strict';
  angular.module('projectManagement').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope','$sce', '$state','Auth','$rootScope'];

  function HomeCtrl($scope, $sce, $state, Auth, $rootScope) {
    var HomeCtrlVM = this;
    HomeCtrlVM.goTo = goTo;
    HomeCtrlVM.logout = logout;

    function logout(){
      Auth.logout
    }

    HomeCtrlVM.menuItem = [
    {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}},
    {name:"Developers", icon: $sce.trustAsHtml('<i class="fa fa-list "></i>'), state: {name:'container.user.developer', args: {}}},
    {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}},
    {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}}
]
    function goTo(state) {
      return $state.go(state.name,state.args);
    }

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

    $scope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      alert("You have been logged out.")
      $rootScope.user = undefined
    });
 }
})();
