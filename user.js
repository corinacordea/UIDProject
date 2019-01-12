window.onload = initialize;

function initialize(){
	 document.getElementById("logout").onclick = signOut;
	if(localStorage.has_proposed == 1) {
		document.getElementById("promoteBtn").removeAttribute("hidden");
  		document.getElementById("proposeBtn").setAttribute("hidden", "");
	}
	else {
		document.getElementById("proposeBtn").removeAttribute("hidden");
  		document.getElementById("promoteBtn").setAttribute("hidden", "");
  	}
}

function signOut() {
  sessionStorage.clear();
  window.location = "index.html";
  return false;
}