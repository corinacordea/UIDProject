	window.onload = function (){
	document.getElementById("project_title").innerText = localStorage.proposalTitle;
	var storedImages = JSON.parse(localStorage.getItem("proposalFiles"));
	document.getElementById("project_image").setAttribute("src", "images/"+storedImages[0]);
	document.getElementById("project_desc").innerText = localStorage.proposalDescription;
	document.getElementById("project_address").innerText = localStorage.proposalAddress;
	document.getElementById("project_category").innerText = localStorage.proposalCategory;
	document.getElementById("project_cost").innerText = "Soon to be estimated";
	document.getElementById("project_type").innerText = "Soon to be decided";

	$('.input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
}