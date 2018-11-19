(function() {
  'use strict';
  angular.module('projectManagement').controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['$scope','$sce', '$state','$rootScope', 'Auth','$mdToast'];

  function RegistrationCtrl($scope, $sce, $state, $rootScope, Auth, $mdToast) {
    var RegistrationVM = this;
    RegistrationVM.signup = signup;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}


    function signup(){
      Auth.register(RegistrationVM.user, config).then(function(registeredUser) {
          $rootScope.user = registeredUser
          $state.go('container.user.project');
       }, function(response) {
         $mdToast.show({
               template: '<md-toast class="md-toast ' + 'error' +'">' + response.data.errors.join(', ') + '</md-toast>',
               hideDelay: 3000,
               position: 'bottom left'
           });
       });

    }

 }
})();
