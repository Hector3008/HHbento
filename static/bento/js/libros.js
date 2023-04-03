//ESTABLEZCO LAS VARIABLES DE CONTROL:

let variabledeControl = true
let monto = 0;
let listadeCarrito = "items: ";

//ESTABLEZCO LA FUNCIÓN "AGREGAR A LA LISTA DEL CARRITO":

function agregaralistadecarrito(item) {
  listadeCarrito = listadeCarrito + item + ", "
  console.log("se ha agregado el elemento " + item + " a la lista del carrito");
  alert("tu carrito ahora contiene: " + listadeCarrito);
};

//EMPIEZA EL FORMULARIO CON UN CICLO WHILE

while (variabledeControl) {

  //FORMULARIO PARA AGREGAR LIBROS AL CARRITO:
  let eleccion = prompt("Qué libro deseas sumar al carrito: \n\n  1) DCE, 10$; \t\t 2) CiV, 10$; \t\t 3) SS, 10$; \t\t \n 4) JdN, 80$; \t\t\t 5) IaC, 60$; \t\t 6) LIdJ, 70$; \t\t \n 7) DdlS, 65$; \t\t  8) Emve, 90$; \t 9) EdlL, 50$; \t\t \n 10) GoJC, 70$; \t\t  11) JaC, 5$; \t\t 12) FyR, 40$\n\n (escribe ESC sí deseas salir)\n\n(escribe PAGAR si ya has escogido todo lo que querías)");

  //EMPIEZO CON ESTABLECER EL METODO ESCAPE AL FORMULARIO:
  if (eleccion.toUpperCase() == "ESC") {

    alert("Te has salido de nuestro formulario");
    variabledeControl = false

  }
  //FIJO TAMBIÉN EL CÓDIGO DEL VALOR VACÍO:
  else if (eleccion == "") {
    alert("No has ingresado ningún valor");
  }

  //PROSIGO CON EL CÓDIGO DEL METODO PAGAR. quiero pedirle al usuario su nombre, teléfono y dirección. Validando que no ingrese valores en blanco:
  else if (eleccion.toUpperCase() == "PAGAR") {

    alert("La operación tendrá un monto de: " + monto + "$");

    //asigno variables de control:
    let nombrevdc = true;
    let direccionvdc = true;
    let telefonovdc = true;
    //ciclo while de nombre:
    while (nombrevdc) {
      nombre = prompt("¿a nombre de quién hacemos la factura?");
      if (nombre == "") {
        console.log("El usuario no ha ingresado ningún nombre");
        alert("no has ingresado ningún nombre");
      }
      else {
        console.log("el usuario ha ingresado el nombre: " + nombre);
        nombrevdc = false
      }
    }
    //ciclo while de dirección:
    while (direccionvdc) {
      direccion = prompt("¿a qué dirección enviamos la entrega?");
      if (direccion == "") {
        console.log("El usuario no ha ingresado ninguna dirección");
        alert("no has ingresado ninguna dirección");
      }
      else {
        console.log("el usuario ha ingresado la dirección: " + direccion);
        direccionvdc = false
      }
    }
    //ciclo while de teléfono:
    while (telefonovdc) {
      telefono = prompt("te contactaremos por whatsapp para tenerte informado de la entrega. Por favor, danos tu número telefónico:");
      if (telefono == "") {
        console.log("El usuario no ha ingresado ningún teléfono");
        alert("no has ingresado ningún teléfono");
      }
      else {
        console.log("el usuario ha ingresado el teléfono: " + telefono);
        telefonovdc = false
      }
    }
    //termino con un alert a modo de factura:
    alert("Perfecto. la operación ha tenido un monto de " + monto + ". Ha sido hecha a nombre de " + nombre + ". Quien ha dado el número telefónico " + telefono + " como número de contacto. Y su pedido será entregado a la dirección " + direccion)
    variabledeControl = false

    //TERMINANDO, FIJO LAS ELECCIONES VÁLIDAS con el importe al monto y el agregado a lista de carrito:

  } else if (eleccion == "1") {
    monto = monto + 10;
    agregaralistadecarrito("DCE");

  } else if (eleccion == "2") {
    monto = monto + 10;
    agregaralistadecarrito("CiV");
  } else if (eleccion == "3") {
    monto = monto + 10;
    agregaralistadecarrito("SS");
  } else if (eleccion == "4") {
    monto = monto + 80;
    agregaralistadecarrito("JdN");
  } else if (eleccion == "5") {
    monto = monto + 60;
    agregaralistadecarrito("IaC");
  } else if (eleccion == "6") {
    monto = monto + 70;
    agregaralistadecarrito("LIdJ");
  } else if (eleccion == "7") {
    monto = monto + 65;
    agregaralistadecarrito("DdlS");
  } else if (eleccion == "8") {
    monto = monto + 90;
    agregaralistadecarrito("Emve");
  } else if (eleccion == "9") {
    monto = monto + 50;
    agregaralistadecarrito("EdlL");
  } else if (eleccion == "10") {
    monto = monto + 70;
    agregaralistadecarrito("GoJC");
  } else if (eleccion == "11") {
    monto = monto + 5;
    agregaralistadecarrito("JaC");
  } else if (eleccion == "12") {
    monto = monto + 40;
    agregaralistadecarrito("FyR");
  }

  //POR ÚLTIMO, UN ELSE PARA LOS VALORES INVÁLIDOS.
  else {
    alert("ingresaste un código inválido")
  }

};