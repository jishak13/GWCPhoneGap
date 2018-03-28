"use strict";
//Element Properties
var compIDString = 'competence-';
var codeIDString = 'code-';
var statementIDString = 'statement-';
var detailIDString = 'detail-';
var classString = 'center-text col-xs-0 col-sm-12 col-md-4 col-lg-4 col-xlg-4';
//Element Variables
var $mainContainer =  $('#main');
var $emptyDivRow = undefined;
var $emptyDivColumn = undefined;
var $emptyParagraph = undefined;


//Load the competence Register to the Document/Browser
function cloneRows() {





     $emptyDivColumn = $('<div>', {class: classString })

    for(var i = 0; i< competenceRegister.length; i ++){

         // create the IDs and class string based on the i = index
        compIDString += i;
        codeIDString +=i;
        statementIDString +=i;
        detailIDString +=i;

        // Create The Competence Div And Set the ID And Class
        $emptyDivRow = $('<div>',{class: 'row', id: compIDString});

        // Do the same thing three times
        for(var a =1; a <=3; a++){

            switch(a){
                //1st time create the div and p for code
                case 1:
                    $emptyDivColumn = $('<div>', {class: classString });
                    $emptyParagraph = $('<p>',{ class: 'code' , text: competenceRegister[i].code});
                    $emptyDivColumn.append($emptyParagraph);
                    // Append it to the competence div
                    $emptyDivRow.append(($emptyDivColumn));
                    break;
                // 2nd time create the div and p for competence
                case 2:
                    $emptyDivColumn = $('<div>', {class: classString });
                    $emptyParagraph = $('<p>',{ class: 'code' , text: competenceRegister[i].competence});
                    $emptyDivColumn.append($emptyParagraph);
                    // Append it to the competence div
                    $emptyDivRow.append(($emptyDivColumn));
                    break;
                // 3rd time create the div and ul li for details
                case 3:
                    $emptyDivColumn = $('<div>', {class: classString });
                    $emptyParagraph = $('<p>',{ class: 'code' , text: competenceRegister[i].details});
                    $emptyDivColumn.append($emptyParagraph);
                    // Append it to the competence div
                    $emptyDivRow.append(($emptyDivColumn));
                    break;
            }

        }







        // Append the competence div to the mainDiv
        $mainContainer.append($emptyDivRow);






    }
}







