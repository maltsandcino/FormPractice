addEventListener("DOMContentLoaded", (event) => {

    password = document.getElementById("password");
    confir = document.getElementById("confirm");

    password.addEventListener('change', check);
    confir.addEventListener('change', check)

})

function check(){

    console.log("checking passwrods");

    password = document.getElementById("password");
    confir = document.getElementById("confirm");
    validation = document.getElementsByClassName("validate");

    if(password.value != confir.value){
        validation[0].innerHTML = "Passwords do not match"
    }
    else{
        validation[0].innerHTML = "";
    }

}