window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("type").innerText = localStorage.projectType;
	document.getElementById("category").innerText = localStorage.projectCategory;
	document.getElementById("address").innerText = localStorage.projectAddress;
	document.getElementById("description").innerText = localStorage.projectDescription;
	document.getElementById("price").innerText = localStorage.projectPrice;
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
			if(document.getElementById("project_title").innerText == "Promenade Over/On Somes") {
				localStorage.project1++;
			}
			if(document.getElementById("project_title").innerText == "Statuie Ecvestra Nicolae-Florian Onica") {
				localStorage.project2++;
			}
			if(document.getElementById("project_title").innerText == "3D Digital Model of the City") {
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