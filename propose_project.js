window.onload = function (){
	var items = document.getElementsByClassName('dropdown-item');
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}
	title = document.getElementById("title");
	address = document.getElementById("address");
	submitButton = document.getElementById("submitButton");
	message = document.getElementById("message");
	list = document.getElementById("Fields");

	title.onblur = verifyTitle;
	address.onblur = verifyAddress;

	submitButton.onclick = submitF;
}

function click(item){
	item.onclick = function(){item.parentNode.parentNode.childNodes[1].innerHTML=item.innerText};
}

function verifyTitle(){
	var re = /[a-zA-Z]{3,}/;
	if(!re.test(title.value)){
		title.style.backgroundColor = "yellow";
		title.setAttribute("valid", "false");
	}else{
		title.style.backgroundColor = "white";
		title.setAttribute("valid", "true");
	}
}

function verifyAddress(){
	var re = /[a-zA-Z]{3,}/;
	var re1 = /[0-9]{1,}/;
	var re2 = /[@#$%^&*]/;
	if(!re.test(address.value) || !re1.test(address.value) || re2.test(address.value)){
		address.style.backgroundColor = "yellow";
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
		alert("Project successfully added!");
	}
}
