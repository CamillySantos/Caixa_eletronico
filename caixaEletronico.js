var saldo = 100;

var nome = prompt("Digíte seu nome");

alert("Olá " + nome + " é um prazer ter você por aqui!");
inicio();


function inicio() {

    var Num = parseInt(prompt("Escolha uma das opções: \n1.Saldo \n2.Extrato \n3.Saque \n4.Depósito \n5.Transferência \n6.Sair"));

    switch (Num) {
        case 1:
            ver_saldo();
            break;

        case 2:
            ver_extrato();
            break;

        case 3:
            fazer_saque();
            break;

        case 4:
            fazer_deposito();
            break;

        case 5:
            fazer_transferencia();
            break;

        case 6:
            sair();
            break;

        default:

        erro();
    }
}




function senha() {
    var senha1 = parseInt(prompt("Digíte a senha"));

    if (senha1 === 3589) {
        alert("A senha está correta!");
    } else {
        alert("Senha incorreta");
        senha();
    }
}
        

function ver_saldo() {
    senha();
    
    alert("Seu saldo é de: R$" + saldo);
    inicio();
}

function ver_extrato() {
    senha();

    alert("Extrato : \n02/07/2023 Depósito  +R$ 300,00 \n28/06/2023 Compra Online  -R$ 600,00 \n15/06/2023 Saque  -R$ 20,00 \n10/06/2023 Aluguel  -R$ 350,00 \n02/06/2023 Boleto Pago  -R$ 20,00 \n28/05/2023 Depósito  +R$ 500,00"); 
    
    return inicio();

}


function fazer_saque() {
    senha();
    var saque = parseFloat(prompt("Por favor! \nDigíte o valor desejado para saque:"));
    

    while (saque > saldo || saque <= 0) {
        alert("Operação não autorizada");
        return fazer_saque();
    }

    var possaque = (saldo - saque);

    alert("Operação realizada com sucesso! \nSeu saldo atual é de R$ " + possaque);
    
    inicio();
}

function fazer_deposito() {
    senha();

    var deposito = parseFloat(prompt("Informe o valor desejado para depósito"));
    

    while (isNaN(deposito) || deposito === "" || deposito <=0) {
        alert("Operação não autorizada.");
        return fazer_deposito();
    } 

    var posdeposito = (saldo + deposito);

    alert("Operação realizada com sucesso! \nSeu saldo atual é de R$ " + posdeposito);

    inicio();
}

function fazer_transferencia() {
    senha();

    var conta = parseInt(prompt("Digíte o número da conta"));
    var quant = parseFloat(prompt("Digíte o valor a ser transferido: "));

    if (isNaN(conta) || conta === "" || conta < 0) {
        alert("Por favor, informe outro número");
        fazer_transferencia();
    } else if (isNaN(quant) || quant === "" || quant < 0) {
        alert("Por favor, informe outro número:");
        fazer_transferencia();
    }

    while (quant > saldo) {
        alert("Operação não autorizada");
        fazer_transferencia();
    }
    var postransferencia = (saldo - quant);

    alert("Transferência realizada com sucesso! \nSeu saldo atual é de R$ " + postransferencia);   

    inicio();
}

function sair() {

    var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ", foi um prazer ter você aqui!" );
                window.close();
			} else {
				inicio();
			}
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
			inicio();
}