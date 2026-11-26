function visualizarDados() {

    var formulario = document.getElementById("formLogin");

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    var email = document.getElementById("txEmail").value;

    var senha = document.getElementById("txSenha").value;

    var lembrar = document.getElementById("txLembrar").checked;

    var lembrarSelecionado = lembrar ? "Sim" : "Não";

    document.getElementById("pEmail").innerHTML = "E-mail: " + email;

    document.getElementById("pSenha").innerHTML = "Senha: " + senha;

    document.getElementById("pLembrar").innerHTML = "Lembrar de mim: " + lembrarSelecionado;

    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth"
    });
}