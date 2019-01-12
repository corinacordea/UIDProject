window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("project_image").setAttribute("src",localStorage.projectImage);
	document.getElementById("type").innerText = localStorage.projectType;
	document.getElementById("category").innerText = localStorage.projectCategory;
	document.getElementById("address").innerText = localStorage.projectAddress;
	document.getElementById("description").innerText = localStorage.projectDescription;
	document.getElementById("price").innerText = localStorage.projectPrice;
	document.getElementById("updateButton").onclick = review;
}

function review(){
	return false;
}
