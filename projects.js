window.onload = function (){
	document.getElementById("signIn").onclick = signInFunc;
	var projects = document.getElementsByClassName('jsProject');
	var imgs = document.getElementsByClassName('hvrbox');
	var titles=[];
	var projImages=[];
	links = document.getElementsByClassName('redirectLink');
	for(var i=0; i<projects.length; i++){
		titles[i] = projects[i].childNodes[1].innerText;
		projImages[i] = imgs[i].childNodes[1].getAttribute("src");
		handle(projects[i],titles[i], projImages[i], links[i]);
	}
	var items = document.getElementsByClassName('dropdown-item');
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}
	if(sessionStorage.getItem("userType") === null) {
		document.getElementById("btnReset").style.display = 'none';
	}
	else {
		document.getElementById("btnReset").style.display = 'block';
	}
}

function handle(project, title, img, projLink){
	projLink.onclick = function(){setValues(title, img); redirect()};
}

function click(item){
	item.onclick = function(){item.parentNode.parentNode.childNodes[1].innerHTML=item.innerText};
}

function setValues(title, img){
	localStorage.projectTitle = title;
	localStorage.projectImage = img;
}

function redirect(){
	if (sessionStorage.getItem("userType") == "admin") {
		window.location = "review-project-admin.html";
	}
	else {
		if (sessionStorage.getItem("userType") == "user") {
			window.location = "vote_project.html";
		}
		else {
			if (sessionStorage.getItem("userType") == "adviser") {
				//urmeaza
			}
		}
	}
  	return false;
}

function signInFunc() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    sessionStorage.setItem("userType", "admin");
    sessionStorage.setItem("user", "admin");
		window.location = "projects.html";
  }
  else if (username == "adviser" && password == "adviser"){
    sessionStorage.setItem("userType", "adviser");
    sessionStorage.setItem("user", "adviser");
		window.location = "projects.html";
  }
  else {
    sessionStorage.setItem("userType", "user");
    sessionStorage.setItem("user", "user");
    window.location = "projects.html";
  }
  return false;
}
