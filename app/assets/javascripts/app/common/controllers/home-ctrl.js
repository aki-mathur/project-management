(function() {
  'use strict';
  angular.module('projectManagement').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope','$sce', '$state'];

  function HomeCtrl($scope, $sce, $state) {
    var HomeCtrlVM = this;
    HomeCtrlVM.goTo = goTo;
    HomeCtrlVM.menuItem = [
    {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}},
    {name:"Developers", icon: $sce.trustAsHtml('<i class="fa fa-list "></i>'), state: {name:'container.user.developer', args: {}}},
    {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}},
    {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}}
]
    function goTo(state) {
      return $state.go(state.name,state.args);
    }
 }
})();
