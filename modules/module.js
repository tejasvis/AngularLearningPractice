angular.module("hellomodulesApp",[])
.controller("hellomodulectrller",Hellomodctrl);

function Hellomodctrl(){
    this.msg="Sample hello modules msg";
}