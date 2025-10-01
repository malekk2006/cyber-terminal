const terminal = document.getElementById("terminal");
const typeSound = document.getElementById("typeSound");

const fakeCode = [
  "Initializing CyberOS...",
  "Loading kernel modules...",
  "Establishing secure uplink...",
  "Injecting payload...",
  "Bypassing firewall...",
  "Access granted to node MALEK...",
  "Downloading encrypted data...",
  "Decrypting packets...",
  "System override initiated...",
  "Welcome Commander MALEK",
  ">>> Awaiting next command..."
];

let currentLine = 0;

document.addEventListener("keydown", (e) => {
  typeSound.currentTime = 0;
  typeSound.play();

  if (e.key === "1") {
    document.getElementById("popup").style.display = "block";
    terminal.innerText += "> breach initiated...\n";
  } else if (e.key === "2") {
    terminal.innerText += "> tracing route to global node...\n";
  } else if (e.key === "3") {
    terminal.innerText = "";
    currentLine = 0;
  } else {
    if (currentLine < fakeCode.length) {
      terminal.innerText += fakeCode[currentLine] + "\n";
      currentLine++;
    } else {
      terminal.innerText += "> ";
    }
  }

  terminal.scrollTop = terminal.scrollHeight;
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
