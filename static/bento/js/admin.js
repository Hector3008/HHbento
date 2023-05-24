//genero la clase 'tipo' para rellenar las opciones del input 'tipo' del formulario:
class Tipo {
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
let btnAdminVerTabla = "";
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
      <td>${e.codigo} <a id='${e.id}editarCodigo' style='color: grey'>(editar)</a></td>
      <td>${e.titulo} <a id='${e.id}editarTitulo' style='color: grey'>(editar)</a></td>
      <td>${e.tipo} <a id='${e.id}editarTipo' style='color: grey'>(editar)</a></td>
      <td>${e.cantidad} <a id='${e.id}editarCantidad' style='color: grey'>(editar)</a></td>
      <td>${e.imagen} <a id='${e.id}editarImagen' style='color: grey'>(editar)</a></td>
      
    <td><button id='${e.id}eliminar'  style='color: #922b3e'>(eliminar)</button></td>
    </tr>
  
`;
    adminTabla.append(record);

    //genero los eventos del update (editar) en este CRUD:
    //aún queda optimizar con validaciones...
    //por código:
    let identificadorPorCodigo = e.id + "editarCodigo";
    let eCodigoToEditar = document.getElementById(identificadorPorCodigo);

    eCodigoToEditar.addEventListener("click", () => {
      let captura = prompt("ingresa el nuevo valor del código:");
      e.codigo = captura;
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
      e.imagen = "null";

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

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let titulo = document.getElementById("titulo").value;
  let codigo = document.getElementById("codigo").value;
  let descripcion = document.getElementById("descripcion").value;
  let precio = document.getElementById("precio").value;
  let cantidad = document.getElementById("cantidad").value;
  alert(
    "se oprimió el botón y se tiene el valor: titulo:" +
      titulo +
      " codigo: " +
      codigo +
      " descripcion; " +
      descripcion +
      " precio: " +
      precio +
      " cantidad: " +
      cantidad
  );
  const nuevoProducto = new Producto(
    1,
    "img",
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
});

formulario.addEventListener("reset", (event) => {
  formulario.reset();
});
