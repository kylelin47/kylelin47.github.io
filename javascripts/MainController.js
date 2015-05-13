angular.module('main', [])
  .controller('MainController', function($scope) {
    $scope.DISPLAY_TYPE = Object.freeze({
      MAIN: 1, 
      JS  : 2, 
      CSS : 3
    });
    $scope.display = $scope.DISPLAY_TYPE.MAIN;
  });
