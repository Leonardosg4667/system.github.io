// Função para exibir a seção de login e esconder a de cadastro
function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

// Função para exibir a seção de cadastro e esconder a de login
function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

// Validação simples de cadastro (você pode expandir para verificar CPF e outras regras)
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Pega os dados do formulário
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Aqui você poderia fazer a validação no lado do cliente antes de enviar para o servidor
    if (name && cpf && birthdate && email && password) {
        alert('Cadastro realizado com sucesso!');
        showLogin();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Validação simples de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    if (loginEmail && loginPassword) {
        alert('Login realizado com sucesso!');
        // Aqui você poderia redirecionar para uma outra página ou mostrar a área do usuário logado
    } else {
        alert('Por favor, preencha todos os campos de login.');
    }
});
