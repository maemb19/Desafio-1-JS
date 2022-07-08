//alert("Bienvenido a VIBRAS Sex-Shop");

let productList = {
  vibrador: 2000,
  satisfyer: 3000,
  lubricante: 600,
}

let item, cant

function inicioCompra(){

  item = prompt("Escoge el juguete que deseas llevar para jugar: \n vibrador \n satisfyer \n lubricante");

  while (!productList[`${item}`]){
    alert("Opción inválida, tienes que escoger uno del cartel");
    item = prompt("Escoge el juguete que deseas llevar para jugar: \n vibrador \n satisfyer \n lubricante");
  }

  cant = parseInt(prompt("Ingrese la cantidad de juguetes que desea comprar: "));

  while (isNaN(cant)){
    alert("Opción inválida, debes ingresar un número.");
    cant = parseInt(prompt("Ingrese la cantidad de juguetes que desea comprar: "));
  }

  alert(`Agregaste:  ${cant}  ${item}(es)  a tu compra.`);
  nombreCliente();
  total();
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
  let ul = document.getElementById("lista");

  let li1 = document.createElement("li");
  let li1Texto = document.createTextNode(`${cliente} jugaras con ${cant} ${item}(es) por un costo total de $ ${(productList[`${item}`] * cant)} pesos.`);
  li1.appendChild(li1Texto);

  ul.appendChild(li1);
}

let button = document.getElementById('add-product');

button.addEventListener('click', inicioCompra);

let finishButton = document.getElementById('finish');

finishButton.addEventListener('click', function(){
  alert("Gracias por Vibrar con nosotros, disfruta el placer de jugar!")
});