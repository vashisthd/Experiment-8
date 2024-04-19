function validRegistration() {
    var nameOfUser = document.getElementById("username").value;
    var emailOfUser = document.getElementById("emailused").value;
    var pass = document.getElementById("pass").value;
    var con_pass = document.getElementById("confirmPass").value;

    nameOfUser = nameOfUser.trim();
    emailOfUser = emailOfUser.trim();
    pass = pass.trim();
    con_pass = con_pass.trim();

    // Ordering of checking .... 1. username entered or not 2. email entered or not 3. password 8 se bda hona chaiye 
    if(nameOfUser == ""){
        alert("Please input a username .");
        return false; // autentication failed for username 
    }

    if(emailOfUser == ""){
        alert("Please input a email address");
        return false; // autentication failed for email id 

    }
    if(pass.length < 8 ){
        alert("Password length must be 8 or greater than 8 .");
        return false;
    }
    if(pass == ""){
        alert("Please input a password of character,digits & special characters .");
        return false; // autentication failed for password
    }

    if(pass !== con_pass){
        alert("Password don't match with confirm password . please try again !!! ");
        return false;   // autentication failed bcoz pass and confirm password are not matched 
    
    }


    alert("Registration success!!!")
    return true;
}
