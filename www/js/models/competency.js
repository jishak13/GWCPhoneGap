/********Josephs Competency Model Object JS Code Start******/
"use strict";


//Constructor for a Competency  Object
function Competency(object){

    this.code = object.Code;
    this.competence = object['Competence_Statement'] ;
    this.details = object.Details.split('*');
    this.details.splice(0,1);

    // console.log(this);
}
