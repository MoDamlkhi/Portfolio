// TERMINAL INTRO - سريع جداً
setTimeout(() => {
  document.getElementById("terminal").style.display = "none";
}, 300); // 0.3 ثانية فقط

// SCROLL REVEAL - فعال لكن بدون lag
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      section.classList.add("active");
    }
  });
});
