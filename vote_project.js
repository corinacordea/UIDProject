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

			//le schimb dupa ce populam
			if(document.getElementById("project_title").innerText == "Project 1") {
				localStorage.project1++;
			}
			if(document.getElementById("project_title").innerText == "Statuie Ecvestra Nicolae-Florian Onica") {
				localStorage.project2++;
			}
			if(document.getElementById("project_title").innerText == "Project 3") {
				localStorage.project3++;
			}

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