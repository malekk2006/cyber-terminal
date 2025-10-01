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

  const canvas = document.getElementById("globe");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let angle = 0;

function drawGlobe() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const radius = 120;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "#00ffcc";
  ctx.lineWidth = 2;
  ctx.stroke();

  // خطوط دوران وهمية
  ctx.beginPath();
  ctx.arc(x, y, radius, angle, angle + Math.PI / 2);
  ctx.strokeStyle = "#00ffff";
  ctx.lineWidth = 1;
  ctx.stroke();

  angle += 0.01;
  requestAnimationFrame(drawGlobe);
}

drawGlobe();

  if (code === "malek2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
  } else {
    status.innerText = "ACCESS DENIED";
  }
}
