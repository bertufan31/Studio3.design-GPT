// Parallax effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector(".hero").style.transform =
    `translateY(${scrollY * 0.3}px)`;
});

// Fade in projects
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";
    }
  });
});

projects.forEach(p => {
  p.style.transform = "translateY(40px)";
  p.style.opacity = "0";
  observer.observe(p);
});
