 //defining parameters
 var togglePassword = document.querySelector('#togglePassword');
 var password = document.querySelector('#password');
 var meter = document.getElementById('password-strength');
 //toggle for the eye button
 togglePassword.addEventListener('click', function(e) {
   // toggle the type attribute with ternary operator
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   // toggle the eye slash icon
   this.classList.toggle('fa-eye-slash');
 });
 // array for password strength level
 var description = ["Worst", "Weak", "Moderate", "Good", "Strong"];
 // giving warning from ID
 var warning = document.getElementById("warning");
 // giving suggestion from ID
 var suggestion = document.getElementById("suggestion");
 // calculating strength level from ID
 var strengthlevel = document.getElementById("strength-level");
 // description and meter updating as the user inputs password
 password.addEventListener('input', function() {
   var strength = zxcvbn(password.value);
   meter.value = strength.score;
   // outputting strength level
   strengthlevel.innerHTML = "Strength level: " + description[strength.score];
   // if input is given, output warnings if required
   if (strength.feedback.warning != "") {
     warning.innerHTML = "Warning: " + strength.feedback.warning;
   }
   // if input is given, output suggestions depending on the password
   if (strength.feedback.suggestions != "") {
     suggestion.innerHTML = "Suggestions: " + strength.feedback.suggestions;
   }
 });
