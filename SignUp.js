$(document).ready(() =>{

    $("return_button").click, () => {
        window.location.href ="index.html";

    } );

    $("create_button").on("click", () => {
        const username = $("#login-name").val();
        const newPassword = $ ("#new-pass").val();
        const verifyPassword = $("#verify-pass").val();

        if (userName == ""|| newPassword == ""||verifyPassword== ""|| ){
            window.alert("Alle felter skal udfyldes")

        }

        SDK.Register.registerUser(userName, newPassword,verifyPassword, (err, data) =>{
            if (err && err.xhr.status == 400){
            $(".margin-bottom").addClass("Error");

            }
            else if (err) {
                console.log(err)
            } else {
              window.alert("Sign-up succesed")
              window.alert"login.html";



            }

        } )



    })

}