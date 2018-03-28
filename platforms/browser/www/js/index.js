"use strict";
// var competencies = require('./models/competency');
var competenceRegister = [];
/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
       

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function onDeviceReady() {

    // alert("Device is ready");
    if(navigator.onLine) {

        try {
            $.getJSON("http://192.168.1.7:3000/competences", function(data,status){
                // console.log(data);
                createCompetencyObjectArray(data);

            }).error(function() { alert("error"); })
        } catch(exception) {

        }

    }else {
            createCompetencyObjectArray(competences);
    }

}
function createCompetencyObjectArray(object) {

    var data = object;
    data.forEach(function(competence) {
        var competency = new Competency(competence);
        // console.log(competency);
        competenceRegister.push(competency);
        // console.log(competenceRegister);
    });
    cloneRows();
}