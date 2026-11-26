

function visualizarDados() {

    var formulario = document.getElementById("formReserva");

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    var nome = document.getElementById("txNome").value;

    var email = document.getElementById("txEmail").value;

    var telefone = document.getElementById("txTelefone").value;

    var quarto = document.getElementById("quarto").value;

    var entrada = document.getElementById("txEntrada").value;

    var saida = document.getElementById("txSaida").value;

    var adultos = document.getElementById("txAdultos").value;

    var criancas = document.getElementById("txCriancas").value;

    var observacoes = document.getElementById("txObservacoes").value;

    var pagamento = document.getElementById("pagamento").value;

    var termos = document.getElementById("txTermos").checked;

    if (new Date(saida) <= new Date(entrada)) {
        alert("A data de saída deve ser posterior à entrada.");
        return;
    }

    document.getElementById("pNome").innerHTML = "Nome: " + nome;

    document.getElementById("pEmail").innerHTML = "E-mail: " + email;

    document.getElementById("pTelefone").innerHTML = "Telefone: " + telefone;

    document.getElementById("pQuarto").innerHTML = "Acomodação: " + quarto;

    document.getElementById("pEntrada").innerHTML = "Data de entrada: " + entrada;

    document.getElementById("pSaida").innerHTML = "Data de saída: " + saida;

    document.getElementById("pAdultos").innerHTML = "Adultos: " + adultos;

    document.getElementById("pCriancas").innerHTML = "Crianças: " + criancas;

    document.getElementById("pObservacoes").innerHTML = "Observações: " + (observacoes || "Nenhuma");

    document.getElementById("pPagamento").innerHTML = "Pagamento: " + pagamento;

    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth"
    });

}
