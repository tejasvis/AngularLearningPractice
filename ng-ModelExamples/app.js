var app=angular.module("ngModelExamples",[]);
app.controller("MyngmodelController",ngmodelexamples);
app.controller("Controller1",ctrl1);
app.controller("Controller2",ctrl2);

function ngmodelexamples($scope){
    
    $scope.textboxChange=function() {
        console.log("chnge");
    }
}

function ctrl1(){
    this.test="in ctrl1";
}
function ctrl2(){
    this.test="in ctrl2";
}