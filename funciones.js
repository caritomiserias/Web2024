function ValidarNombre(){
    let input=document.querySelector("#nombre");
    if(input.value.length >= 10){
        input.classList.add("valido")
        input.classList.remove("no-valido")
        document.querySelector("#errornombre").innerHTML = "&nbsp";
    }else{
        input.classList.add("no-valido")
        input.classList.remove("valido")
        document.querySelector("#errornombre").innerHTML = "Error, ingrese un mínimo de 10 carácteres"

    }
}

function ValidarCelular(){
    let input=document.querySelector("#celular");
    if(input.value.length >= 9){
        input.classList.add("valido")
        input.classList.remove("no-valido")
        document.querySelector("#errornombre").innerHTML = "&nbsp";
    }else{
        input.classList.add("no-valido")
        input.classList.remove("valido")
        document.querySelector("#errornombre").innerHTML = "Error, ingrese un mínimo de 10 carácteres"

    }
}

function ValidarCorreo(){
    let input=document.querySelector("#correo");
    if(input.value.length >= 13){
        input.classList.add("valido")
        input.classList.remove("no-valido")
        document.querySelector("#errornombre").innerHTML = "&nbsp";
    }else{
        input.classList.add("no-valido")
        input.classList.remove("valido")
        document.querySelector("#errornombre").innerHTML = "Error, ingrese un mínimo de 10 carácteres"

    }
}