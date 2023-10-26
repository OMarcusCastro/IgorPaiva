var nomes = [];
var saldos = [];
var emails = [];
var senhas = [];

function deposito(destinatario, valor) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === destinatario) {
            saldos[i] += valor;
            break;
        }
    }
}

function cadastrar(cliente='vazio', valor=2, email='g', senha='g') {
    let pos = nomes.indexOf(cliente);
    if(pos === -1){
    nomes.push(cliente);
    saldos.push(valor);
    emails.push(email);
    senhas.push(senha);
    atualizarSelects();
    }
    else{
        alert("Nome já em uso. Escolha outro.")
        console.log('Nome já em uso.')
    }

}
function login(email, senha){
    let pos = emails.indexOf(email);
    if (pos >= 0 && senha === senhas[pos]){
        return true;
    }
    return false;
}

function saque(destinatario, valor) {
    let pos = nomes.indexOf(destinatario);

    if (pos >= 0) {
        if (saldos[pos] < valor) {
            alert(`Saque negado por falta de saldo.`);
        } else {
            saldos[pos] -= valor;
            alert(`Saque de ${valor} reais realizado com sucesso por ${destinatario}`);
        }
    } else {
        alert(`Cliente ${destinatario} não encontrado!`);
    }
    atualizarSaldo();
}

function transferencia(saindoDe, indoPara, valor) {
    saque(saindoDe, valor);
    deposito(indoPara, valor);
}

function cadastrarCliente() {
    const clienteNome = document.getElementById("clienteNome").value||'vazio';
    const clienteSaldo = parseFloat(document.getElementById("clienteSaldo").value)||2;

    if (clienteNome && !isNaN(clienteSaldo) && clienteSaldo >= 0) {
        cadastrar(clienteNome, clienteSaldo);
        document.getElementById("clienteNome").value = "";
        document.getElementById("clienteSaldo").value = "";
    } else {
        alert("Preencha o nome do cliente e o saldo inicial válido.");
        console.log('Preencha o nome do cliente e o saldo inicial válido.')
    }
}

function realizarDeposito() {
    const selecionarCliente = document.getElementById("selecionarCliente");
    const valorOperacao = parseInt(document.getElementById("valorOperacao").value);

    if (selecionarCliente.value && !isNaN(valorOperacao) && valorOperacao >= 0) {
        deposito(selecionarCliente.value, valorOperacao);
        alert(`Depósito de ${valorOperacao} reais realizado com sucesso para ${selecionarCliente.value}`);
        atualizarSaldo();
    } else {
        alert("Selecione um cliente e insira um valor válido para depósito.");
    }
}

function realizarSaque() {
    const selecionarCliente = document.getElementById("selecionarCliente");
    const valorOperacao = parseInt(document.getElementById("valorOperacao").value);

    if (selecionarCliente.value && !isNaN(valorOperacao) && valorOperacao >= 0) {
        saque(selecionarCliente.value, valorOperacao);
    } else {
        alert("Selecione um cliente e insira um valor válido para saque.");
    }
}

function realizarTransferencia() {
    const selecionarCliente = document.getElementById("selecionarCliente");
    const destinatarioTransferencia = document.getElementById("destinatarioTransferencia");
    const valorOperacao = parseInt(document.getElementById("valorOperacao").value);

    if (selecionarCliente.value && destinatarioTransferencia.value && !isNaN(valorOperacao) && valorOperacao >= 0) {
        transferencia(selecionarCliente.value, destinatarioTransferencia.value, valorOperacao);
    } else {
        alert("Selecione um cliente, um destinatário e insira um valor válido para a transferência.");
    }
}

function atualizarSelects() {
    const selecionarCliente = document.getElementById("selecionarCliente");
    const destinatarioTransferencia = document.getElementById("destinatarioTransferencia");

    selecionarCliente.innerHTML = "";
    // destinatarioTransferencia.innerHTML = ".";

    for (let i = 0; i < nomes.length; i++) {
        const option = document.createElement("option");
        option.value = nomes[i];
        option.text = nomes[i];
        selecionarCliente.appendChild(option);

        // const option2 = document.createElement("option");
        // option2.value = nomes[i];
        // option2.text = nomes[i];
        // destinatarioTransferencia.appendChild(option2);
    }
}

function atualizarSaldo() {
    const selecionarCliente = document.getElementById("selecionarCliente");
    const saldoAtual = document.getElementById("saldoAtual");

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === selecionarCliente.value) {
            saldoAtual.textContent = "Saldo atual: " + saldos[i];
            break;
        }
    }
}

function exibirDadosContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Cliente: ${nomes[i]}, Saldo: ${saldos[i]}`;
        listaContas.appendChild(listItem);
    }
}