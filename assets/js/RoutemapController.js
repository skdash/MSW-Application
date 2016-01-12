angular.module('todoApp').controller('RoutemapController', ['$scope', '$modalInstance', function ($scope, $modalInstance)
{
  
	$scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);
