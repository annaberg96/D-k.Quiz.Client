$(document).ready(() => {

  SDK.User.loadNav();

 // Adding the Clickevents to login and return.

    $ ("#return-button").click()=> {
      window.location.href = "index.html";

        $("#login-button").click(() => {
    const username = $("#inputUsername").val();
    const password = $("#inputPassword").val();


    //Login-method, which refereres to the parameteres username and password.
    SDK.User.login(username, password, (err, data) => {
      if (err && err.xhr.status === 401) {
        window.alert("Wrong username or password")
      }
      else if (err) {
          console.log("Error");
      } else if (SDK.Storage.load("Token") == null) {
        $("inputPassword").val((''));
        documment.getElementById(("error").innerHTML = "Wrong password. Try again"
      }
    } else {
      var myUser = JSON.parse(data)
      var currentUser= myUser.currentUser;
      if()

      } else {
        window.location.href = "my-page.html";
      }
    });
    //This method clears the text boxes when login
          void clearTextBoxFields(){
          usernameText.setText("");
          passwordText.setText("");
          }
      }
      $("signUpButton").click() =>   {
    window.location.href ="signUp.html"


  });

});