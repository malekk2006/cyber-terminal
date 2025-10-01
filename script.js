function grantAccess() {
  const code = document.getElementById("code").value;
  const status = document.getElementById("status");

  if (code === "malek2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    typeLine();
    drawGlobe();
    updateStats();
  } else {
    status.innerText = "ACCESS DENIED";
  }
}

// تيرمنال أوامر تلقائية
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

// كرة أرضية وهمية
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

  ctx.beginPath();
  ctx.arc(x, y, radius, angle, angle + Math.PI / 2);
  ctx.strokeStyle = "#00ffff";
  ctx.lineWidth = 1;
  ctx.stroke();

  angle += 0.01;
  requestAnimationFrame(drawGlobe);
}

// مؤشرات وهمية
function updateStats() {
  setInterval(() => {
    document.getElementById("cpu").innerText = Math.floor(Math.random() * 100) + "%";
    document.getElementById("ram").innerText = Math.floor(Math.random() * 100) + "%";
    document.getElementById("net").innerText = Math.floor(Math.random() * 1000) + "kb/s";
  }, 1000);
}

// أوامر وهمية
function runCommand() {
  const cmd = document.getElementById("command").value.toLowerCase();
  const clickSound = document.getElementById("clickSound");
  clickSound.play();

  if (cmd === "breach") {
    document.getElementById("main").style.display = "none";
    document.getElementById("breach").style.display = "block";
    document.getElementById("breachSound").play();
  } else if (cmd === "open window") {
    document.getElementById("popup").style.display = "block";
  } else if (cmd === "clear") {
    output.innerHTML = "";
  } else {
    output.innerHTML += `> ${cmd}\nUnknown command\n`;
  }

  document.getElementById("command").value = "";
}

// إغلاق النافذة الوهمية
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
