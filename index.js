window.onload = initialize;

function initialize() {
  document.getElementById("signIn").onclick = signInFunc;
  document.getElementById("confirmsignup").onclick = signUp;
  
  localStorage.project1 = 300;
  localStorage.project2 = 163000;
  localStorage.project3 = 4500;
  localStorage.project4 = 10;
  localStorage.project5 = 700;
  localStorage.project6 = 200;
}

function signInFunc() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    sessionStorage.setItem("userType", "admin");
    sessionStorage.setItem("user", "admin");
    window.location = "admin.html";
  }
  else if (username == "adviser" && password == "adviser"){
    sessionStorage.setItem("userType", "adviser");
    sessionStorage.setItem("user", "adviser");
    window.location = "index-adviser.html";
  }
  else if (username == localStorage.username && password == localStorage.password){
    sessionStorage.setItem("userType", "user");
    sessionStorage.setItem("user", username);
    window.location = "index-user.html";
  }
  return false;
}

function propose_step(){
	document.getElementById("btnPropose").removeAttribute("hidden");
  document.getElementById("btnProjects").setAttribute("hidden", "");
}

function vote_step(){
  document.getElementById("btnProjects").removeAttribute("hidden");
  document.getElementById("btnPropose").setAttribute("hidden", "");
}

function signUp() {
  localStorage.username = document.getElementById("signup_username").value;
  localStorage.password = document.getElementById("signup_password").value;
  localStorage.has_proposed = 0;
  localStorage.has_voted = 0;
  localStorage.has_promoted = 0;
  sessionStorage.setItem("userType", "user");
  sessionStorage.setItem("user", document.getElementById("signup_username").value);
  window.location = "index-user.html";
  return false;
}
