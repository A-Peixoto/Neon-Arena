
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
  const html = document.documentElement;
  const novoTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", novoTema);
  btnTema.textContent = novoTema === "dark" ? "Modo claro" : "Modo escuro";
});


function atualizarContagem() {
  const dataEvento = new Date("2026-12-20T20:00:00");
  const diferenca = dataEvento - new Date();
  const campo = document.getElementById("contagem");

  if (diferenca <= 0) {
    campo.textContent = "Chegou o grande dia!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);
  campo.textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s`;
}
atualizarContagem();
setInterval(atualizarContagem, 1000);

const form = document.getElementById("formContato");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  document.getElementById("areaAlerta").innerHTML =
    `<div class="alert alert-success mt-3" role="alert">Valeu, ${nome}! Sua inscrição foi recebida (demonstração).</div>`;
  form.reset();
  form.classList.remove("was-validated");
});
