// TERMINAL INTRO
const terminalLines = [
  "Initializing secure connection...",
  "Loading cybersecurity modules...",
  "User authenticated: Mo",
  "Access level: SOC Trainee",
  "Launching portfolio..."
];

let line = 0;
let char = 0;
const terminal = document.getElementById("terminal-text");

function terminalType() {
  if (line < terminalLines.length) {
    if (char < terminalLines[line].length) {
      terminal.textContent += terminalLines[line].charAt(char);
      char++;
      setTimeout(terminalType, 40);
    } else {
      terminal.textContent += "\n";
      line++;
      char = 0;
      setTimeout(terminalType, 300);
    }
  } else {
    setTimeout(() => {
      document.getElementById("terminal").style.display = "none";
    }, 800);
  }
}
terminalType();

// TYPING EFFECT
const text = "IT Engineering Student | Cybersecurity Enthusiast";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      section.classList.add("active");
    }
  });
});
