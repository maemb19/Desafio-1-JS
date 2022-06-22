alert("Bienvenido a VIBRAS Sex-Shop");

function inicioCompra(){

  item = prompt("Escoge el juguete que deseas llevar para jugar: \n vibrador \n satisfyer \n lubricante");

  while (item !== "vibrador" && item !== "satisfyer" && item !== "lubricante"){
    alert("Opción inválida, tienes que escoger uno del cartel");
    item = prompt("Escoge el juguete que deseas llevar para jugar: \n vibrador \n satisfyer \n lubricante");
  }

  cant = parseInt(prompt("Ingrese la cantidad de juguetes que desea comprar: "));

  while (isNaN(cant)){
    alert("Opción inválida, debes ingresar un número.");
    cant = parseInt(prompt("Ingrese la cantidad de juguetes que desea comprar: "));
  }

  if (item === "vibrador") {
    alert("Agregaste: " + cant +  " vibrador(es) a tu compra.");
  } else if (item === "satisfyer") {
    alert("Agregaste: " + cant +  " satisfyer(s) a tu compra.");
  } else if (item === "lubricante") {
    alert("Agregaste: " + cant +  " lubricante(s) a tu compra.");
  }
}

let cliente;
function nombreCliente(){
  cliente = prompt("Ingrese su nombre para continuar la compra:");

  while ( cliente === ""){
    cliente = prompt("Ingrese su nombre para continuar la compra:");
  }
  return cliente;
} 

function total(){
  let vibrador = 2000;
  let satisfyer = 3000;
  let lubricante = 600;

  if (item === "vibrador"){
    alert(cliente + " jugaras con " + cant + " vibrador(es) por un costo total de $" + (vibrador * cant) + " pesos.");
  } else if (item === "satisfyer"){
    alert(cliente + " jugaras con " + cant + " satisfyer(s) por un costo total de $" + (satisfyer * cant) + " pesos.");
  } else if (item === "lubricante"){
    alert(cliente + " jugaras con " + cant + " lubricante(s) por un costo total de $" + (lubricante * cant) + " pesos.");
  }
}

inicioCompra();
nombreCliente();
total();
alert("Gracias por Vibrar con nosotros, disfruta el placer de jugar!")