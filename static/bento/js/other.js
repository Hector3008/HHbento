//genero una lista para almacenar los carritos:
let carritos = [];
//genero una lista para almacenar los productos que generaré manualmente en este código:
//  (lo especifico de esta manera porque después debo generar una para el LocalStorage)
const productosOriginalDataBase = [];

//genero una lista con los productos iterables:
let productosAll = [];
//genero una lista con los productos eliminados:
let productosEliminados = [];
//genero una lista para almacenar los productos (en Carritos):
const productosEnCarritos = [];

//genero la clase Producto con la cual voy a trabajar:

class Producto {
  constructor(id, imagen, tipo, titulo, descripcion, precio, codigo, cantidad) {
    (this.imagen = imagen), (this.id = id);
    this.tipo = tipo;
    this.titulo = titulo.toUpperCase();
    this.descripcion = descripcion.toUpperCase();
    this.precio = parseFloat(precio);
    this.codigo = codigo.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.stock = !!parseInt(cantidad);
  }

  /*defino un DELETE para el CRUD*/
  toDelete() {
    /*relleno con NULL los atributos. 
    
    Lo hago de esta manera, para conservar el ID y luego no tener problemas
    con EL lenght en el array que sirve como BdD.
  
    Esto, porque de este lenght genero los ID de nuevos objetos.*/
    this.tipo = null;
    this.titulo = null;
    this.descripcion = null;
    this.precio = null;
    this.codigo = null;
    this.cantidad = null;
    this.stock = null;
  }

  //defino los métodos para posteriores READ del CRUD:
  toRead() {
    return `id: ${this.id}; tipo:${this.tipo}; titulo: ${this.titulo}; descripcion: ${this.descripcion}; precio: ${this.precio}; codigo: ${this.codigo}; cantidad: ${this.cantidad}; stock: ${this.stock}`;
  }

  toReadId() {
    return this.id;
  }
  toReadTipo() {
    return this.tipo;
  }
  toReadTitulo() {
    return this.titulo;
  }
  toReadDescripcion() {
    return this.descripcion;
  }
  toReadPrecio() {
    return this.precio;
  }
  toReadCodigo() {
    return this.codigo;
  }
  toReadCantidad() {
    return this.cantidad;
  }
  toReadStock() {
    return this.stock;
  }

  //defino estos métodos para posteriores UPDATES del CRUD:
  toUpdate(
    newTipo,
    newTitulo,
    newDescripcion,
    newPrecio,
    newCodigo,
    newCantidad
  ) {
    this.tipo = newTipo;
    this.titulo = newTitulo;
    this.descripcion = newDescripcion;
    this.precio = newPrecio;
    this.codigo = newCodigo;
    this.cantidad = newCantidad;
  }
  toUpdateTipo(nuevoValor) {
    this.tipo = nuevoValor.toUpperCase();
  }

  toUpdateTitulo(nuevoValor) {
    this.titulo = nuevoValor.toUpperCase();
  }

  toUpdateDescripcion(nuevoValor) {
    this.descripcion = nuevoValor.toUpperCase();
  }

  toUpdatePrecio(nuevoValor) {
    this.precio = parseFloat(nuevoValor);
  }

  toUpdateCodigo(nuevoValor) {
    this.codigo = nuevoValor.toUpperCase();
  }

  toUpdateCantidad(nuevoValor) {
    this.cantidad = parseInt(nuevoValor);
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

//funcion para generar el ID de los productos (de originalDataBase):
function generateIDtoProductos() {
  return productosOriginalDataBase.length + 1;
}

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

//genero la clase 'tipo' para rellenar las opciones del input 'tipo' del formulario:
class Tipo{
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}
//para agregar más tipos sólo es cuestión de hacerlo en este array:
const tipos = [new Tipo(1, "LIBRO"), new Tipo(2, "OTRO")];

//genero la variable de acceso GETe a la cual le debo cargar los 'tipos' con NOM: 
let tiposLista = document.getElementById("tipo");

//se los cargo con un forEach:
tipos.forEach((unTipo) => {

  let item = document.createElement("option");
  item.value = unTipo.id.toString();
  item.innerText = unTipo.nombre;

  tiposLista.append(item);
});
let btnAdminVerTabla = ""
//genero la función del NOM para la tabla de objetos:
function tablaAdminNOM(catalogo) {
  // Pintar la tabla de carreras en la UI
  let adminTabla = document.getElementById("adminTabla");
  btnAdminVerTabla = document.getElementById("btnAdminVerTabla");
  adminTabla.innerHTML = "";
  
  catalogo.forEach((e) => {
    let record = document.createElement("tr");
    record.innerHTML = `<tr>
      <td scope="row">${e.id}</td>
      <td>${e.codigo} <a id='${
      e.id
    }editarCodigo' style='color: grey'>(editar)</a></td>
      <td>${e.titulo} <a id='${
      e.id
    }editarTitulo' style='color: grey'>(editar)</a></td>
      <td>${e.tipo} <a id='${
      e.id
    }editarTipo' style='color: grey'>(editar)</a></td>
      <td>${e.cantidad} <a id='${
      e.id
    }editarCantidad' style='color: grey'>(editar)</a></td>
      <td>${e.imagen} <a id='${
      e.id
    }editarImagen' style='color: grey'>(editar)</a></td>
      
    <td><button id='${
        e.id
      }eliminar'  style='color: #922b3e'>(eliminar)</button></td>
    </tr>
  
`;
    adminTabla.append(record);

  //genero los eventos del update (editar) en este CRUD:
    //aún queda optimizar con validaciones...
      //por código:
    let identificadorPorCodigo = e.id + "editarCodigo";
    let eCodigoToEditar = document.getElementById(identificadorPorCodigo);

    eCodigoToEditar.addEventListener("click",()=>{
      let captura = prompt("ingresa el nuevo valor del código:");
      e.codigo = captura;
      localStorage.setItem("catalogo",JSON.stringify(catalogo));
      catalogo = JSON.parse(localStorage.getItem("catalogo"))
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
      tablaAdminNOM(catalogo);
    })
     //por titulo:
    let identificadorPorTitulo = e.id + "editarTitulo";
    let eTituloToEditar = document.getElementById(identificadorPorTitulo);

    eTituloToEditar.addEventListener("click", () => {
      let captura = prompt("ingresa el nuevo valor del titulo:");
      e.titulo = captura;
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
      tablaAdminNOM(catalogo);
    });
    let identificadorPorTipo = e.id + "editarTipo";
    let eTipoToEditar = document.getElementById(identificadorPorTipo);

    eTipoToEditar.addEventListener("click", () => {
      let captura = prompt("ingresa el nuevo valor del tipo:");
      e.tipo = captura;
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
      tablaAdminNOM(catalogo);
    });
      //por cantidad:
    let identificadorPorCantidad = e.id + "editarCantidad";
    let eCantidadToEditar = document.getElementById(identificadorPorCantidad);

    eCantidadToEditar.addEventListener("click", () => {
      let captura = prompt("ingresa el nuevo valor de la cantidad:");
      e.cantidad = captura;
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
      tablaAdminNOM(catalogo);
    });
      //por imagen:
    let identificadorPorImagen = e.id + "editarImagen";
    let eImagenToEditar = document.getElementById(identificadorPorImagen);

    eImagenToEditar.addEventListener("click", () => {
      let captura = prompt("ingresa el nuevo valor de la imagen (url):");
      e.imagen = captura;

      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
      tablaAdminNOM(catalogo);
    });
      let identificarDeEliminar = e.id + "eliminar";
      let eToElimidar = document.getElementById(identificarDeEliminar);

      eToElimidar.addEventListener("click", () => {
        e.id = e.id;
        e.titulo = "null";
        e.codigo = "null";
        e.cantidad = 0;
        e.precio = 0;
        e.descripcion = "null";
        e.tipo = "null";
        e.imagen = "null"

        localStorage.setItem("catalogo", JSON.stringify(catalogo));
        catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
        tablaAdminNOM(catalogo);
      });
  });
   
  btnAdminVerTabla.setAttribute("id", "btnOcultarAdminTabla");
  btnOcultarAdminTabla = document.getElementById("btnOcultarAdminTabla");
  btnOcultarAdminTabla.innerText = "ocutar tabla";

  btnOcultarAdminTabla.addEventListener("click", (event) => {
    event.preventDefault();
    adminTabla.innerHTML = "";
    btnOcultarAdminTabla.setAttribute("id", "btnAdminVerTabla");
    btnAdminVerTabla = document.getElementById("btnAdminVerTabla");
    btnAdminVerTabla.innerText = "ver tabla";
    btnAdminVerTabla.addEventListener("click", () => {
      tablaAdminNOM(catalogo);
    });
  });




}

catalogo = JSON.parse(localStorage.getItem("catalogo"));
//ejecuto la función con el catálogo:
tablaAdminNOM(catalogo);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {event.preventDefault();

  let titulo = document.getElementById("titulo").value;
  let codigo = document.getElementById("codigo").value;
  let descripcion = document.getElementById("descripcion").value;  
  let precio = document.getElementById("precio").value;  
  let cantidad = document.getElementById("cantidad").value;  
  alert(
    "se oprimió el botón y se tiene el valor: titulo:" +
      titulo + " codigo: "+
      codigo + " descripcion; "+
      descripcion + " precio: "+
      precio + " cantidad: "+ cantidad
  );
const nuevoProducto = new Producto(
  String(catalogo.length+1),
  "https://picsum.photos/320/500",
  "tipo",
  titulo,
  descripcion,
  precio,
  codigo,
  cantidad
);

  catalogo.push(nuevoProducto);

  localStorage.setItem("catalogo", JSON.stringify(catalogo));

  catalogo = JSON.parse(localStorage.getItem("catalogo"));
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
  tablaAdminNOM(catalogo);

  return true;
}

)


formulario.addEventListener("reset", (event) => {
  formulario.reset();
});