const evaluar= ()=>{
    const edad = prompt ("Cuál es tu edad");
    msg1 = edad >=21 ?"Eres mayor de edad" : "Eres menor de edad";
    alert(msg1)
}

setTimeout(evaluar, 1000);