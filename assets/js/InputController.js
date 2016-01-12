angular.module('todoApp').controller('InputController', ['$scope', '$modalInstance', function ($scope, $modalInstance)
{
  
	$scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);
