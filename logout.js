window.onload = initialize;

function initialize() {
  document.getElementById("logout").onclick = signOut;
}

function signOut() {
  sessionStorage.clear();
  window.location = "index.html";
  return false;
}
