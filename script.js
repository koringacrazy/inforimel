document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a Página 1 já foi visitada
    if (localStorage.getItem('processod') === 'true') {
      // Redireciona para a Página 1
      window.location.href = 'principal/index.html';
    }
    // Caso contrário, continua na Página 2
  });

  document.addEventListener("DOMContentLoaded", function () {
    const floatingNavButton = document.getElementById("floating-nav-button");
    const floatingNavMenu = document.getElementById("floating-nav-menu");

    // Alternar a visibilidade do menu ao clicar no botão
    floatingNavButton.addEventListener("click", function () {
      floatingNavMenu.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
      if (!floatingNavButton.contains(event.target) && !floatingNavMenu.contains(event.target)) {
        floatingNavMenu.classList.remove("active");
      }
    });
  });

  
      
  document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o modal já foi exibido
    if (!localStorage.getItem('modalShown')) {
      // Exibe o modal
      $('#welcomeModal').modal('show');

      // Marca que o modal foi exibido
      localStorage.setItem('modalShown', 'true');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
  // Verifica se o modal já foi exibido
  if (!localStorage.getItem('modalShown')) {
    // Exibe o modal
    $('#welcomeModal').modal('show');

    // Marca que o modal foi exibido
    localStorage.setItem('modalShown', 'true');
  }

  // Marca que a Página 1 foi visitada
  localStorage.setItem('page1Visited', 'true');
});

  // Função para rolar até uma seção específica
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  // Função para alternar a visibilidade dos botões
function toggleMenu() {
const navButtons = document.getElementById('navButtons');
if (navButtons.style.display === 'none' || navButtons.style.display === '') {
  navButtons.style.display = 'flex';
} else {
  navButtons.style.display = 'none';
}
}
  
// Função para alternar a visibilidade dos botões e mudar o texto do botão
function toggleMenu() {
const navButtons = document.getElementById('navButtons');
const menuButton = document.getElementById('menuButton');

if (navButtons.style.display === 'none' || navButtons.style.display === '') {
  navButtons.style.display = 'flex';
  menuButton.textContent = 'X'; // Muda o texto para "X"
} else {
  navButtons.style.display = 'none';
  menuButton.textContent = 'Menu'; // Muda o texto de volta para "Menu"
}
}