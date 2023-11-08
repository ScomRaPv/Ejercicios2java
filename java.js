/* ejercicio 1 */

let numero1 = prompt ("introduce un numnero")
console.log(numero1);
let numero2 = prompt ("introduce otro numero")
console.log(numero2);
if (numero1==numero2) {console.log ("Los numeros son iguales")  
}
 else if (numero1>numero2){ console.log ("El pimero numero es mayor")} 
 else {console.log("El segundo numero es mayor")
 } 

 /* ejercicio 2 */

let numero3 = prompt ("introduce un numnero")
console.log(numero3);
let numero4 = prompt ("introduce otro numero")
console.log(numero4);
if (numero3==numero4) {console.log ("Los numeros son iguales")  
}
else {console.log("Los numeros son diferentes")
} 
/* ejercicio 3 */

let numero5 = prompt ("introduce un numnero")
console.log(numero5);
let numero6 = prompt ("introduce otro numero")
console.log(numero6);
if (numero5==numero6) {console.log ("Los numeros son iguales")  
} else if(numero5>numero6) {console.log ("El primer numero es mayor: " +numero5)  
}
 else {console.log("El segundo numero es mayor: "+numero6 )
 } 
/* ejercicio 4 */

let numero6 = prompt ("introduce primer numnero")
console.log(numero6);
let numero7 = prompt ("introduce segundo numero")
console.log(numero7);
let numero8 = prompt ("introduce tercero numero")
console.log(numero8);
let resultado= Math.min (numero6,numero7,numero8);
console.log("El numero menor es: "+resultado)

/*ejercicio 5 */

let nombrepersona1 = prompt ("introduce nombre primera persona")
let edadpersona1 = prompt ("introduce edad primera persona")
let alturapersona1 = prompt ("introduce altura primera persona")
let nombrepersona2 = prompt ("introduce nombre segunda persona")
let edadpersona2 = prompt ("introduce edad segunda persona")
let alturapersona2 = prompt ("introduce altura segunda persona")

if  (alturapersona1>alturapersona2){console.log(nombrepersona1 +" es mas alto:" + alturapersona1 + "cm");}
else{console.log(nombrepersona2 +" es mas alto:" + alturapersona2 + "cm");}
if  (edadpersona1>edadpersona2){console.log(nombrepersona1 +" es mayor:" + edadpersona1 + "años");}
else{console.log(nombrepersona2 +" es mayor:" + edadpersona2 + "años");}

/* ejercicio 6 */

let nombreperson3 = prompt ("introduce nombre de la persona")
let edadpersona3 = prompt ("introduce edad de la  persona")
let alturaperson3 = prompt ("introduce altura de la  persona")
let visionpersona3 = prompt ("vision de la  persona")

let licencia = (edadpersona3>=18)&&(alturaperson3>=150)&&(visionpersona3>=8)
if (licencia==true) {
   console.log("Puede manejar");
} else{ console.log("No puede manejar");}

/* ejercicio 7 *///////////////////////////////////////////

 const nombre = prompt("Ingrese su nombre: ");
    const pase = prompt("¿Tiene pase VIP o normal? (vip/normal): ").toLowerCase();
    const tieneEntrada = prompt("¿Posee entrada? (si/no): ").toLowerCase();

    if (nombre === "TuNombre" || pase === "vip") {
        console.log("¡Bienvenido! Disfrute del evento.");
        if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
            console.log("¡Bienvenido! Gracias por utilizar su entrada.");
        }
    } else {
        const comprar = prompt("¿Desea comprar una entrada? (si/no): ").toLowerCase();
        if (comprar === "si" || comprar === "s") {
            const dineroDisponible = parseInt(prompt("Ingrese el dinero disponible: "));
            if (dineroDisponible >= 1000) {
                console.log("¡Venta de entrada exitosa! ¡Bienvenido!");
            } else {
                console.log("Lo siento, no tiene suficiente dinero para comprar la entrada.");
            }
        } else {
            console.log("Que tenga un buen día. ¡Hasta luego!");
        }
    }

/* Ejercicio 8*/

let numeroincognita = 7
let numeroingresado = prompt("Introduce un numero del 1 al 10") 
let intentos = 2
let intentos2 = 1
if (numeroincognita == numeroingresado) {
   console.log("Ganaste, haz adivinado el numero")
} else if (numeroingresado < numeroincognita) {
   console.log("EL numero ingresado es menor, vuelve a intentarlo: " + intentos + " intentos restantes");
} else if (numeroingresado > numeroincognita) {console.log
   ("EL numero ingresado es mayor, vuelve a intentarlo: " + intentos + " intentos restantes");
}
let numeroingresado2 = prompt("Introduce un numero del 1 al 10")
if (numeroincognita == numeroingresado) {
   console.log("Ganaste, haz adivinado el numero")
} else if (numeroingresado2 < numeroincognita) {
   console.log("EL numero ingresado es menor, vuelve a intentarlo " + intentos2 + " intentos restantes");
} else if (numeroingresado2 > numeroincognita) {console.log
   ("EL numero ingresado es mayor, vuelve a intentarlo: " + intentos2 + " intentos restantes");
}
let numeroingresado3 = prompt("Introduce un numero del 1 al 10")
if (numeroincognita == numeroingresado3 ) {
   console.log("Ganaste, haz adivinado el numero")
} else if (numeroingresado3 < numeroincognita) {
   console.log("No te quedan intentos");
} else if (numeroingresado3 > numeroincognita) {console.log
   ("No te quedan intentos");
}

/* ejercicio 9 */

 let ingresatuedad= prompt("Ingresa tu edad")
 
 if(0>=ingresatuedad,12>=ingresatuedad){console.log("Eres un infante");
}else if(13>=ingresatuedad,18>=ingresatuedad){console.log("Eres un adolecente");
}else if(19>=ingresatuedad,45>=ingresatuedad){console.log("Eres un adulto joven");
}else if(ingresatuedad>45){console.log("Eres un anciano");}

/* Ejercicio 10 */

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];
let opcionUsuario;
let opcionUsuario2;
opcionUsuario = prompt("¿Qué eliges jugador1?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

opcionUsuario2 = prompt("¿Qué eliges jugador2?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert(" jugador1 eligio " + opciones[opcionUsuario]);
alert("jugador2 eligió " + opciones[opcionUsuario2]);

if(opcionUsuario == piedra)
{
    if(opcionUsuario2 == piedra)
    {
        alert("Empate!");
    }
    else if(opcionUsuario2 == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionUsuario2 == tijera)
    {
        alert("Ganaste!");
    }
    else {alert ("Uno de los jugadores hizo trampa");}
}
else if(opcionUsuario == papel)
{
    if(opcionUsuario2 == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionUsuario2 == papel)
    {
        alert("Empate!");
    }
    else if(opcionUsuario2 == tijera)
    {
        alert("Perdiste!");
    }  else {alert ("Uno de los jugadores hizo trampa");}
}
else if(opcionUsuario == tijera)
{
    if(opcionUsuario2 == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionUsuario2 == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionUsuario2 == tijera)
    {
        alert("Empate!");
    }  else {alert ("Uno de los jugadores hizo trampa");}
}

/* Ejercico 11 */

let color = prompt("Ingrese un color")

switch (color) {
   case "blanco":
      console.log("Falta de color")
      break;
   case "negro":
      console.log("Falta de color")
      break;
   case "verde":
      console.log("El color de la naturaleza")
      break;
   case "azul":
      console.log(" El color del agua")
      break;
   case "amarillo":
      console.log("El color del sol")
      break;
   case "rojo":
      console.log("El color del fuego")
      break;
   case "Marrón":
      console.log(" el color de la tierra")

   default:
      break;
}

/* ejercicio 12 */

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación deseada (suma, resta, multiplicacion, division):").toLowerCase();

ad
switch (operacion) {
    case 'suma':
        resultado = num1 + num2;
        console.log(`El resultado de la suma es: ${resultado}`);
        break;
    case 'resta':
        resultado = num1 - num2;
        console.log(`El resultado de la resta es: ${resultado}`);
        break;
    case 'multiplicacion':
        resultado = num1 * num2;
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case 'division':
        if (num2 === 0) {
            console.log("ERROR: No se puede dividir entre cero.");
        } else {
            resultado = num1 / num2;
            console.log(`El resultado de la división es: ${resultado}`);
        }
        break;
    default:
        console.log("Operación no válida. Intente de nuevo.");
}
 /* Ejercicio 13 */

 
 const CCdatos = {
   numero: prompt("Ingrese el número de su CC:"),
   nombres: prompt("Ingrese su nombre completo:"),
   fechaNacimiento: prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):"),
   direccion: prompt("Ingrese su dirección:"),
   departamento: prompt("Ingrese su departamento:")
};
    console.log(CCdatos);


    const confirmacion = confirm("¿Son correctos los datos ingresados?");

    if (confirmacion) {
        const CC = { CCdatos };
        console.log("Registro exitoso. A continuación se muestra el CC registrado:");
        console.table(CC);
    } else {
        console.log("Vuelva a intentarlo en 1 mes.");
    }





















