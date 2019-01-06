window.onload = function (){
	var items = document.getElementsByClassName('dropdown-item');	
	for(var i=0; i<items.length; i++){
		click(items[i]);
	}	
}

function click(item){
	item.onclick = function(){item.parentNode.parentNode.childNodes[1].innerHTML=item.innerText};
}