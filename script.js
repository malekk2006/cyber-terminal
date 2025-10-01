const output = document.getElementById("output");
const lines = [
  "Initializing cyber core...",
  "Loading encrypted protocols...",
  "Accessing global grid...",
  "Connecting to orbital relay...",
  "Welcome, Operator [MALEA AL-ASTAL]",
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

typeLine();

// كرة أرضية وهمية (تجريبية)
const canvas = document.getElementById("globe");
const ctx = canvas.getContext("2d");

function drawGlobe() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2);
  ctx.strokeStyle = "#00ffcc";
  ctx.lineWidth = 2;
  ctx.stroke();
  requestAnimationFrame(drawGlobe);
}

drawGlobe();
