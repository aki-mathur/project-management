(function() {
  'use strict';
  angular.module('projectManagement').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope','$sce', '$state','Auth','$rootScope'];

  function HomeCtrl($scope, $sce, $state, Auth, $rootScope) {
    var HomeCtrlVM = this;
    HomeCtrlVM.goTo = goTo;
    HomeCtrlVM.logout = logout;
    HomeCtrlVM.menuItem = []

    if(!Auth.isAuthenticated()){
      $state.go("login",{});
    }


    function logout(){
      var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
        Auth.logout(config).then(function(oldUser) {
          $state.go("login",{});
        }, function(error) {
            // An error occurred logging out.
        });

    }

    function setMenuList() {
        switch($rootScope.user.role) {
          case 'admin':
              HomeCtrlVM.menuItem = projectManagerMenuList;
              break;
          case 'developer':
              HomeCtrlVM.menuItem = developerMenuList;
              break;;
          default: HomeCtrlVM.menuItem = [];
              break;
        };

      }


    var projectManagerMenuList = [
      {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}},
      // {name:"Developers", icon: $sce.trustAsHtml('<i class="fa fa-list "></i>'), state: {name:'container.user.developer', args: {}}},
      {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}},
      // {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}},
      {name:"Charts", icon: $sce.trustAsHtml('<i class="fa  fa-pie-chart"></i>'), state: {name:'container.user.chart', args: {}}}
     ];


     var developerMenuList = [
       {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}}
       // {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}}
     ];


     setMenuList();

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
