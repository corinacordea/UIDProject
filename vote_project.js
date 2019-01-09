window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("project_image").setAttribute("src",localStorage.projectImage);
	document.getElementById("submitButton").onclick = vote;
}

function vote() {
	if (document.getElementById("submitButton").innerHTML == "Vote") {
		document.getElementById("submitButton").innerHTML = "Voted";
	}
	else {
		alert("You already voted for this project!");
	}
	return false;
}