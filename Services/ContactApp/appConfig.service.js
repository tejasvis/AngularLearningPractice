(function(){
var app=angular.module("contactApp");

app.service("AppDataServicesvc",function (AppNameSvc){
    this.name=AppNameSvc;
    this.Author="Tejasvi Srigiriraju";
    this.currentDate=new Date().toDateString();  
})
})();
