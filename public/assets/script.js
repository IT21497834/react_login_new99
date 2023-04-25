const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
    

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
// here down
    // function validateForm() {
    //     // Get the form values
    //     var name = document.forms["registrationForm"]["name"].value;
    //     var email = document.forms["registrationForm"]["email"].value;
    //     var password = document.forms["registrationForm"]["password"].value;
        
        
    //     // Check that all required fields are filled out
    //     if (name == "" || email == "" || password == "" || confirmPassword == "") {
    //       alert("All fields are required. Please complete the form.");
    //       return false;
    //     }
        
    //     // Check that the email is properly formatted
    //     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //       alert("Please enter a valid email address.");
    //       return false;
    //     }
        
    //     // Check that the password and confirm password fields match
    //     if (password != confirmPassword) {
    //       alert("The password and confirm password fields do not match.");
    //       return false;
    //     }
        
    //     // If all validation checks pass, submit the form
    //     return true;
    //   }