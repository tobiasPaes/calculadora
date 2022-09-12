let result = document.getElementById("resultado")

function insert(num){
    var numero = resultado.innerHTML 
    result.innerHTML = numero + num
}

function clean(){
    result.innerHTML = ""
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML
   result.innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML
    if(resultado){
        result.innerHTML = eval(resultado)
    }else{
        result.innerHTML = "nada para calcular"
    }
}