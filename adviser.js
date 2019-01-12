window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("project_image").setAttribute("src",localStorage.projectImage);
	document.getElementById("updateButton").onclick = review;
}

function review(){
	return false;
}
