window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("project_image").setAttribute("src",localStorage.projectImage);
	document.getElementById("submitButton").onclick = vote;
}

function vote() {
	if (document.getElementById("submitButton").innerHTML == "Vote") {
		if (localStorage.has_voted < 4) {
			localStorage.has_voted = localStorage.has_voted + 1;
			document.getElementById("submitButton").innerHTML = "Voted";
			$("#confirmVote").modal('show');
		}
		else {
			$("#errorVote").modal('show');
		}
	}
	else {
		alert("You already voted for this project!");
	}
	return false;
}