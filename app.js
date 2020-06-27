(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckControllerController', LunchCheckControllerController);
LunchCheckControllerController.$inject=['$scope'];

function LunchCheckControllerController($scope){
   $scope.DishListString="";

    $scope.LunchCheker=function(){
      if($scope.DishListString.length>0){
          $scope.changeTextStyle="text-success";
          $scope.myStyle={'border-color':'green'}
          $scope.dishList=$scope.DishListString.split(',');
          var count=0;
          angular.forEach($scope.dishList, function(value, key) {
               if(value.trim().length>0){
                 count++;
               }
          });
          if(count<=3){
            $scope.message="Enjoy!";
          }else{
              $scope.message="Too much!";
          }
      }else{
        $scope.changeTextStyle="text-danger";
        $scope.myStyle={'border-color':'red'}
        $scope.message="Please enter data first";
      }
    };
 }
})();
