angular.module('todoApp').controller('InitialController', ['$scope', '$localStorage', '$uibModal', function ($scope, $localStorage, $uibModal)
{

  $scope.tothird = function (){
    location.href='#/tabs';
  }

  $scope.location=$localStorage.value;

  $scope.input = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'templates/input.html',
      controller: 'InputController',
      
    });

    modalInstance.result.then(function () {
      
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };

}]);
