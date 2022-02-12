let firstName = document.getElementById("firstN")
let lastName = document.getElementById("LastN")
let email = document.getElementById("email-id");
let password = document.getElementById("pwd")

let errorNameF = document.getElementById("goneF")
let errorNameL = document.getElementById("goneL")
let errorMail = document.getElementById("gone")
let errorPassword = document.getElementById("goneP")

let errorIcon = document.getElementsByClassName("imageS");

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

let button = document.getElementById('button')

function checkF(){
    // FIRST NAME
    if(firstName.value.length == 0){
        errorNameF.style.display = 'block';
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("imgF").style.display = 'block'
    }   
    else {
        errorNameF.style.display = 'none';
        firstName.style.border = '1px #E0E0E0 solid';
        document.getElementById("imgF").style.display = 'none'
    }
}

button.addEventListener("click", checkF) ;


function checkLast(){
    // FIRST NAME
    if(lastName.value.length == 0){
        errorNameL.style.display = 'block';
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("imgL").style.display = 'block'
    }   
    else {
        errorNameL.style.display = 'none';
        lastName.style.border = '1px #E0E0E0 solid';
        document.getElementById("imgL").style.display = 'none'

    }
}

button.addEventListener("click", checkLast) ;




function checker() {
  // EMAIL
    if(email.value.match(mailRegex)){
        errorMail.style.display = 'none';
        email.style.border = '1px #E0E0E0 solid';
        document.getElementById("imgM").style.display = 'none'
    }
    else if(email.value == ""){
        errorMail.style.display = 'none';
        email.style.border = '1px #E0E0E0 solid';
        document.getElementById("imgM").style.display = 'none'
    }
    else{
        errorMail.style.display = 'block';
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("imgM").style.display = 'block'

    }
}

button.addEventListener("click", checker) ;


function checkPass(){
    // FIRST NAME
    if(password.value.length == 0){
        errorPassword.style.display = 'block';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("imgP").style.display = 'block'
    }   
    else {
        errorPassword.style.display = 'none';
        password.style.border = '1px #E0E0E0 solid';
        document.getElementById("imgP").style.display = 'none'
    }
}

button.addEventListener("click", checkPass) ;
