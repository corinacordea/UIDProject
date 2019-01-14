window.onload = initialize;

function initialize() {
	document.getElementById("block1").onclick = block1;
	document.getElementById("block2").onclick = block2;
	document.getElementById("block3").onclick = block3;
	document.getElementById("block4").onclick = block4;
	document.getElementById("logout").onclick = signOut;
	document.getElementById("userName").innerHTML = localStorage.username;
}


function signOut() {
  sessionStorage.clear();
  window.location = "index.html";
  return false;
}

function block1() {
	if (document.getElementById("block1").innerHTML == "Block") {
		localStorage.is_blocked = 1;
		document.getElementById("block1").innerHTML = "Unblock";
	}
	else {
		localStorage.is_blocked = 0;
		document.getElementById("block1").innerHTML = "Block";
	}
	return false;
}

function block2() {
	if (document.getElementById("block2").innerHTML == "Block") {
		document.getElementById("block2").innerHTML = "Unblock";
	}
	else {
		document.getElementById("block2").innerHTML = "Block";
	}
	return false;
}

function block3() {
	if (document.getElementById("block3").innerHTML == "Block") {
		document.getElementById("block3").innerHTML = "Unblock";
	}
	else {
		document.getElementById("block3").innerHTML = "Block";
	}
	return false;
}

function block4() {
	if (document.getElementById("block4").innerHTML == "Block") {
		document.getElementById("block4").innerHTML = "Unblock";
	}
	else {
		document.getElementById("block4").innerHTML = "Block";
	}
	return false;
}
