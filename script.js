function grantAccess() {
  const code = document.getElementById("code").value;
  const status = document.getElementById("status");

  if (code === "malek2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
  } else {
    status.innerText = "ACCESS DENIED";
  }
}
