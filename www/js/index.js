"use strict";
let app = {
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
            $.ajax({
                type: 'GET',
                url: 'http://localhost/infosol/todos',
                crossDomain: true,
                dataType: 'json',
                success: function (responseData, textStatus, jqXHR) {
                   console.log("The response was send:");
                   console.log(JSON.stringify(responseData));
                   $('#txtresults').append(responseData)
                },
                error: function (responseData, textStatus, errorThrown) {
                    console.log(responseData);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
          
        }else {
            console.log("This CAT is Offline!")
            console.log("The ID of the first object: " + todos.ID);
            console.log("The Description of the first object: " + todos.Description);  
        }

    }

};

app.initialize();

$('#btn2').on('click', ()=> {
    let newID = $('#txtid').val();
    let newDescription =  $('#txtdescription').val();
    let newTodoContainer = $('<p></p>');


    // Debug
    console.log("id: " + newID);
    console.log("description: " + newDescription);


    let newTodo = {ID: newID, Description: newDescription};

    //To Post the new Todo
    $.ajax({
        type: 'POST',
        url: 'http://localhost/infosol/todos',
        crossDomain: true,
        data: newTodo,
        dataType: 'json',
        success: function (responseData, textStatus, jqXHR) {
           console.log("The response was sent:");
           console.log(responseData);
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(responseData);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
    //To Update the Todo List on the web page
    $.ajax({
        type: 'GET',
        url: 'http://localhost/infosol/todos',
        crossDomain: true,
        dataType: 'json',
        success: function (responseData, textStatus, jqXHR) {
           console.log("This Just In!");
           console.log(JSON.stringify(responseData));
           $('#main').empty();
           $('#main').append(JSON.stringify(responseData));
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
        
        // console.log("The ID of the first object: " + todos.ID);
        // console.log("The Description of the first object: " + todos.Description);
        /** If this is online, the app should call the api to get the data */
        // $('#todoid').val("The ID of the first object: " + todos.ID);
        $.ajax({
            type: 'GET',
            url: 'http://localhost/infosol/todos',
            crossDomain: true,
            dataType: 'json',
            success: function (responseData, textStatus, jqXHR) {
               console.log("This Just In!");
               console.log(JSON.stringify(responseData));
               $('#main').append(JSON.stringify(responseData));
            },
            error: function (responseData, textStatus, errorThrown) {
                console.log(responseData);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
      
    }else {
        console.log("This CAT is Offline!")
    
        console.log("The Description of the first object: " + todos.Description);  
    }

}

