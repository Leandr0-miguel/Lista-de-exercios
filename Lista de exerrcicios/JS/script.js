// Variaveis exercicio 1
let inputX = document.getElementById("inputX");
let inputY = document.getElementById("inputY");
let inputZ = document.getElementById("inputZ");

let btnTriangulo = document.getElementById("btnTriangulo");

let resultadoTriangulo = document.getElementById("resultadoTriangulo");




// Exercicio 1
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
    } else if(lados[0] === lados[1] || lados[0] === lados[1] || lados[1] === lados[2]){
        tipo_triangulo = "Iseoceles";
    } else{
        tipo_triangulo = "Escaleno";
    }
    
    
    resultadoTriangulo.value = tipo_triangulo;
    return;
}

btnTriangulo.addEventListener("click", verificarTriangulo);


//Variaveis exercicio 2
let inputPeso = document.getElementById("inputPeso");
let inputAltura = document.getElementById("inputAltura");

let btnIMC = document.getElementById("btnIMC")

let resultadoIMC = document.getElementById("resultadoIMC");
let statusIMC = document.getElementById("statusIMC");


//Exercicio 2
function calcIMC(){
    let altura = Number(inputAltura.value)
    let peso = Number(inputPeso.value)
    let IMC = peso / (altura * altura)

    
    if(IMC < 18.5){
        statusIMC.textContent = "Abaixo do peso";
    } else if(IMC  > 18.5 && IMC <= 24.9){
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


    resultadoIMC.textContent = `Seu IMC: ${IMC.toFixed(2)}`
}

btnIMC.addEventListener("click", calcIMC)