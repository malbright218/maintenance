$(document).ready(function () {
    var username = $("#username");
    var password = $("#password");

    $(document).on("click", "#login", getUsers);


    function getUsers() {
        $.get("/api/users", function(data) {
          console.log(data)
        });
      }























})