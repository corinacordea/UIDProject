window.onload = function (){
	document.getElementById('redirectLink1').onclick = redirect;
	document.getElementById('redirectLink2').onclick = redirect;
	document.getElementById('redirectLink3').onclick = redirect;
	document.getElementById('redirectLink4').onclick = redirect;
	document.getElementById('redirectLink5').onclick = redirect;


	var projects = document.getElementsByClassName('jsProject');
	var titles=[];
	var projImages=[];
	for(var i=0; i<projects.length; i++){
		titles[i] = projects[i].childNodes[1].innerText;
		projImages[i] = projects[i].childNodes[4].childNodes[1].getAttribute("src");
		handle(projects[i],titles[i], projImages[i]);
	}
	var items = document.getElementsByClassName('dropdown-item');	
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}
}

function handle(project, title, img){
	project.childNodes[3].childNodes[1].childNodes[1].onclick = function(){setValues(title, img);};
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

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(46.7712,23.6236),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}