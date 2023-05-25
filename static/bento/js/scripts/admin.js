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

  // capturo el contenedor de la tabla con un GETe: 
  let adminTabla = document.getElementById("adminTabla");
  //capturo el botón 'VerTabla' con otro GETe:
  btnAdminVerTabla = document.getElementById("btnAdminVerTabla");
  //reinicio el texto dentro de la tabla:
  adminTabla.innerHTML = "";
  
  catalogo.forEach((e) => {
    //por cada elemento (producto dentro del catálogo) genero un elemento html:
    let record = document.createElement("tr");
    //cargo su interior con lo que deseo mostrar (importante ir agregando identificadores):
    record.innerHTML = `<tr>
      <td scope="row">${e.id}</td>
      <td>${e.codigo} <a id='${e.id}editarCodigo' style='color: grey'>(editar)</a></td>
      <td>${e.titulo} <a id='${e.id}editarTitulo' style='color: grey'>(editar)</a></td>
      <td>${e.tipo} <a id='${e.id}editarTipo' style='color: grey'>(editar)</a></td>
      <td>${e.cantidad} <a id='${e.id}editarCantidad' style='color: grey'>(editar)</a></td>
      <td>${e.imagen} <a id='${e.id}editarImagen' style='color: grey'>(editar)</a></td>
      
    <td><button id='${e.id}eliminar'  style='color: #922b3e'>(eliminar)</button></td>
    </tr>
`;  //agrego cada elemento al contenedor de la tabla:
    adminTabla.append(record);

    //genero los eventos del UPDATE (editar) en este CRUD:

    //(PENDIENTE) aún queda optimizar con validaciones...

    //por código:
      //genero una variable con el identificador
    let identificadorPorCodigo = e.id + "editarCodigo";
      //genero una variable GETe que captura con el identificador:
    let eCodigoToEditar = document.getElementById(identificadorPorCodigo);
      //le cargo un evento:
    eCodigoToEditar.addEventListener("click", () => {
      //capturo el nuevo valor con un prompt:
      let captura = prompt("ingresa el nuevo valor del código:");
      //le asigno ese nuevo valor al elemento que deseo editar:
      e.codigo = captura;
      //cargo cambio al localStorage:
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      //vuelvo a capturar, en la variable de acceso, el json del localStorage y le hago un MAPeo:
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
      //pinto nuevamente la tabla:
      tablaAdminNOM(catalogo);
    });

    //repito para cada atributo que deseo modificar:

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
    //elimino usando 'null' para mantener el id. Luego, debo ir aplicando un filter al catálogo que cargo con la función:

    //PENDIENTE: debo agregar el producto eliminado a un respaldo:
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
  //cambio el elemento btnVerTabla a btnOcultarTabla:
  btnAdminVerTabla.setAttribute("id", "btnOcultarAdminTabla");
  btnOcultarAdminTabla = document.getElementById("btnOcultarAdminTabla");
  btnOcultarAdminTabla.innerText = "ocutar tabla";

  //le asigno un evento que me limpia el html del contenedor y me restablece el botón:
    //IMPORTANTE: esto me genera un error que me reporta la consola, pero no rompe el código.
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

//hago un GETe y capturo el formulario en una variable de acceso:
const formulario = document.getElementById("formulario");

//le agrego un evento al submit:
formulario.addEventListener("submit", (event) => {
  //preventDefault para que no reinicie la página entera:
  event.preventDefault();
  //capturo los valores ingresados en los input:
  let titulo = document.getElementById("titulo").value;
  let codigo = document.getElementById("codigo").value;
  let descripcion = document.getElementById("descripcion").value;
  let precio = document.getElementById("precio").value;
  let cantidad = document.getElementById("cantidad").value;
  //aviso que se ejecutó el proceso.:

  //y notifico con el respectivo 'toastify':
      Toastify({
        text: `nuevo producto (${titulo}) agregado con éxito`,
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

  //genero el nuevo producto:
  const nuevoProducto = new Producto(
    String(catalogo.length + 1),
    //cargo una url a la imagen con loremPicsum. (PENDIENTE) patchear un sistema con subida y carga de img, png, etc:
    "https://picsum.photos/320/500",
    "tipo",
    titulo,
    descripcion,
    precio,
    codigo,
    cantidad
  );
  //agrego el nuevo producto al array de objetos:
  catalogo.push(nuevoProducto);
  //actualizo el localStorage con el array modificado:
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
  //vuelvo a capturar ese array del localStorage en la variable de acceso y la MAPeo:
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
  //vuelvo a cargar la tabla:
  tablaAdminNOM(catalogo);

  return true;
});
//genero el evento 'reset' del formulario para limpiar los input:
formulario.addEventListener("reset", (event) => {
  formulario.reset();
});

//(IMPORTANTE y PENDIENTE) debo generar aún la función "restablecer" y cargarla al botón del html. También debo ir filtrando el catalogo en la 'tablaAdmin' cargado para excluir los elementos eliminados. 