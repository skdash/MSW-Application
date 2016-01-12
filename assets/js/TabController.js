angular.module('todoApp').controller('TabController', ['$scope', '$uibModal',function ($scope, $uibModal)
{
  
  $scope.tabs = [
    { title:'Street sweeping and Drainage cleaning', content:'Street sweeping and Drainage cleaning'},
    { title:'Hotels and Restaurants', content:'Hotels and Restaurants'},
    { title:'Construction and Demolition waste', content:'Construction and Demolition waste'},
    { title:'Bio-medical waste', content:'Bio-medical waste'},
  ];

  var tabClasses;
  
  function initTabs() {
    tabClasses = ["","","",""];
  }
  
  $scope.getTabClass = function (tabNum) {
    return tabClasses[tabNum];
  };
  
  $scope.getTabPaneClass = function (tabNum) {
    return "tab-pane " + tabClasses[tabNum];
  }
  
  $scope.setActiveTab = function (tabNum) {
    initTabs();
    tabClasses[tabNum] = "active";
  };
  
  $scope.tab1 = "This is first section";
  $scope.tab2 = "This is SECOND section";
  $scope.tab3 = "This is THIRD section";
  $scope.tab4 = "This is FOURTH section";
  
  //Initialize 
  initTabs();
  $scope.setActiveTab(1);

  $scope.createmodal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'templates/routemap.html',
      controller: 'RoutemapController',
      
    });

    modalInstance.result.then(function () {
      
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };

}]);
