function validateForm() {
    // Obter os valores dos campos de e-mail e senha
    var email = document.getElementById("email-tel").value;
    var password = document.getElementById("pass").value;

    // Verificar se os campos estão preenchidos
    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário se os campos estiverem vazios
    }

    // Redireciona para a página home.html
    window.location.href = "home.html";
    return false;
}
function togglePassword(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}