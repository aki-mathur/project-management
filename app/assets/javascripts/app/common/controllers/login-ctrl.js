(function() {
  'use strict';
  angular.module('projectManagement').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','$sce', '$state','$rootScope', 'Auth'];

  function LoginCtrl($scope, $sce, $state, $rootScope, Auth) {
    var LoginVM = this;
    LoginVM.login = login;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}


    function login(){
      Auth.login(LoginVM.user, config).then(function(user){
        $rootScope.user = user
        $state.go('container.user.project');
      }, function(response){
        alert(response.data.error)
      });
    }

 }
})();
