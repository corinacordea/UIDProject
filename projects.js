window.onload = function (){
	document.getElementById("signIn").onclick = signInFunc;
	document.getElementById("confirmsignup").onclick = signUp;
	document.getElementById("type").parentNode.childNodes[1].innerHTML = "";
	document.getElementById("category").parentNode.childNodes[1].innerHTML = "";
	document.getElementById("feasibility").parentNode.childNodes[1].innerHTML = "";
	if(sessionStorage.getItem("userType") === null) {
		document.getElementById("btnReset").style.display = 'none';
	}
	else {
		document.getElementById("btnReset").style.display = 'block';
	}
	var projects = document.getElementsByClassName('jsProject');
	var imgs = document.getElementsByClassName('hvrbox');
	var titles=[];
	var projImages=[];
	links = document.getElementsByClassName('redirectLink');
	for(var i=0; i<projects.length; i++){
		titles[i] = projects[i].childNodes[3].innerText;
		projImages[i] = imgs[i].childNodes[1].getAttribute("src");
		handle(projects[i],titles[i], projImages[i], links[i]);
	}
	var items = document.getElementsByClassName('dropdown-item');
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}
	document.getElementById("search").onclick = search;
}

function handle(project, title, img, projLink){
	projLink.onclick = function(){setValues(title, img); redirect()};
}

function click(item){
	item.onclick = function(){item.parentNode.parentNode.childNodes[1].innerHTML=item.innerText;
		search();
	};
}

function search(){
	var projects = document.getElementsByClassName('project');
	var title = document.getElementById("searchInput").value;
	var titles = document.getElementsByClassName('card-title');
	if(title != ""){
		filter();
		for(var i=0; i<titles.length; i++){
			if(titles[i].innerText != title){
				projects[i].style.display = 'none';
			}
		}
	}else{
		filter();
	}
}

function initFilterProjects(projects){
	for(var i=0; i<projects.length; i++){
			projects[i].style.display = 'inline';
	}
}

function filter(){
	var type = document.getElementById("type").parentNode.childNodes[1].innerHTML;
	var category = document.getElementById("category").parentNode.childNodes[1].innerHTML;
	var feasibility = document.getElementById("feasibility").parentNode.childNodes[1].innerHTML;
	var projList = document.getElementsByClassName('project');
	initFilterProjects(projList);
	var typeValues = document.getElementsByClassName('type');
	var categoryValues = document.getElementsByClassName('category');
	var feasibilityValues = document.getElementsByClassName('feasibility');
	for(var i=0; i<projList.length; i++){
		if(type != "All" && type != ""){
				filterProjects(projList, typeValues, type);	
		}
		if(category != "All" && category != ""){
				filterProjects(projList, categoryValues, category);	
		}
		if(feasibility != "All" && feasibility != ""){
				filterProjects(projList, feasibilityValues, feasibility);	
		}
	}
}

function filterProjects(projects, values, value){
	for(var i=0; i<projects.length; i++){
		if(values[i].innerText != value){
			projects[i].style.display = 'none';
		}
	}
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
				window.location = "review-project-adviser.html";
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
	else if (username == localStorage.username && password == localStorage.password){
    sessionStorage.setItem("userType", "user");
    sessionStorage.setItem("user", username);
    window.location = "projects.html";
  }
  return false;
}

function signUp() {
  localStorage.username = document.getElementById("signup_username").value;
  localStorage.password = document.getElementById("signup_password").value;
  localStorage.has_proposed = 0;
  localStorage.has_voted = 0;
  localStorage.has_promoted = 0;
  sessionStorage.setItem("userType", "user");
  sessionStorage.setItem("user", document.getElementById("signup_username").value);
  window.location = "projects.html";
  return false;
}
