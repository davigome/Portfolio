document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aqui você pode adicionar a lógica de autenticação
        const linkedinProfileUrl = `https://www.linkedin.com/in/davi-gomes-sc/`;

        window.open(linkedinProfileUrl, "_blank");
    });
});