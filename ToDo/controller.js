angular.module("TodocontrollerApp",[])
.controller("TodoController",TodoController);

function TodoController(){
    
this.resultOptions=[
   
];
    this.Todo=function(btnValue){
        
        if(btnValue=="Add"){
            this.resultOptions.push(this.todoAddValue);
            this.todoAddValue="";
            
        }
    }

}