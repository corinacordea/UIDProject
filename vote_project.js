window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.projectTitle;
	document.getElementById("type").innerText = localStorage.projectType;
	document.getElementById("category").innerText = localStorage.projectCategory;
	document.getElementById("address").innerText = localStorage.projectAddress;
	document.getElementById("description").innerText = localStorage.projectDescription;
	document.getElementById("price").innerText = localStorage.projectPrice;
	document.getElementById("project_image").setAttribute("src",localStorage.projectImage);
	document.getElementById("submitButton").onclick = vote;
	if((document.getElementById("project_title").innerText == "Colina Park Rehabilitation")  || (document.getElementById("project_title").innerText == "Colina Park Rehabilitation")) {
		document.getElementById("btnWrap").style.display = 'none';
	}
	else {
		document.getElementById("btnWrap").style.display = 'block';
	}
}

function vote() {
	if (document.getElementById("submitButton").innerHTML == "Vote") {
		if (localStorage.has_voted < 4) {
			localStorage.has_voted = localStorage.has_voted + 1;
			document.getElementById("submitButton").innerHTML = "Voted";
			$("#confirmVote").modal('show');

			if(document.getElementById("project_title").innerText == "Promenade Over/On Somes") {
				localStorage.project1++;
			}
			else if(document.getElementById("project_title").innerText == "Statuie Ecvestra Nicolae-Florian Onica") {
				localStorage.project2++;
			}
			else if(document.getElementById("project_title").innerText == "3D Digital Model of the City") {
				localStorage.project3++;
			}
			else if(document.getElementById("project_title").innerText == "Colina Park Rehabilitation") {
				localStorage.project4++;
			}
			else if(document.getElementById("project_title").innerText == "Cluj Bike Station Near the Office Building") {
				localStorage.project5++;
			}
			else if(document.getElementById("project_title").innerText == "Removal of High Voltage Poles on the Somes River") {
				localStorage.project6++;
			}else{
				localStorage.proposalVotes++;
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
