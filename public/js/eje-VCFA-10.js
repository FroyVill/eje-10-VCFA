//alert("Hola mundo del Java Script");
function sumaNumeros(){

    let entrada1=document.getElementById("entrada1").value;
    let entrada2=document.getElementById("entrada2").value;
    const res=document.getElementById("res");
    const resultado=parseInt( entrada1) + parseInt (entrada2);
    res.innerHTML=resultado;
    //alert("La suma es: "+ resultado);

   // alert("Va a sumar 2 numeros");
}

function restaNumeros(){
    let entrada1=document.getElementById("entrada1").value;
    let entrada2=document.getElementById("entrada2").value;
    const res=document.getElementById("res");
    const resultado=entrada1 - entrada2;
   // alert("La resta es: "+ resultado);
    res.innerHTML=resultado;
    //alert("Va a restar 2 numeros");
}
function multiplicaNumeros(){
    let entrada1=document.getElementById("entrada1").value;
    let entrada2=document.getElementById("entrada2").value;
    const res=document.getElementById("res");
    const resultado=entrada1 * entrada2;
  //  alert("La multiplicacion es: "+ resultado);
    res.innerHTML=resultado;
    //alert("Va a multiplicar 2 numeros");
}
function divideNumeros(){
    let entrada1=document.getElementById("entrada1").value;
    let entrada2=document.getElementById("entrada2").value;
    const res=document.getElementById("res");
    const resultado=entrada1 / entrada2;
  //  alert("La division es: "+ resultado);
    res.innerHTML=resultado;
   // alert("Va a dividir 2 numeros");
}
