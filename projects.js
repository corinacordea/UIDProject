window.onload = function (){
	var projects = document.getElementsByClassName('jsProject');
	var titles=[];
	var projImages=[];
	for(var i=0; i<projects.length; i++){
		titles[i] = projects[i].childNodes[1].innerText;
		projImages[i] = projects[i].childNodes[3].childNodes[1].getAttribute("src");
		handle(projects[i],titles[i], projImages[i]);
	}	
}
function handle(project, title, img){
	project.childNodes[3].childNodes[1].onclick = function(){setValues(title, img);};
}
function setValues(title, img){
	localStorage.projectTitle = title;
	localStorage.projectImage = img;
}
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(46.7712,23.6236),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

