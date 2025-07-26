const form = document.getElementById("ecoForm");
const mensagem = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidade").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const conheceu = document.querySelector('input[name="conheceu"]:checked').value;
  const motivo = document.getElementById("motivo").value;

  const corpoEmail = `Nome: ${nome}%0D%0ACidade: ${cidade}%0D%0ATelefone: ${telefone}%0D%0AEmail: ${email}%0D%0AConheceu por: ${conheceu}%0D%0AMotivo: ${motivo}`;

  window.location.href = `mailto:ecowiselab.contato@gmail.com?subject=Formulário de Interesse EcoHardGreen&body=${corpoEmail}`;

  mensagem.innerHTML = `Obrigado, <strong>${nome}</strong>! Seu formulário foi gerado com sucesso. O app de e-mail será aberto para o envio. 🌱💻`;
  mensagem.style.display = "block";

  form.reset();
});