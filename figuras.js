//Calculo para altura del triangulo

//TRIANGULO ISOSCELES

//FUNCIONES CORRESPONDIENTES PARA EL CALCULO 
//Calculo la altura
function alturaTriangulo(base,altura){
    return Math.sqrt((altura*altura)-((base*base)/4));
}
alturaTriangulo();


//INTERACION CON HTML
function calcularAlturaTriangulo(){
    const InputBase = document.getElementById("InputBase");
    const InputLado1 = document.getElementById("InputLado1");
    const InputLado2 = document.getElementById("InputLado2");
    const b=parseInt(InputBase.value);
    const l1=parseInt(InputLado1.value);
    const l2=parseInt(InputLado2.value);

    if (l1===l2){
    const altura = alturaTriangulo(b,l1);
    //Se muestra un mensaje como alerta con la respuesta
    alert(altura);}
    else{
        alert("No es un triangulo isosceles, ambos lados deben ser iguales.")
    }
}
