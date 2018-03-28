"use strict";

var searchResults = [];
// var competencies = require('./models/competency');
var competenceRegister = [];

function createCompetencyObjectArray(object) {
competenceRegister = [];

    var data = object;
    data.forEach(function(competence) {
        var competency = new Competency(competence);
        // console.log(competency);
        competenceRegister.push(competency);
        // console.log(competenceRegister);
    });
    cloneRows();
}