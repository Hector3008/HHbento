//defino la clase Producto con la cual voy a trabajar:
class Producto {
  constructor(id, tipo, titulo, descripcion, precio, codigo, cantidad) {
    this.id = id;
    this.tipo = tipo;
    this.titulo = titulo.toUpperCase();
    this.descripcion = descripcion.toUpperCase();
    this.precio = parseFloat(precio);
    this.codigo = codigo.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.stock = !!parseInt(cantidad);
  }

  toString() {
    return this.titulo;
  }

  toAddtoStock(cantidadAgregada) {
    this.cantidad = this.cantidad + parseInt(cantidadAgregada);
  }

  toRemovetoStock(cantidadRemovida) {
    this.cantidad = this.cantidad - parseInt(cantidadRemovida);
  }
}

//Hago un array con los productos del carrito:
let productos = [
  new Producto(
    "1",
    "libro",
    "Deus caritas est.",
    "celebre encíciclipa del santo padre sobre el amor cristiano...",
    10,
    "DCE",
    20
  ),
  new Producto(
    "2",
    "libro",
    "Caritas in veritate.",
    "Sobre el desarrollo humano integral en la caridad y en la verdad... ",
    10,
    "CiV",
    0
  ),
  new Producto(
    "3",
    "libro",
    "Spes Salvi",
    "Célebre encíclica sobre la esperanza",
    10,
    "SS",
    20
  ),
  new Producto(
    "4",
    "libro",
    "Jesus de Nazareth.",
    "Benedicto XVI rescata la figura de Jesús de recientes descripciones «populares» y restaura la verdadera identidad de Jesús que nos presentan los Evangelios....",
    20,
    "JdN",
    20
  ),
  new Producto(
    "5",
    "libro",
    "Introduccion al cristianismo.",
    "Lecciones sobre el credo apostólico. DECIMOSEXTA EDICIÓN....",
    30,
    "IaC",
    20
  ),
  new Producto(
    "6",
    "libro",
    "Infancia de Jesus.",
    "El Papa, detallando como la historia de la infancia y niñez de Jesús es hoy por hoy aun tan relevante como fue hace dos mil años...",
    65,
    "IdJ",
    20
  ),
  new Producto(
    "7",
    "libro",
    "Dialéctica de la secularización.",
    " Jürgen Habermas, debatía en público con uno de los principales representantes de la Iglesia Católica, el entonces cardenal Joseph Ratzinger, hoy papa Benedicto XVI...",
    80,
    "DdS",
    20
  ),
  new Producto(
    "8",
    "libro",
    "Escatología: La muerte y la vida eterna.",
    "Cuando en 1977 Joseph Ratzinger, entonces profesor de Teología recién designado obispo de Múnich, presentaba éste su primer libro, la Escatología apenas dejaba de ser... ",
    90,
    "Emve",
    20
  ),
  new Producto(
    "9",
    "libro",
    "El espiritu de la liturgia.",
    "sta obra profundiza en uno de los elementos claves del Concilio Vaticano II, la renovación litúrgica, cuyo espíritu en muchos casos no ha llegado a los cristianos con la misma rapidez que los cambios exteriores...",
    70,
    "EdL",
    20
  ),
  new Producto(
    "10",
    "libro",
    "The God of Jesus Christ.",
    " profound thoughts on the nature and person of God, building a bridge between theology and spirituality as he makes wide... ",
    20,
    "GJC",
    20
  ),
  new Producto(
    "11",
    "libro",
    "Joseph y Chico.",
    "En este curioso libro, Chico (fiel amigo de Benedicto) cuenta la vida del papa. Es una obra especialmente escrita para niños...",
    40,
    "JyC",
    20
  ),
  new Producto(
    "12",
    "libro",
    "Fe y razon.",
    "algunas de las intervenciones más importantes de Benedicto XVI en torno a este asunto, y reproducimos dos discursos pronunciados en 1998 y 2005...",
    50,
    "FyR",
    20
  ),

]; 

// defino los elementos html con los que voy a interactuar:
const btn__ver__objetos = document.getElementById("btn__ver__objetos");
const tabla__objetos = document.getElementById("tabla__objetos");

//localStorage.setItem("productos", JSON.stringify(productos));

// defino la variable JSON con la cual voy a iterar:
  let productosJSON = [];

  //codeo el evento onclick del "ver objetos"
btn__ver__objetos.onclick = () => {


  if (localStorage.getItem("productos")) {
    productosJSON = JSON.parse(localStorage.getItem("productos"));
    productos = productosJSON.map(
      (element) => new Producto(element.id,element.tipo,element.titulo,element.descripcion,element.precio,element.codigo,element.cantidad)
    );
  }

  //creo la tabla de objetos con un ciclo for y NOM
    for (i in productos) {
      //creo el elemento <p> </p>
      let nuevoItem = document.createElement("p");
      //relleno el elemento <p> </p>
      nuevoItem.innerText = `titulo: ${productos[i].titulo} precio: ${productos[i].precio} codigo: ${productos[i].codigo} cantidad:  ${productos[i].cantidad}`;
      tabla__objetos.append(nuevoItem);
    }

    //Función por trabajar, con la cual esperaba limpiar la tabla, no supe hacerla :(
    let cerrarEvento = document.createElement("button");
    //function CerrarEvento() {}
    cerrarEvento.innerHTML = "<p onclick='CerrarEvento()'>Cerrar Evento</p>";
    tabla__objetos.append(cerrarEvento);
  };

//construyo las opciones del input "tipo", con una clase y un array de objetos.

class Tipo {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

const tipos = [
  new Tipo(1, "LIBRO"),
  new Tipo(2, "OTRO"),
];

//construyo las opciones del input tipo aplicando NOM con un ciclo FOR:
let tiposLista = document.getElementById("tipo");

tipos.forEach((unTipo) => {
  let item = document.createElement("option");
  item.value = unTipo.id.toString();
  item.innerText = unTipo.nombre;
  tiposLista.append(item);
});

//creo los objetos PRODUCTO, recogiendo la data del formulario:
function validarFormulario(data){
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const tipo = document.getElementById("tipo").value;
  const precio = document.getElementById("precio").value;
  const codigo = document.getElementById("codigo").value;
  const cantidad = document.getElementById("cantidad").value;

  //el value de tipo me da el ID del objeto tipo, por lo cual aplico un FIND y creo el objeto con el método .nombre. 
  const unTipo = tipos.find((e) => e.id.toString() === tipo);
  
  let unProducto = new Producto(
    String(productos.length + 1),
    unTipo.nombre,
    titulo,
    descripcion,
    precio,
    codigo,
    cantidad
  );
    //hago push al producto creado y lo integro al array de objetos:
  productos.push(unProducto);
  //almaceno el array de objetos en el localStorage:
  localStorage.setItem("productos", JSON.stringify(productos));

  let notificaciones__html = document.getElementById("notificaciones");
  let notificacion = document.createElement("p");
  notificacion.innerText = "se ha creado un nuevo elemento";
  notificaciones__html.append(notificacion);
}
formulario.addEventListener("submit", (event) => {
  //anulo el refresh por defecto que tiene el submit:
  event.preventDefault();
  //aplico la función que vinculo al evento onclick:
  validarFormulario(event.target);
});