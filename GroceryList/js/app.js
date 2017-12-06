
var app=angular.module('tutorialApp',["ngRoute","tutorialCtrlModule"]);


app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: 'TutorialCtrl',
        templateUrl: "views/tutorials.html"
    })
    .when("/tutorialSecond",{
        controller: 'TutorialCtrl2',
        templateUrl: "views/tutorialSecond.html"
    })
    .otherwise({
        redirectTo: "/"
    });
})