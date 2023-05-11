
function myFunction(){
  var username = document.forms["myForm"]["username"].value;
  var password1 = document.forms["myForm"]["password1"].value;
}
  if (password1 == password2){
     window.location.href="index.html";
}
  else{
    alert("Invalid Username and Password");
  }

  
        document.getElementById('clear').addEventListener('click',() => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      })