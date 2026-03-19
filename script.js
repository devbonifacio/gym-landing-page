const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const revealElements = document.querySelectorAll(".reveal");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "Mensagem enviada com sucesso! 🚀";
  form.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
});

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
