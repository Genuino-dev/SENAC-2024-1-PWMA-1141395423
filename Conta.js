var user = {
    username: "Joao",
    password: "123",
  }

// Aguarda o carregamento completo do documento HTML
window.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de login pelo ID
    const form = document.getElementById('form-login');
    
    // Adiciona um evento de clique ao botão de login
    const loginButton = document.getElementById('login-form-submit');
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o envio do formulário
      
      // Obtém os valores dos campos de usuário e senha
      const username = document.getElementById('user').value;
      const password = document.getElementById('password').value;

      // Busca o objeto de usuário no LocalStorage
      const storedUser = localStorage.getItem("user");
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        
        // Valida os dados do usuário fornecido no formulário com os dados salvos no LocalStorage
        if (username === user.username && password === user.password) {
          // Se a autenticação for bem-sucedida, redireciona para a página de conta
          window.location.href = 'Processos.html';
        } else {
          // Caso contrário, exibe uma mensagem de erro
          alert('Usuário ou senha inválidos!');
        }
      } else {
        // Caso não haja usuário salvo no LocalStorage, exibe uma mensagem de erro
        alert('Usuário ou senha inválidos!');
      }
    });
  });

  
