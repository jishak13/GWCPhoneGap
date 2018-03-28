"use strict";
var searchString;


$('#txtid').on('keyup', function(){
    // $('#main').empty();
    searchString = $('#txtid').val();
    console.log(searchString);
    // competenceRegister = [];
    // // alert("Device is ready");
    // if(navigator.onLine) {


    //     $.getJSON("http://localhost:80/competences/"+searchString, function(data,status){
    //         // console.log(data);
    //         competenceRegister = [];
    //         createCompetencyObjectArray(data);

    //     }).fail(function(error) {
    //         // console.log( error);
    //         createCompetencyObjectArray(competences);
    //     })


    // }else {
    //     createCompetencyObjectArray(competences);
    // }
    // cloneRows(searchString);
});

