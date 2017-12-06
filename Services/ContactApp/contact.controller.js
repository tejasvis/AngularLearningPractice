(function () {
    var app = angular.module("contactApp");


    app.controller("contactCtrl", function (contactDatasvc) {
        this.contacts=contactDatasvc.contacts;
       
        this.contactSelected = this.contacts[0];
        this.selectedContact = function (index) {
            this.contactSelected = this.contacts[index];
        }

    })

})();