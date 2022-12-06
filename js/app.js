document.getElementById("password_eye").addEventListener("click", function () {
  if (document.getElementById("password").type == "password") {
    document.getElementById("password").type = "text";
    document.getElementById("password_eye").classList.add("fa-eye");
    document.getElementById("password_eye").classList.remove("fa-eye-slash");
  } else {
    document.getElementById("password").type = "password";
    document.getElementById("password_eye").classList.add("fa-eye-slash");
    document.getElementById("password_eye").classList.remove("fa-eye");
  }
});
document.getElementById("menu_toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
  
});
document.getElementById("menu_toggle").addEventListener("click", function () {
    if (document.getElementById("sidebar").classList == "active"){
        document.getElementById("menu_toggle").classList.add("fa-xmark")
        document.getElementById("menu_toggle").classList.remove("fa-bars")
    }else{
        document.getElementById("menu_toggle").classList.add("fa-bars")
        document.getElementById("menu_toggle").classList.remove("fa-xmark")
        
    }
    
  });