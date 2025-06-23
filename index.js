// index.js

// Verifica se há um usuário logado na sessionStorage
const usuario = sessionStorage.getItem("usuarioCorrente");

if (usuario) {
  const user = JSON.parse(usuario);

  // Exibe saudação com o nome do usuário na página inicial
  const saudacao = document.getElementById("saudacaoUsuario");
  if (saudacao) {
    saudacao.innerText = Bem-vindo(a), ${user.nome}!;
  }
}