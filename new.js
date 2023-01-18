//validation code

var email = document.forms['myForm']["email"].value;
var password = document.forms['myForm']["pswd"].value;

var email_error = document.getElementById('email-error');
var pswd_error = document.getElementById('pswd-error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pswd_verify);

function validate()
{
    if (email.length<9 || email.length == 0)
    {
        email.style.border = "1px soid red";
        email_error.style.display = "block";
        email.focus();
        ////seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (password.length<6 || password.length == 0)
    {
        password.style.border = "1px soid red";
        pswd_error.style.display = "block";
        password.focus();
        returnval = false;
    }
}

function email_verify(){
    if (email.length<3) {
        email.style.border = "1px soid silver";
        email_error.style.display = "none";
        returnval = false;
    }
}