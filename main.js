document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch("server/contact.php", {
    method: "POST",
    body: formData
  });

  const text = await res.text();
  document.getElementById("response").innerText = text;
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});
const terminalText = document.getElementById("terminal-text");

if (terminalText) {
  const content = `
soc@mo:~$ whoami
Mo — IT Engineering Student | Cybersecurity Focus

soc@mo:~$ interests
• Security Operations Center (SOC)
• Defensive Security & Blue Team
• Intrusion Detection Systems (IDS)

soc@mo:~$ current_project
Developing an Intrusion Detection System (IDS)
Focused on detecting suspicious network activity

soc@mo:~$ skills
• Networking fundamentals
• Linux & Windows operating systems
• Log analysis & alert investigation

soc@mo:~$ languages
• Arabic: Native
• English: B2
• German: A2

soc@mo:~$ status
Learning. Monitoring. Improving.
`;

  let index = 0;

  function typeEffect() {
    if (index < content.length) {
      terminalText.textContent += content.charAt(index);
      index++;
      setTimeout(typeEffect, 25);
    }
  }

  typeEffect();
};


