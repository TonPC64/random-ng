angular.module('todoApp', [])
  .controller('TodoListController', function ($scope, $interval) {
    $scope.name = ['ต้น', 'แบ็งค์', 'โอ๊ต', 'กัน']

    $scope.getRandomSpan = function () {
      rand = Math.floor((Math.random() * 5) + 5)
      var c = 0
      console.log(rand)
      timer = $interval(function () {
        $scope.data = {name: $scope.name[Math.floor((Math.random() * 4))],c: Math.floor((Math.random() * 10) + 1)}
        c++
        if (c === rand) $scope.killtimer()
      }, 70)

    }

    $scope.killtimer = function () {
      $interval.cancel(timer)
    }

  })
