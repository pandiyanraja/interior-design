function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("result"),innerHTML="Enter username*";
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result"),innerHTML="Atleast six letter";
        return false;(0)
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result"),innerHTML="Enter your Email";
        return false;
    }
    
    else if(document.formfill.password.value==""){
        document.getElementById("result"),innerHTML="Enter your password";
        return false;
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result"),innerHTML="password must be 6-digit";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result"),innerHTML="Enter confirm password";
        return false;
    }
    else if(document.formfill.password.value == document.formfill.cpassword.value==""){
        document.getElementById("result"),innerHTML="password does'n matched";
        return false;
    }
    else if(document.formfill.cpassword.value == document.formfill.password.value){
     popup.classList.add("open-slide")
        return false;
    }  
    
}
