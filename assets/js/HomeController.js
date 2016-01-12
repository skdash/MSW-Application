angular.module('todoApp').controller('HomeController', ['$scope', '$location', '$localStorage', function ($scope, $location, $localStorage)
 {
  $scope.formData = {};
  $scope.todos = [];

  $scope.addTodo = function() {
  	$localStorage.value=$scope.value
    location.href='#/initial';
  }

}])