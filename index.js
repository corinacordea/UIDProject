window.onload = initialize;

function initialize() {
  document.getElementById("signIn").onclick = signInFunc;
  document.getElementById("logout").onclick = signOut;
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
  else {
    sessionStorage.setItem("userType", "user");
    sessionStorage.setItem("user", "user");
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
