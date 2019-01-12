window.onload = function (){
	var items = document.getElementsByClassName('dropdown-item');
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}
	title = document.getElementById("title");
	address = document.getElementById("address");
	submitButton = document.getElementById("submitButton");
	message = document.getElementById("message");
	comment = document.getElementById("comment");
	list = document.getElementById("Fields");

	title.onblur = verifyTitle;
	address.onblur = verifyAddress;
	comment.onblur = verifyComment;
	submitButton.onclick = submitF;
}

function click(item){
	item.onclick = function(){item.parentNode.parentNode.childNodes[1].innerHTML=item.innerText};
}

function verifyTitle(){
	var re = /[a-zA-Z]{5,}/;
	if(!re.test(title.value)){
		title.style.backgroundColor = "pink";
		title.setAttribute("valid", "false");
	}else{
		title.style.backgroundColor = "white";
		title.setAttribute("valid", "true");
	}
}

function verifyComment(){
	var re = /[a-zA-Z]{50,}/;
	if(!re.test(comment.value)){
		comment.style.backgroundColor = "pink";
		comment.setAttribute("valid", "false");
	}else{
		comment.style.backgroundColor = "white";
		comment.setAttribute("valid", "true");
	}
}

function verifyAddress(){
	var re = /[a-zA-Z]{10,}/;
	var re1 = /[0-9]{1,}/;
	var re2 = /[@#$%^&*]/;
	if(!re.test(address.value) || !re1.test(address.value) || re2.test(address.value)){
		address.style.backgroundColor = "pink";
		address.setAttribute("valid", "false");
	}else{
		address.style.backgroundColor = "white";
		address.setAttribute("valid", "true");
	}
}

function submitF(){
	verifyTitle();
	verifyAddress();
	var labels=[];
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	title = document.getElementById("title");
	address = document.getElementById("address");

	if(title.getAttribute("valid") == "false"){
		field = document.createElement('li');
		field.appendChild(document.createTextNode("Title"));
		list.appendChild(field);
	}

	if(address.getAttribute("valid") == "false"){
		field = document.createElement('li');
		field.appendChild(document.createTextNode("Address"));
		list.appendChild(field);
	}

	if (list.childElementCount>0){
		message.textContent="The data introduced in the following fields is not valid: ";
	}else{
		localStorage.proposalTitle = document.getElementById("title").value;
		localStorage.proposalDescription = document.getElementById("comment").value;
		localStorage.proposalAddress = document.getElementById("address").value;
		var e = document.getElementById("category");
		localStorage.proposalCategory = e.options[e.selectedIndex].text;
		localStorage.proposalVotes = 0;
		localStorage.has_proposed = 1;
		imgs = document.getElementById("inputFiles").files;
		var imgNames = [];
		localStorage.proposalFiles = [];
		for(var i = 0; i<imgs.length; i++){
			imgNames[i] = imgs[i].name;
		}
		localStorage.setItem("proposalFiles", JSON.stringify(imgNames));
		alert("Project successfully added!");
	}
}