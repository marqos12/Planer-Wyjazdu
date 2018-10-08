var myApp = angular.module('myApp',[]);

myApp.controller('mainController', ['$scope', function($scope) {

  //$scope.tabGodzin = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  $scope.tabGodzin = [8,9,10,11,12,13,14,15,16,17,18,19];
  $scope.tabMinut = [00,30];
  $scope.miejsce = {};
  $scope.miejsce.godzinaRozpoczecia = 8;
    $scope.miejsce.godzinaZakonczenia = 19;
  $scope.poczatek = 0;
  $scope.dlugosc = 440;

  $scope.przedzialy = [];
  najwczesniej = 15;
  najpozniej = 12;
  //$scope.przedzialy=["6:00","6:15","6:30","6:45","7:00","7:15","7:30","7:45","8:00","8:15","8:30","8:45",
  //    "9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45",
   //   "13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45",
   //   "17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45",
   //   "21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00","23:15","23:30","23:45","24:00"]

   /* $scope.przedzialy=["8:00","8:15","8:30","8:45",
        "9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45",
        "13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45",
        "17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45"]*/


  $scope.dodajMiejsce = function() {
      var godzinaSzer = 730/$scope.tabGodzin.length;
      var minutaSzer = godzinaSzer/60;
      $scope.poczatek = ($scope.miejsce.godzinaRozpoczecia-6) * godzinaSzer + $scope.miejsce.minutaRozpoczecia * minutaSzer;
        przelicz();
        console.log($scope.przedzialy);
  };

  przelicz = function(){
      if ($scope.miejsce.godzinaRozpoczecia < najwczesniej) najwczesniej = $scope.miejsce.godzinaRozpoczecia;
      if ($scope.miejsce.godzinaZakonczenia > najpozniej) najpozniej = $scope.miejsce.godzinaZakonczenia;
      $scope.przedzialy.slice(0,$scope.przedzialy.length);
      roznica = najpozniej - najwczesniej;
      for (var i=0; i<roznica; i++) {
          $scope.przedzialy.push(i);
      }
  }



}]);