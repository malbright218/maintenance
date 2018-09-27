$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    var firstName = $("#newFirstName");
    var lastName = $("#newLastName");
    var newUserName = $("#newEmail");
    var newPassword = $("#newPassword");
    
    // User Sign Up test function 
    /*
    $(document).on("click", "#testSign", testSignUp);
    function testSignUp(event) {
        event.preventDefault();
        console.log(firstName.val().trim());
        console.log(lastName.val().trim());
        console.log(newUserName.val().trim());
        console.log(newPassword.val().trim());
    }*/



    $(document).on("click", "#testSign", handleUserSignUp);
    var url = window.location.search;
    console.log(url);
    function handleUserSignUp(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!firstName.val().trim().trim()) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertUser({
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            username: newUserName.val().trim(),
            password: newPassword.val().trim()
        });
    } //end function handleUserFormSubmit

    function upsertUser(userData) {
        $.post("/api/register", userData);
    }

});