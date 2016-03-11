angular.module('app.chairs', [])

.controller('chairsController', ['$scope', '$interval', function($scope, $interval) {

  var loadChairs = function(){
    $scope.chairs = [];
    for (var i = 1; i <= 100; i++) {
      $scope.chairs.push(i);
    }
  };


  $scope.moveChairs = function() {
    loadChairs();

    var seq = 0,
      index = 0;

    $scope.disable = true;

    var remove = $interval(function() {
      // when the length is 1 exit
      if ($scope.chairs.length > 1) {

        $scope.chairs.splice(index, 1);
        // increment index based on sequence
        index += ++seq;

        // when the set index is greater or equal to the length, set it to the remainder of index mod length
        if (index >= $scope.chairs.length) {
          index = index % $scope.chairs.length;
        }
      } else {
        return finish();
      }

    }, 700);

    function finish() {
      $interval.cancel(remove);
      $scope.disable = false;
    }

  };

  loadChairs();
}]);
