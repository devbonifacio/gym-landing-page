const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🚀");
  form.reset();
});