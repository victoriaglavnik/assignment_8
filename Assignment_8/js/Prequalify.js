function validateForm(e) {
   'use strict';
   var $ = function(id) {
      return document.getElementById(id);
   };
   if (typeof e == 'underfined') e = window.event;

   var email = $('email').value;
   var remail = $('remail');
   var fname = $('fname');
   var lname = $('lname');
   var city = $('city');
   var state = $('state');
   var zip = $('zip');
   var income = $('income');
   var ssn = $('ssn');

   var error = false;

   console.log("hello");


/* validate name
if (/^[A-Z \.\-']{2,20}$/i.test(fname.value)) {
   removeErrorMessage('fname');
} else {
   addErrorMessage('fname', 'Please enter your first name.');
   error = true;
}

//validate email address
if (/^[w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
   removeErrorMessage('email');
} else {
   addErrorMessage('email', 'Please enter your email address.');
   error = true;
}
*/
console.log(email);

if (email == " ") {
   $("email_error").innerHTML =
   "This field is required.";
   error = true;
} else {
   $("email_error").innerHTML = "";
}



if (remail == " ") {
   $("remail_error").innerHTML =
   "This field is required.";
   error = true;
} else if (email != remail) {
   $("remail_error").innerHTML = 
   "This entry must equal first entry.";
   error = true;
} else {
   $("remail_error").innerHTML = "";

}



console.log(income);
{
   if (income > 45000) {
      $("income").innerHTML =
      alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.");
   }
   else {
      $("income").innerHTML =
      alert("We're sorry, you do not qualify for a loan at this time.");
   }
}

/*
function gross_income(){
   if (income > 45000) {
      alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.");
   }
   else {
      alert("We're sorry, you do not qualify for a loan at this time.");
   }
}
*/

function createTable()
{ 
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

window.onload = function () {
   $("apply_form").onclick = apply_form;
   $("email").focus();
};
};