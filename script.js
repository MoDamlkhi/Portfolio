* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', monospace;
}

body {
  background: #0d1117;
  color: #c9d1d9;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(13,17,23,0.95);
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  border-bottom: 1px solid #00ff9c;
  z-index: 1000;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: #c9d1d9;
  text-decoration: none;
}

nav a:hover, nav a.active {
  color: #00ff9c;
  border-bottom: 2px solid #00ff9c;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* SECTIONS */
section {
  padding: 100px 20%;
}

/* PROJECTS */
.project {
  border: 1px solid #00ff9c;
  padding: 15px;
  margin-bottom: 15px;
  transition: 0.3s;
}

.project:hover {
  box-shadow: 0 0 15px #00ff9c;
  transform: scale(1.03);
}

/* REVEAL */
.reveal {
  opacity: 1;
  transform: translateY(0);
}

/* GLITCH */
.glitch {
  position: relative;
  color: #00ff9c;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
}

.glitch::before { color: red; animation: glitch 1s infinite; }
.glitch::after { color: blue; animation: glitch 1.5s infinite; }

@keyframes glitch {
  0% { clip-path: inset(0 0 90% 0); }
  50% { clip-path: inset(40% 0 20% 0); }
  100% { clip-path: inset(80% 0 5% 0); }
}

/* TERMINAL */
#terminal {
  position: fixed;
  inset: 0;
  background: #0d1117;
  color: #00ff9c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
