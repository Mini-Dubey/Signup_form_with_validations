function userName(nameByUser){

    if  ((nameByUser==null||nameByUser=="")){
        document.getElementById("errormsg_uname").innerHTML = "This is the required field";
        document.getElementById("errormsg_uname").style.display="block"
    }

    else{
        document.getElementById("errormsg_uname").style.display = "none";
    }
}


function passwordValidation(){
    var psswrd=document.getElementById("pname").value;
    if((psswrd==null||psswrd=="")){
        document.getElementById("errormsg_pname").innerHTML = "This is the required field";
        document.getElementById("errormsg_pname").style.display="block"
    }else{
        document.getElementById("errormsg_pname").style.display="none"}
    // Lowercase characters
        var lcase=/[a-z]/g;
        if(psswrd.match(lcase)) {
            document.getElementById("lower").style.color="green";
        }
        else{
            document.getElementById("lower").style.color="#939E94";
        }
    // UpperCase characters
        var ucase=/[A-Z]/g;
        if(psswrd.match(ucase)){
            document.getElementById("capital").style.color="green";
        }
        else{
            document.getElementById("capital").style.color="#939E94";
        }
    // Digits
        var number=/[0-9]/g;
        if(psswrd.match(number)){
            document.getElementById("digit").style.color="green";
        }
        else{
            document.getElementById("digit").style.color="#939E94";
        }
    // Special Characters
        var chrctr=/[/\W|_]/g;
        if(psswrd.match(chrctr)){
            document.getElementById("special").style.color="green";
        }
        else{
            document.getElementById("special").style.color="#939E94";
        }
    // Length of the psswrd
        var pswd=psswrd.length;
        if((pswd>8) && (pswd<20)){
            document.getElementById("nos").style.color="green";
        }
        else{
            document.getElementById("nos").style.color="#939E94";
        }
}


    
function validateName(fieldValue,type){
    var regex = /^([a-zA-Z]{2,})$/;

    if ((fieldValue==null||fieldValue=="")){
        if(type=="fname"){
           document.getElementById("errormsg_fname").innerHTML = "This is the required field";
            document.getElementById("errormsg_fname").style.display="block";}
        
            else if(type=="lname"){
            document.getElementById("errormsg_lname").innerHTML = "This is the required field";
            document.getElementById("errormsg_lname").style.display ="block";
        }   
    }

    else if(!regex.test(fieldValue)){
        if(type=="fname"){
            document.getElementById("errormsg_fname").innerHTML = "FirstName cannot contain Number";
            document.getElementById("errormsg_fname").style.display="block";}
        
            else{
            document.getElementById("errormsg_lname").innerHTML = "LastName cannot contain Number";
            document.getElementById("errormsg_lname").style.display ="block";
        }
    }
    
    else{
        if(type=="fname"){
            document.getElementById("errormsg_fname").style.display="none";}

        else if(type=="lname"){
            document.getElementById("errormsg_lname").style.display ="none";} 
    }
}

function mobileNumber(mobile){

    if((mobile==null)||(mobile=="")){
        document.getElementById("errormsg_mobile").innerHTML = "This is the required field";
        document.getElementById("errormsg_mobile").style.display ="block";
    }

    var numberLength=mobile.length;

    if((numberLength>10)||(numberLength<10)){
        document.getElementById("errormsg_mobile").innerHTML = "Mobile Number must be of 10 digit";
        document.getElementById("errormsg_mobile").style.display ="block";
    }
    else{
        document.getElementById("errormsg_mobile").style.display="none";
    }
}

function userEmail(emailByUser){

    var emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if((emailByUser==null)||(emailByUser=="")){
        document.getElementById("errormsg_email").innerHTML = "This is the required field";
        document.getElementById("errormsg_email").style.display ="block";
    }

    else if(!emailRegex.test(emailByUser)){
        document.getElementById("errormsg_email").innerHTML = "Invalid Email";
        document.getElementById("errormsg_email").style.display="block";
    }

    else{
        document.getElementById("errormsg_email").style.display="none";
    }
}

function address(userAddress){

    if((userAddress==null)||(userAddress=="")){
        document.getElementById("errormsg_address").innerHTML = "This is the required field";
        document.getElementById("errormsg_address").style.display="block";
    }

    else{
    document.getElementById("errormsg_address").style.display="none";
    }
}


function gender(userGender){

    if((userGender==null)||(userGender=="")){
        document.getElementById("errormsg_gender").innerHTML = "This is the required field";
        document.getElementById("errormsg_gender").style.display="block";
    }

    else if((userGender=="male"||userGender=="female"||userGender=="other"||userGender=="Female"||userGender=="Male"||userGender=="Other")){
        document.getElementById("errormsg_gender").style.display="none";}

    else{
        document.getElementById("errormsg_gender").innerHTML = "Gender not Right";
        document.getElementById("errormsg_gender").style.display="block";

    }
}

function dobYear(dobByYear){


    var yearLength=dobByYear.length;

    if((dobByYear==null)||(dobByYear=="")){
        document.getElementById("errormsg_dobyear").innerHTML = "This is the required field";
        document.getElementById("errormsg_dobyear").style.display="block";
    }

    else if((yearLength>4)||(dobByYear>2006)){
        document.getElementById("errormsg_dobyear").innerHTML = "Please enter year in YYYY format, user must be 18+";
        document.getElementById("errormsg_dobyear").style.display="block";
    }

    else{
        document.getElementById("errormsg_dobyear").style.display="none";
    }
}

function dobMonth(dobByMonth){

    var monthLength=dobByMonth.length;

    if((dobByMonth==null)||(dobByMonth=="")){
        document.getElementById("errormsg_dobmonth").innerHTML = "This is the required field";
        document.getElementById("errormsg_dobmonth").style.display="block";
    }

    else if((monthLength>2)||(dobByMonth>12)){
        document.getElementById("errormsg_dobmonth").innerHTML = "Please enter month in MM format, Invalid Month";
        document.getElementById("errormsg_dobmonth").style.display="block";
    }

    else{
        document.getElementById("errormsg_dobmonth").style.display="none";
    }
}

function dobDate(dobByDate){

    var dateLength=dobByDate.length;

    if((dobByDate==null)||(dobByDate=="")){
        document.getElementById("errormsg_dobdate").innerHTML = "This is the required field";
        document.getElementById("errormsg_dobdate").style.display="block";}

    else if((dateLength>2)||(dobByDate>31)){
        document.getElementById("errormsg_dobdate").innerHTML = "Please enter date in DD format, Invalid Date";
        document.getElementById("errormsg_dobdate").style.display="block";
    }

    else{
        document.getElementById("errormsg_dobdate").style.display="none";
    }
}

function termsAndConditions(tick){

    if(tick===false){
        document.getElementById("errormsg_check").innerHTML="Please Check the Box";
        document.getElementById("errormsg_check").style.display="block";
    }

    else{
        document.getElementById("errormsg_check").style.display="none";
    }
}


function completeFunctionCall(){
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pname").value;
    // var psswrd=document.getElementById("pname").value;
    var firtNameValue=document.getElementById("fname").value;
    var lastNameValue=document.getElementById("lname").value;
    var userMobileNumber=document.getElementById("pnum").value;
    var emailValue=document.getElementById("email").value;
    var genderValue=document.getElementById("gender").value;
    var addressByUser=document.getElementById("address").value;
    var dobyear=document.getElementById("dob1").value;
    var dobmonth=document.getElementById("dob2").value;
    var dobdate=document.getElementById("dob3").value;
    var tnc=document.getElementById("check").checked;

    userName(username);
    passwordValidation(password);
    validateName(firtNameValue,"fname");
    validateName(lastNameValue,"lname");
    mobileNumber(userMobileNumber);
    userEmail(emailValue);
    gender(genderValue);
    address(addressByUser);
    dobYear(dobyear);
    dobMonth(dobmonth);
    dobDate(dobdate);
    termsAndConditions(tnc);
}