var module=angular.module("MyClockApp",[]);
module.controller("MyClockController",Main);



function Main($scope){
    var today=new Date();
    $scope.currentTime=today.toTimeString();
    //today.toLocaleString('en',{timeZoneName:'short'}).split(' ').pop();
    
   console.log("clock application");
   $scope.updateTime = function() {
       $scope.userName="";
       console.log("button click");
       var today=new Date();
    $scope.currentTime=today.toTimeString();
    //+" "+    today.toLocaleString('en',{timeZoneName:'short'}).split(' ').pop();
   }
}