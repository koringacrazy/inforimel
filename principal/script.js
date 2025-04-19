document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o botão de "Terminar Sessão"
  const logoutButton = document.getElementById('logoutButton');

  // Adiciona um evento de clique ao botão
  logoutButton.addEventListener('click', function(event) {
    // Previne o comportamento padrão do link (navegar para register.html)
    event.preventDefault();

    // Remove o registro page1Visited do localStorage
    localStorage.removeItem('page1Visited');

    // Redireciona o usuário para a Página 2
    window.location.href = '../index.html';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o botão de "Terminar Sessão"
  const logoutButton = document.getElementById('logoutButton');

  // Adiciona um evento de clique ao botão
  logoutButton.addEventListener('click', function(event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Remove os dados do usuário do localStorage
    localStorage.removeItem('page1Visited');
    localStorage.removeItem('nome');
    localStorage.removeItem('processo');
    localStorage.removeItem('curso');

    // Redireciona o usuário para a Página de login
    window.location.href = '../index.html';
  });
});
