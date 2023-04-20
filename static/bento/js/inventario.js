class Producto {
  constructor(id, tipo, titulo, descripcion, precio, codigo, cantidad) {
    this.id = id;
    this.tipo = tipo.toUpperCase();
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
//Array con los productos del carrito
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

//abstraccion de los productos generados en el array
let libro1 = productos[0];
let libro2 = productos[1];
let libro3 = productos[2];
let libro4 = productos[3];
let libro5 = productos[4];
let libro6 = productos[5];
let libro7 = productos[6];
let libro8 = productos[7];
let libro9 = productos[8];
let libro10 = productos[9];
let libro11 = productos[10];
let libro12 = productos[11];

console.table(productos);
console.log(productos.length)

//=========================================================================================================
//=========================================================================================================
//1 AGREGAR PRODUCTOS
//=========================================================================================================
//=========================================================================================================
condition=true;
do {
  let eleccion = prompt(
    "elige una opcion:\n\n1)\tver el inventario.\n2)\tagregar producto al inventario.\n3)\tver el inventario (solo títulos).\n4)\tBUSCAR PRODUCTOS POR TITULO.\n5)\tBUSCAR PRODUCTOS POR CODIGO.\n6)\tBUSCAR PRODUCTOS POR ID.\n7)\tFILTRAR PRODUCTOS SEGÚN STOCK (ver qué productos hay en cantidad).\n8)\tFILTRAR PRODUCTOS SEGÚN NO STOCK (ver qué productos no hay en cantidad).\n9)\tSABER SI HAY UN PRODUCTO SEGÚN TITULO.\n10)\tGENERAR NUEVO INVENTARIO CON DESCUENTO A LOS PRECIOS\n11)\tORDENAR EL INVENTARIO SEGÚN PRECIOS (mayor a menor).\n12)\tORDENAR EL INVENTARIO SEGÚN PRECIOS (menor a mayor).\n13)\tORDENAR EL INVENTARIO SEGÚN ID (mayor a menor).\n14)\tORDENAR EL INVENTARIO SEGÚN ID (menor a mayor).\n\nPARA SALIR, ESCRIBE 'ESC'"
  );
  if (eleccion.toUpperCase() == "ESC") {
    condition = false;
  }
  //=====================================================================================================
  //1)\tver el inventario.
  else if (eleccion == "1") {
    alert("El inventario se muestra en la consola:");
    console.table(productos);
  }
  //=====================================================================================================
  //2)\tagregar producto al inventario.
  else if (eleccion == "2") {
    do {
      id = productos.length + 1;
      let tipo = prompt("Ingrese el tipo del producto");
      let titulo = prompt("Ingrese el titulo del producto");
      let descripcion = prompt("Ingrese la descripcion del producto");
      let precio = prompt("Ingrese el precio del producto");
      let codigo = prompt("Ingrese el codigo del producto");
      let cantidad = prompt("Ingrese la cantidad del producto");

      const producto = new Producto(
        String(id),
        tipo,
        titulo,
        descripcion,
        parseInt(precio),
        codigo,
        parseInt(cantidad)
      );
      productos.push(producto);
      console.log(
        "--> La cantidad de productos en mí lista, es de ",
        productos.length
      );
      console.table(productos);

      respuesta = prompt(
        "¿ya agregaste todos los elementos que querías? (si es así, escribe 'ya'. Si no, sólo da enter)"
      );
    } while (respuesta.toUpperCase() !== "YA");
  }
  //=====================================================================================================
  //3)\tver el inventario (solo títulos).
  else if (eleccion == "3") {
    alert("la lista se desplegó en la consola.");
    productos.forEach((producto) => {
      console.log("--> " + producto.toString());
    });
  }
  //=====================================================================================================
  //4)\tBUSCAR PRODUCTOS POR TITULO.
  else if (eleccion == "4") {
    let tituloBuscado = prompt("¿Qué titulo quieres buscar?");

    let productoBuscadoPorTitulo = productos.find(
      (producto) => producto.titulo === tituloBuscado.toUpperCase()
    );

    if (productoBuscadoPorTitulo !== undefined) {
      alert("El producto buscado sí se encuentra");
    } else {
      alert("No encontramos el producto con nombre: " + tituloBuscado);
    }
  }
  //=====================================================================================================
  //5)\tBUSCAR PRODUCTOS POR CODIGO.
  else if (eleccion == "5") {
    let codigoBuscado = prompt("¿Qué código quieres buscar?");

    let productoBuscadoPorCodigo = productos.find(
      (producto) => producto.codigo === codigoBuscado.toUpperCase()
    );

    if (productoBuscadoPorCodigo !== undefined) {
      alert(
        "El producto de código " +
          codigoBuscado.toUpperCase() +
          " es: " +
          productoBuscadoPorCodigo.toString()
      );
    } else {
      alert("No encontramos el producto con nombre: " + codigoBuscado);
    }
  }
  //=====================================================================================================
  //6)\tBUSCAR PRODUCTOS POR ID.
  else if (eleccion == "6") {
    let idBuscado = prompt("¿Qué ID quieres buscar?");

    let productoBuscadoPorId = productos.find(
      (producto) => producto.id === idBuscado.toUpperCase()
    );

    if (productoBuscadoPorId !== undefined) {
      alert(
        "El producto de código " +
          idBuscado.toUpperCase() +
          " es: " +
          productoBuscadoPorId.toString()
      );
    } else {
      alert("No encontramos el producto con nombre: " + idBuscado);
    }
  }
  //=====================================================================================================
  //7)\tFILTRAR PRODUCTOS SEGÚN STOCK (ver qué productos hay en cantidad).
  else if (eleccion == "7") {
    let productosHalladosPorStock = productos.filter(
      (producto) => producto.cantidad > 0
    );

    alert(
      "La cantidad de productos que se hallaron con stock es: " +
        productosHalladosPorStock.length
    );
  }
  //=====================================================================================================
  //8)\tFILTRAR PRODUCTOS SEGÚN NO STOCK (ver qué productos no hay en cantidad).
  else if (eleccion == "8") {
    let productosHalladosPorNoStock = productos.filter(
      (producto) => producto.cantidad == 0
    );

    alert(
      "La cantidad de productos que se hallaron sin stock es: " +
        productosHalladosPorNoStock.length
    );
  }
  //=====================================================================================================
  //9)\tSABER SI HAY UN PRODUCTO SEGÚN TITULO.
  else if (eleccion == "9") {
    let nombreBuscado = prompt("¿qué titulo deseas buscar?");

    let existe = productos.some(
      (producto) => producto.titulo === nombreBuscado.toUpperCase()
    );

    if (existe) {
      alert("El producto buscado si existe dentro de la colección.");
    } else {
      alert("No encontramos el producto con nombre: " + nombreBuscado);
    }
  }
  //=====================================================================================================
  //10)\tGENERAR NUEVO INVENTARIO CON DESCUENTO A LOS PRECIOS
  else if (eleccion == "10") {
    function aplicarDescuento(precio, porcentaje) {
      return precio + precio * (porcentaje / 100);
    }

    let porcentajeDescuento = prompt(
      "Vamos a generar una nueva lista con precios descontados. ¿De cuánto será el descuento?"
    );
    alert("la lista con nuevos precios se mostrará en la consola");
    let preciosDescontados = productos.map((producto) => {
      return new Producto(
        producto.id,
        producto.tipo,
        producto.titulo,
        producto.descripcion,
        aplicarDescuento(producto.precio, porcentajeDescuento),
        producto.codigo,
        producto.cantidad
      );
    });

    console.log(
      "--> Los precios nuevos serían estos ",
      preciosDescontados.forEach((producto) => {
        console.log(producto.titulo + " " + producto.precio);
      })
    );
  }
  //=====================================================================================================
  //11)\tORDENAR EL INVENTARIO SEGÚN PRECIOS (mayor a menor).
  else if (eleccion == "11") {
    productos.sort((primero, segundo) => primero.precio - segundo.precio); // orden ASC

    console.log(
      "--> la lista de los productos ordenados por precio de forma ascendente es",
      productos
    );
    alert("el array generado se muestra en la consola");
  }
  //=====================================================================================================
  //12)\tORDENAR EL INVENTARIO SEGÚN PRECIOS (menor a mayor).
  else if (eleccion == "12") {
    productos.sort((primero, segundo) => segundo.precio - primero.precio); // orden DESC
    console.log(
      "--> la lista de los productos ordenados  por preciode forma descendente es",
      productos
    );
    alert("el array generado se muestra en la consola");
  }
  //=====================================================================================================
  //13)\tORDENAR EL INVENTARIO SEGÚN ID (mayor a menor).
  else if (eleccion == "13") {
    productos.sort((primero, segundo) => primero.id - segundo.id); // orden ASC
    console.log(
      "--> la lista de los productos ordenados por id de forma ascendente es",
      productos
    );
    alert("el array generado se muestra en la consola");
  }
  //=====================================================================================================
  //14)\tORDENAR EL INVENTARIO SEGÚN ID (menor a mayor).
  else if (eleccion == "14") {    
    productos.sort((primero, segundo) => segundo.id - primero.id); // orden DESC
    console.log(
      "--> la lista de los productos ordenados  por id  de forma descendente es",
      productos
    );
    alert("el array generado se muestra en la consola");
  }
  //=====================================================================================================
  else {
    alert("no has dado una opción válida.");
  }
} while (condition);






