// Exercicio 1
let inputX = document.getElementById("inputX");
let inputY = document.getElementById("inputY");
let inputZ = document.getElementById("inputZ");

let btnTriangulo = document.getElementById("btnTriangulo");

let resultadoTriangulo = document.getElementById("resultadoTriangulo");

function verificarTriangulo(){
    let x = Number(inputX.value);
    let y = Number(inputY.value);
    let z = Number(inputZ.value);

    let valores_triangulo = [x, y, z]
    let soma_valores = 0
    
    for(let i=0; i<valores_triangulo.length; i++){
        for(let j=0; j<valores_triangulo.length; j++){
            if (i != j){
                soma_valores += valores_triangulo[j];
            }
        }
        
        if (valores_triangulo[i] >= soma_valores){
            resultadoTriangulo.value = "Valores informados não formam um triangulo!"
            return;
        }
        soma_valores = 0;
    }
    definirTriangulo(valores_triangulo)
}

function definirTriangulo(lados){
    let tipo_triangulo = "";

    if(lados[0] === lados[1] && lados[0] === lados[2]){
        tipo_triangulo = "Equilatero";
    } else if(lados[0] === lados[1] || lados[0] === lados[2] || lados[1] === lados[2]){
        tipo_triangulo = "Isósceles";
    } else{
        tipo_triangulo = "Escaleno";
    }
    
    
    resultadoTriangulo.value = tipo_triangulo;
    return;
}

btnTriangulo.addEventListener("click", verificarTriangulo);


//Exercicio 2
let inputPeso = document.getElementById("inputPeso");
let inputAltura = document.getElementById("inputAltura");

let btnIMC = document.getElementById("btnIMC")

let resultadoIMC = document.getElementById("resultadoIMC");
let statusIMC = document.getElementById("statusIMC");

function calcIMC(){
    let altura = Number(inputAltura.value)
    let peso = Number(inputPeso.value)
    let IMC = 0;
    
    if(peso && altura){
        IMC = peso / (altura * altura);

        if(IMC < 18.5){
            statusIMC.textContent = "Abaixo do peso";
        } else if(IMC  >= 18.5 && IMC <= 24.9){
            statusIMC.textContent = "Peso normal";
        } else if(IMC >= 25 && IMC <= 29.9){
            statusIMC.textContent = "Sobrepeso";
        } else if(IMC >= 30 && IMC <= 34.9){
            statusIMC.textContent = "Obesidade grau 1";
        } else if(IMC >= 35 && IMC <= 39.9){
            statusIMC.textContent = "Obesidade grau 2";
        } else{
            statusIMC.textContent = "Obesidade grau 3";
        }
    } else{
        IMC = "00.00"
        statusIMC.textContent = "Informe seu peso e sua altura!";
    }


    resultadoIMC.textContent = `Seu IMC: ${IMC.toFixed(2)}`;
}

btnIMC.addEventListener("click", calcIMC);

//Exercicio 3
let inputAnoFabricacao = document.getElementById("inputAnoFabricacao");
let inputTabela = document.getElementById("inputTabela");

let resultadoImpostoVeiculo = document.getElementById("resultadoImpostoVeiculo");

let btnImpostoVeiculo = document.getElementById("btnImpostoVeiculo");

function calcImposto(){
    let ano_fabricacao = Number(inputAnoFabricacao.value)
    let valor_tabela = Number(inputTabela.value)
    
    let imposto = 0;

    if (ano_fabricacao < 1990){
        imposto = valor_tabela / 100
    } else{
        imposto = valor_tabela * 1.5 / 100
    }

    resultadoImpostoVeiculo.value = imposto
}

btnImpostoVeiculo.addEventListener("click", calcImposto)

//Exercicio 4
let inputCodigoCargo = document.getElementById("inputCodigoCargo");
let inputSalarioAtual = document.getElementById("inputSalarioAtual");

let btnCalcularSalario = document.getElementById("btnCalcularSalario");

let resSalarioAntigo = document.getElementById("resSalarioAntigo")
let resNovoSalario = document.getElementById("resNovoSalario")
let diferencaSalario = document.getElementById("diferencaSalario")

function calcSalario(){
    let codigo_cargo = inputCodigoCargo.value
    let salario_atual = Number(inputSalarioAtual.value)

    let novo_salario = 0
    switch(codigo_cargo){
        case "101":
            novo_salario = salario_atual + (salario_atual * (10/100));
        break;
        case "102":
            novo_salario = salario_atual + (salario_atual * (20/100));
        break;
        case "103":
            novo_salario = salario_atual + (salario_atual * (30/100));
        break;
        default:
            novo_salario = salario_atual + (salario_atual * (40/100));
        break;
    }

    let diferenca = novo_salario - salario_atual;

    resSalarioAntigo.textContent = `Salario Antigo: R$${salario_atual.toFixed(2)}`;
    resNovoSalario.textContent = `Novo Salario:  R$${novo_salario.toFixed(2)}`;
    diferencaSalario.textContent = `Diferença: R$${diferenca.toFixed(2)}`;
}

btnCalcularSalario.addEventListener("click", calcSalario)


//Exercicio 5
let inputSaldoMedio = document.getElementById("inputSaldoMedio");
let resultadoCredito = document.getElementById("resultadoCredito")

let btnCalcCredito = document.getElementById("btnCalcCredito")

function calcCredito(){
    let saldo_medio = Number(inputSaldoMedio.value);
    let credito;
    
    
    if(saldo_medio < 200){
        credito = 0
    } else if(saldo_medio > 200 && saldo_medio <= 400){
        credito = saldo_medio * (20/100);
    } else if(saldo_medio > 400 && saldo_medio <= 600){
        credito = saldo_medio * (30/100);
    } else{
        credito = saldo_medio * (40/100);
    }

    resultadoCredito.textContent = `Crédito calculado: ${credito.toFixed(2)}`

}

btnCalcCredito.addEventListener("click", calcCredito)

//Exercicio 6
let inputCodigoProduto = document.getElementById("inputCodigoProduto");
let inputQuantidadeProduto = document.getElementById('inputQuantidadeProduto');

let btnCalcValorTotal = document.getElementById("btnCalcValorTotal");

let valorTotal = document.getElementById('valorTotal');

function calcularValor(){
    let codigo_produto = Number(inputCodigoProduto.value);
    let quantidade_produto = Number(inputQuantidadeProduto.value);

    let valor_pago = 0;

    switch(codigo_produto){
        case 1:
            valor_pago = quantidade_produto * 11;
        break;
        case 2:
            valor_pago = quantidade_produto * 8.50;
        break;
        case 3:
            valor_pago = quantidade_produto * 8;
        break;
        case 4:
            valor_pago = quantidade_produto * 9;
        break;
        case 5:
            valor_pago = quantidade_produto * 10;
        break;
        case 6:
            valor_pago = quantidade_produto * 4.5;
        break;
        default:
            valorTotal.textContent = "Código Invalido!";
            return
        break;
    }

    valorTotal.textContent = `Valor Total: R$${valor_pago.toFixed(2)}`
}

btnCalcValorTotal.addEventListener("click", calcularValor)