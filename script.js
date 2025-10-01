function grantAccess() {
  const code = document.getElementById("code").value;
  const status = document.getElementById("status");
const output = document.getElementById("output");
const lines = [
  "Initializing CyberOS...",
  "Loading encrypted protocols...",
  "Accessing global grid...",
  "Connecting to orbital relay...",
  "Welcome, Commander MALEK",
  "System status: STABLE",
  "Awaiting input..."
];

let index = 0;

function typeLine() {
  if (index < lines.length) {
    output.innerHTML += lines[index] + "\n";
    index++;
    setTimeout(typeLine, 1000);
  }
}

  
  if (code === "malek2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
  } else {
    status.innerText = "ACCESS DENIED";
  }
}
