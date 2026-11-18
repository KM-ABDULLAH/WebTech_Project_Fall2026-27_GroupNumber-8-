let parcels={
    "PP-1042":{sender:"Pet Essentials",location: "Dhaka Hub", status:"On The Way", cls:"transit"},
    "PP-1067":{sender:"Fashion House",location: "Delivered to your address", status:"Delivered", cls:"delivered"},
    "PP-1075":{sender:"Techno BD",location: "Awaiting Pickup", status:"Pending", cls:"pending"}

};





document.addEventListener("DOMContentLoaded",function()
{
    const loginForm=document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit",function(event){
            if(!collect_login_data()){
                event.preventDefault();
            }
            else {
                event.preventDefault();
                window.location.href="userDashboard.html";
            }
        })
    }



const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (collect_register_data()) {
            window.location.href = "userDashboard.html";
        }
    });
}

const trackForm=document.getElementById("trackForm")
if(trackForm){
    trackForm.addEventListener("submit",function(event){
        event.preventDefault()
        trackParcel();
    })
}
})


function collect_login_data()
{
    let validUser=validateLoginUser();
    let validPass=validateLoginPass();

    return validPass&&validUser;
}

function validateLoginUser()
{
    let user=document.getElementById("username").value.trim();
    let userError=document.getElementById("LoginUserError");

    if (user=="")
    {
        userError.innerHTML="Enter your username";
        return false;
    }

    else{
        userError.innerHTML="";
        return true;
    }

}
function validateLoginPass()
{
    let pass=document.getElementById("password").value;
    let passError=document.getElementById("LoginPassError");
    if (pass=="")
        {
            passError.innerHTML="Enter your password";
            return false;
        }
        else if (pass.length<8)
        {
            passError.innerHTML="Password must be atleast 8 characters";
            return false;
        }

        else{
            passError.innerHTML="";
            return true;
        }
}

function collect_register_data()
{
    let validName=validateFullName();
    let validEmail=validateEmail();
    let validPhone=validatePhone();
    let validBirth=validateDob();
    let validGender=validateRegGender();
    let validCity=validateCity();
    let validAddress=validateAddress();
    let validUser=validateUsername();
    let validPass=validatePassword();
    let validConfirm=validateConfirmPassword();
    let validTerms=validateTerms();

    return validName && validAddress && validBirth && validCity && validConfirm && validEmail && validGender && validPass && validPhone && validTerms && validUser;
    
}
function validateFullName()
{
    let name = document.getElementById("fullName").value.trim();
    let nameError = document.getElementById("FullNameError");

    if (name == "")
    {
        nameError.innerHTML = "Enter your full name";
        return false;
    }
    else if (name.length < 3)
    {
        nameError.innerHTML = "Name must be at least 3 characters";
        return false;
    }
    else
    {
        nameError.innerHTML = "";
        return true;
    }
}

function validateEmail()
{
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("EmailError");
    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "")
    {
        emailError.innerHTML = "Please enter your email";
        return false;
    }
    else if (!regexpression.test(email))
    {
        emailError.innerHTML = "Please enter the right email format";
        return false;
    }
    else
    {
        emailError.innerHTML = "";
        return true;
    }
}

function validatePhone()
{
    let phone = document.getElementById("phone").value.trim();
    let phoneError = document.getElementById("PhoneError");
    let phonePattern = /^01[0-9]{9}$/;

    if (phone === "")
    {
        phoneError.innerHTML = "Please enter your phone number";
        return false;
    }
    else if (!phonePattern.test(phone))
    {
        phoneError.innerHTML = "Phone must be 11 digits and start with 01";
        return false;
    }
    else
    {
        phoneError.innerHTML = "";
        return true;
    }
}

function validateDob()
{
    let dob = document.getElementById("dob").value;
    let dobError = document.getElementById("DobError");

    if (dob === "")
    {
        dobError.innerHTML = "Please select your date of birth";
        return false;
    }
    else if (new Date(dob) > new Date())
    {
        dobError.innerHTML = "Date of birth cannot be in the future";
        return false;
    }
    else
    {
        dobError.innerHTML = "";
        return true;
    }
}

function validateRegGender()
{
    let genders = document.querySelectorAll('input[name="gender"]');
    let genderError = document.getElementById("GenderError");
    let selectGender = "";

    for (let i = 0; i < genders.length; i++)
    {
        if (genders[i].checked)
        {
            selectGender = genders[i].value;
            break;
        }
    }

    if (selectGender == "")
    {
        genderError.innerHTML = "Please select your gender";
        return false;
    }
    else
    {
        genderError.innerHTML = "";
        return true;
    }
}

function validateCity()
{
    let city = document.getElementById("city").value;
    let cityError = document.getElementById("CityError");

    if (city === "")
    {
        cityError.innerHTML = "Please select your city";
        return false;
    }
    else
    {
        cityError.innerHTML = "";
        return true;
    }
}

function validateAddress()
{
    let address = document.getElementById("address").value.trim();
    let addressError = document.getElementById("AddressError");

    if (address == "")
    {
        addressError.innerHTML = "Please enter your address";
        return false;
    }
    else
    {
        addressError.innerHTML = "";
        return true;
    }
}

function validateUsername()
{
    let user = document.getElementById("username").value.trim();
    let userError = document.getElementById("UsernameError");

    if (user == "")
    {
        userError.innerHTML = "Please choose a username";
        return false;
    }
    else if (user.length < 4)
    {
        userError.innerHTML = "Username must be at least 4 characters";
        return false;
    }
    else
    {
        userError.innerHTML = "";
        return true;
    }
}

function validatePassword()
{
    let pass = document.getElementById("password").value;
    let passError = document.getElementById("PasswordError");

    if (pass == "")
    {
        passError.innerHTML = "Please enter a password";
        return false;
    }
    else if (pass.length < 8)
    {
        passError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    else
    {
        passError.innerHTML = "";
        return true;
    }
}

function validateConfirmPassword()
{
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let confirmError = document.getElementById("ConfirmError");

    if (confirm == "")
    {
        confirmError.innerHTML = "Please confirm your password";
        return false;
    }
    else if (confirm !== pass)
    {
        confirmError.innerHTML = "Passwords do not match";
        return false;
    }
    else
    {
        confirmError.innerHTML = "";
        return true;
    }
}

function validateTerms()
{
    let terms = document.getElementById("terms").checked;
    let termsError = document.getElementById("TermsError");

    if (!terms)
    {
        termsError.innerHTML = "You must agree to the terms and conditions";
        return false;
    }
    else
    {
        termsError.innerHTML = "";
        return true;
    }
}

function trackParcel()
{
    let id = document.getElementById("parcelId").value.trim().toUpperCase();
    let error = document.getElementById("ParcelError");
    let result = document.getElementById("TrackResult");

    result.innerHTML = "";

    if (id === "")
    {
        error.innerHTML = "Please enter a parcel ID";
        return false;
    }

    let p = parcels[id];

    if (p === undefined)
    {
        error.innerHTML = "No parcel found with ID " + id;
        return false;
    }

    error.innerHTML = "";
    result.innerHTML =
        '<div class="table-wrap">' +
        '<table class="parcel-table">' +
        '<tr><th>Parcel ID</th><th>Sent By</th><th>Current Location</th><th>Status</th></tr>' +
        '<tr><td>' + id + '</td><td>' + p.sender + '</td><td>' + p.location + '</td>' +
        '<td><span class="status ' + p.cls + '">' + p.status + '</span></td></tr>' +
        '</table></div>';
    return true;
}
