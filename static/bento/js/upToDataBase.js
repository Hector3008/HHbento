//==================================================================================//
//agrego los objetos producto al array (original) de la clase:
//==================================================================================//
productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0001.jpg",
    "libro",
    "Deus caritas est.",
    "celebre encíciclipa del santo padre sobre el amor cristiano...",
    10,
    "DCE",
    20
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0002.jpg",
    "libro",
    "Caritas in veritate.",
    "Sobre el desarrollo humano integral en la caridad y en la verdad... ",
    10,
    "CiV",
    0
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0003.jpg",
    "libro",
    "Jesus de Nazareth.",
    "Benedicto XVI rescata la figura de Jesús de recientes descripciones «populares» y restaura la verdadera identidad de Jesús que nos presentan los Evangelios....",
    20,
    "JdN",
    20
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0004.jpg",
    "libro",
    "Introduccion al cristianismo.",
    "Lecciones sobre el credo apostólico. DECIMOSEXTA EDICIÓN....",
    30,
    "IaC",
    20
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0005.jpg",
    "libro",
    "Infancia de Jesus.",
    "El Papa, detallando como la historia de la infancia y niñez de Jesús es hoy por hoy aun tan relevante como fue hace dos mil años...",
    65,
    "IdJ",
    20
  )
);
productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0006.jpg",
    "libro",
    "Dialéctica de la secularización.",
    " Jürgen Habermas, debatía en público con uno de los principales representantes de la Iglesia Católica, el entonces cardenal Joseph Ratzinger, hoy papa Benedicto XVI...",
    80,
    "DdS",
    20
  )
);
productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0007.jpg",
    "libro",
    "Escatología: La muerte y la vida eterna.",
    "Cuando en 1977 Joseph Ratzinger, entonces profesor de Teología recién designado obispo de Múnich, presentaba éste su primer libro, la Escatología apenas dejaba de ser... ",
    90,
    "Emve",
    20
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    //PRODUCTO POR CORREGIR:
    "../static/bento/assets/img/libros/libros__0004.jpg",
    "libro",
    "El espiritu de la liturgia.",
    "sta obra profundiza en uno de los elementos claves del Concilio Vaticano II, la renovación litúrgica, cuyo espíritu en muchos casos no ha llegado a los cristianos con la misma rapidez que los cambios exteriores...",
    70,
    "EdL",
    20
  )
);

productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0009.jpg",
    "libro",
    "The God of Jesus Christ.",
    " profound thoughts on the nature and person of God, building a bridge between theology and spirituality as he makes wide... ",
    20,
    "GJC",
    20
  )
);
productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0010.jpg",
    "libro",
    "Joseph y Chico.",
    "En este curioso libro, Chico (fiel amigo de Benedicto) cuenta la vida del papa. Es una obra especialmente escrita para niños...",
    40,
    "JyC",
    20
  )
);
productosOriginalDataBase.push(
  new Producto(
    generateIDtoProductos(),
    "../static/bento/assets/img/libros/libros__0011.jpg",
    "libro",
    "Fe y razon.",
    "algunas de las intervenciones más importantes de Benedicto XVI en torno a este asunto, y reproducimos dos discursos pronunciados en 1998 y 2005...",
    50,
    "FyR",
    20
  )
);
//agrego los productos de la originalDataBase al array iterable:
productosOriginalDataBase.forEach((element) => {
  productosAll.push(element);
});

//genero el array iterable como JSON en el LocalStorage:
localStorage.getItem("catalogo") ||
  localStorage.setItem("catalogo", JSON.stringify(productosAll));

//genero la variable 'catalogo' con el parseo del JSON para iterar sobre el array:
let catalogo = JSON.parse(localStorage.getItem("catalogo"));

//MAPeo el array para generar una lista de objetos que me permita acceder a sus métodos:
//(al final borré los métodos porque no los usé, pero dejo el mapeo porque me parece buena práctica).
catalogo = catalogo.map(
  (e) =>
    new Producto(
      e.id,
      e.imagen,
      e.tipo,
      e.titulo,
      e.descripcion,
      e.precio,
      e.codigo,
      e.cantidad
    )
);

//genero una clase 'Carrito':
class Carrito {
  //defino un constructor que no recibe parámetros:
  constructor(id) {
    this.id = id;
    this.productos = [];
  }
}
//genero un objeto 'miCarrito':
const miCarrito = new Carrito(1);

//genero su registro en el localStorage:
localStorage.getItem("productosEnMiCarrito") ||
  localStorage.setItem(
    "productosEnMiCarrito",
    JSON.stringify(miCarrito.productos)
  );

  miCarrito.productos = JSON.parse(
    localStorage.getItem("productosEnMiCarrito")
  );

  miCarrito.productos = miCarrito.productos.map(
    (e) =>
      new Producto(
        e.id,
        e.imagen,
        e.tipo,
        e.titulo,
        e.descripcion,
        e.precio,
        e.codigo,
        e.cantidad
      )
  );
