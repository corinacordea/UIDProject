window.onload = initialize;

function initialize() {
  document.getElementById("signIn").onclick = signInFunc;
}

function signInFunc() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    window.location = "admin.html";
  }
  else if (username == "adviser" && password == "adviser"){
    window.location = "index-adviser.html";
  }
  else {
    window.location = "index-user.html";
  }
  return false;
}

$(document).ready(function() {
  $('.input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
});

$('#tab1').on('click' , function(){
    $('#tab1').addClass('login-shadow');
   $('#tab2').removeClass('signup-shadow');
});

$('#tab2').on('click' , function(){
    $('#tab2').addClass('signup-shadow');
   $('#tab1').removeClass('login-shadow');
});
