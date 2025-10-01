const matrix = document.getElementById("matrix");
const main = document.getElementById("main");
const terminal = document.getElementById("terminal");
const typeSound = document.getElementById("typeSound");

const matrixLines = [
  "01010101010101010101010101010101",
  "ACCESSING CYBEROS...",
  "LOADING MODULES...",
  "ESTABLISHING CONNECTION...",
  "WELCOME MALEk al-astal",
  "SYSTEM ONLINE..."
];

let mIndex = 0;

function showMatrix() {
  if (mIndex < matrixLines.length) {
    matrix.innerText += matrixLines[mIndex] + "\n";
    mIndex++;
    setTimeout(showMatrix, 500);
  } else {
    matrix.style.display = "none";
    main.style.display = "block";
    startTerminal();
    updateClock();
    updateStats();
  }
}

showMatrix();

function startTerminal() {
  const lines = [
    "Initializing terminal...",
    "Injecting payload...",
    "Bypassing firewall...",
    "Trace started...",
    ">>> Awaiting command"
  ];
  let index = 0;
  document.addEventListener("keydown", () => {
    typeSound.currentTime = 0;
    typeSound.play();
    if (index < lines.length) {
      terminal.innerText += lines[index] + "\n";
      index++;
    } else {
      terminal.innerText += "> ";
    }
    terminal.scrollTop = terminal.scrollHeight;
  });
}

function updateClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
  }, 1000);
}

function updateStats() {
  setInterval(() => {
    document.getElementById("cpu").innerText = Math.floor(Math.random() * 100) + "%";
    document.getElementById("ram").innerText = Math.floor(Math.random() * 100) + "%";
    document.getElementById("net").innerText = Math.floor(Math.random() * 1000) + "kb/s";
  }, 1000);
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
