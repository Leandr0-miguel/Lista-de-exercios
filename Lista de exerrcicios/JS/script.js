// Variaveis exercicio 1
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
    } else if(lados[0] === lados[1] || lados[0] === lados[1] || lados[1] === lados[2]){
        tipo_triangulo = "Iseoceles";
    } else{
        tipo_triangulo = "Escaleno";
    }


    resultadoTriangulo.value = tipo_triangulo;
    return;
}

btnTriangulo.addEventListener("click", verificarTriangulo);