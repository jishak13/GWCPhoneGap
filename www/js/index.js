"use strict";

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        // alert("Device is ready");
        if(navigator.onLine) {
            console.log("This CAT is Online!")
            // console.log("The ID of the first object: " + todos.ID);
            // console.log("The Description of the first object: " + todos.Description);
            /** If this is online, the app should call the api to get the data */
            // $('#todoid').val("The ID of the first object: " + todos.ID);
          
        }else {
            console.log("This CAT is Offline!")
            console.log("The ID of the first object: " + todos.ID);
            console.log("The Description of the first object: " + todos.Description);  
        }

    },

};

app.initialize();

$('#btn1').on('click',()=>{
    let response = undefined;

    $.ajax({
        type: 'GET',
        url: 'http://localhost:1337/hello',
        crossDomain: true,
        dataType: 'json',
        success: function (responseData, textStatus, jqXHR) {
           console.log(responseData);
           response = responseData;
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(responseData);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
    //Selects the todoid element and appends the string of texts and values from the js/json/todos.js array
    $('#todoid').append(JSON.stringify(response));
});

$('#btn2').on('click', ()=> {
    let newID = $('#txtid').val();
    let newDescription =  $('#txtdescription').val();
    let newTodoContainer = $('<p></p>');


    // Debug
    console.log("id: " + newID);
    console.log("description: " + newDescription);


    let newTodo = {ID: newID, Description: newDescription};

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/sayhello',
        crossDomain: true,
        data: newTodo,
        dataType: 'json',
        success: function (responseData, textStatus, jqXHR) {
           console.log("The response was send:");
           console.log(responseData);
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(responseData);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
    // todos.push(newTodo);
    // console.log(todos);
    // document.write(JSON.stringify(todos));

});

function onDeviceReady() {
    
    
    // alert("Device is ready");
    if(navigator.onLine) {
        console.log("This CAT is Online!")
        console.log(todos);
        // console.log("The ID of the second object: " + todos[1].ID);
        // console.log("The Description of the second object: " + todos[1].Description);

        /** If this is online, the app should call the api to get the data */
     
        $.ajax({
            type: 'GET',
            url: 'http://localhost:1337/hello',
            crossDomain: true,
            dataType: 'json',
            success: function (responseData, textStatus, jqXHR) {
               console.log("The response was send:");
               console.log(responseData);
            },
            error: function (responseData, textStatus, errorThrown) {
                console.log(responseData);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

        

    }else {
        console.log("This CAT is Offline!")
        // console.log("The ID of the first object: " + todos[0].ID);
        // console.log("The Description of the first object: " + todos[0].Description);  
    }

}