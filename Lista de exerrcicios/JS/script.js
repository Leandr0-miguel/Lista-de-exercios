// Variaveis exercicio 1
let inputX = document.getElementById("inputX")
let inputY = document.getElementById("inputY")
let inputZ = document.getElementById("inputZ")

let btnTriangulo = document.getElementById("btnTriangulo")

let resultadoTriangulo = document.getElementById("resultadoTriangulo")


function verificarTriangulo(){
    x = inputX.value;
    y = inputY.value;
    z = inputZ.value;

    let valores_triangulos = [x, y, z]
    
    let soma_valores = 0
    
}

btnTriangulo.addEventListener("click", verificarTriangulo);