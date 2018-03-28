"use strict";

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
        
        // alert("Device is ready");
        if(navigator.onLine) {
            console.log("This CAT is Online!")
            console.log("The ID of the first object: " + todos.ID);
            console.log("The Description of the first object: " + todos.Description);
            /** If this is online, the app should call the api to get the data */
            $('#todoid').val("The ID of the first object: " + todos.ID);
            

        }else {
            console.log("This CAT is Offline!")
            console.log("The ID of the first object: " + todos.ID);
            console.log("The Description of the first object: " + todos.Description);  
        }

    },

};

app.initialize();

$('#btn1').on('click',()=>{
    //Selects the todoid element and appends the string of texts and values from the js/json/todos.js array
    $('#todoid').append("The ID of the first object: " + todos[0].ID +
    "<br> The Description of the first object: " +
    todos[0].Description);
});

$('#btn2').on('click', ()=> {
    let newID = $('#txtid').val();
    let newDescription =  $('#txtdescription').val();
    let newTodoContainer = $('<p></p>');


    // Debug
    console.log("id: " + newID);
    console.log("description: " + newDescription);


    let newTodo = {ID: newID, Description: newDescription};
    todos.push(newTodo);
    console.log(todos);
    document.write(JSON.stringify(todos));

});

function onDeviceReady() {
    
    
    // alert("Device is ready");
    if(navigator.onLine) {
        console.log("This CAT is Online!")
        console.log(todos);
        console.log("The ID of the second object: " + todos[1].ID);
        console.log("The Description of the second object: " + todos[1].Description);

        /** If this is online, the app should call the api to get the data */
     

        

    }else {
        console.log("This CAT is Offline!")
        console.log("The ID of the first object: " + todos[0].ID);
        console.log("The Description of the first object: " + todos[0].Description);  
    }

}