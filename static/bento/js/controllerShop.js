//construyo las variables GetE del html con que voy a trabajar:

const productoEnCatalogoContainer = document.getElementById(
  "productoEnCatalogoContainer"
);
const productoEnCarritoContainer = document.getElementById(
  "productoEnCarritoContainer"
);

const btnComprar = document.getElementById("btnComprar");

const btnVerCarrito = document.getElementById("btnVerCarrito");

// FUNCIONES
//cargar catálogo en html:
const CargarCatalogoEnHTML = (catalogo) => {
  //con esta Función hago el NOM del catálogo en la página principal. Es decir, mostraré los productos:
  for (let index = 0; index <= catalogo.length - 1; index += 3) {
    let item = document.createElement("div");
    item.setAttribute("class", "Item");

    item.innerHTML = `

      <div class="librosallo__main__container container text-center">

        <div class="index__section__libros__grid__row row">

          <div class="index__section__librosgrid__col col-sm-4">

            <div class="index__section__libros__grid__item">

              <img class="index__section__libros__grid__item__imagen" alt=${
                catalogo[index].codigo
              } src='${catalogo[index].imagen}'/>
              <h4 class="index__section__libros__grid__item__titulo display-6">${
                catalogo[index].titulo
              }</h4>
              
              <h3>$${catalogo[index].precio}</h3>
              <h3 class= '${catalogo[index].stock ? "green" : "red"}'> ${
      catalogo[index].stock ? "con stock" : "no hay stock"
    }</h3> 
              <button class='addBtn' id='${
                catalogo[index].id
              }'><a class='whiteLink'>ADD TO CART</a></button>

            </div>
          </div>

              ${
                catalogo[index + 1]
                  ? `<div class="index__section__librosgrid__col col-sm-4">`
                  : ``
              }

            ${
              catalogo[index + 1]
                ? `<div class="index__section__libros__grid__item">`
                : ``
            }

              ${
                catalogo[index + 1]
                  ? `<img class="index__section__libros__grid__item__imagen" alt=${
                      catalogo[index + 1].codigo
                    } src='${catalogo[index + 1].imagen}'/>`
                  : ``
              }
              ${
                catalogo[index + 1]
                  ? `<h4 class="index__section__libros__grid__item__titulo display-6">${
                      catalogo[index + 1].titulo
                    }</h4>`
                  : ``
              }
              
              ${
                catalogo[index + 1]
                  ? `<h3>$${catalogo[index + 1].precio}</h3>`
                  : ``
              }

              ${
                catalogo[index + 1]
                  ? `<h3 class= '${
                      catalogo[index + 1].stock ? "green" : "red"
                    }'> ${
                      catalogo[index + 1].stock ? "con stock" : "no hay stock"
                    }</h3>`
                  : ``
              } 
              ${
                catalogo[index + 1]
                  ? `<button class='addBtn' id='${
                      catalogo[index + 1].id
                    }'><a class='whiteLink'>ADD TO CART</a></button>`
                  : ``
              }

            ${catalogo[index + 1] ? "</div>" : ``}
          </div>
                    ${
                      catalogo[index + 2]
                        ? `<div class="index__section__librosgrid__col col-sm-4">`
                        : ``
                    }
                    

            ${
              catalogo[index + 2]
                ? `<div class="index__section__libros__grid__item">`
                : ""
            }
              ${
                catalogo[index + 2]
                  ? `<img class="index__section__libros__grid__item__imagen" alt=${
                      catalogo[index + 2].codigo
                    } src='${catalogo[index + 2].imagen}'/>`
                  : ``
              }
              ${
                catalogo[index + 2]
                  ? `<h4 class="index__section__libros__grid__item__titulo display-6">${
                      catalogo[index + 2].titulo
                    }</h4>`
                  : ``
              }
              
              ${
                catalogo[index + 2]
                  ? `<h3>$${catalogo[index + 2].precio}</h3>`
                  : ``
              }
              ${
                catalogo[index + 2]
                  ? `<h3 class= '${
                      catalogo[index + 2].stock ? "green" : "red"
                    }'> ${
                      catalogo[index + 2].stock ? "con stock" : "no hay stock"
                    }</h3>`
                  : ``
              }
              ${
                catalogo[index + 2]
                  ? `<button class='addBtn' id='${
                      catalogo[index + 2].id
                    }'><a class='whiteLink'>ADD TO CART</a></button>`
                  : ``
              }              

            ${catalogo[index + 2] ? `</div>` : ``}
          </div>          
        </div>
      </div>
            `;
    productoEnCatalogoContainer.appendChild(item);

    //debo generar los eventos a medida que cargo los elementos del catálogo así que lo hago de esta manera:

    //genero la variable getE:
    let getE1 = document.getElementById(catalogo[index].id);
    //vinculo el evento onClick que llama a la función 'agregarAlCarrito':
    getE1.onclick = () => {
      agregarAlCarrito(catalogo[index].id);
    };
    //repito con el segundo elemento del ciclo for:
    if (catalogo[index + 1]) {
      let getE2 = document.getElementById(catalogo[index + 1].id);
      getE2.onclick = () => {
        agregarAlCarrito(catalogo[index + 1].id);
      };
    }
    //y repito con el tercer elemento del ciclo for:
    if (catalogo[index + 2]) {
      let getE2 = document.getElementById(catalogo[index + 2].id);
      getE2.onclick = () => {
        agregarAlCarrito(catalogo[index + 2].id);
      };
    }
  }
};
//agregar al carrito:
function agregarAlCarrito(id) {
  //genero una variable capturando el elemento producto:
  let productoAMiCarrito = catalogo.find((e) => e.id == id);

  //genero un condicional para operar en caso de que el objeto tenga stock:
  if (productoAMiCarrito.stock) {
    //genero esta variable de control para condicionar un toastify:
    let conditional = true;
    //genero un condicional para operar si el objeto existe en el array con objetos dentro del carrito:
    const productoExistenteEnMiCarrito = miCarrito.productos.some(
      (e) => e.codigo == productoAMiCarrito.codigo
    );

    //en ese caso, agrego un dígito a su cantidad:
    if (productoExistenteEnMiCarrito) {
      let productoEnMiCarrito = miCarrito.productos.find(
        (e) => e.codigo == productoAMiCarrito.codigo
      );
      if (productoEnMiCarrito.cantidad >= productoAMiCarrito.cantidad) {
        Toastify({
          text: `no puedes agregar más elementos de este producto porque la petición superaría el stock de la tienda`,
          duration: 5000,
          style: {
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 35%, rgba(43,0,0,1) 100%)",
          },
        }).showToast();
        conditional = false;
      } else {
        productoEnMiCarrito.cantidad++;
      }

      //y genero el mensaje con toastify:
      if (conditional) {
        Toastify({
          text: `ahora tienes ${productoEnMiCarrito.cantidad} unidad/es de ${productoEnMiCarrito.titulo} en el carrito`,
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
      }
    }
    //en caso contrario, genero el elemento con un nuevo objeto 'Producto':
    else {
      productoAMiCarrito = new Producto(
        miCarrito.productos.length.toString(),
        productoAMiCarrito.imagen,
        productoAMiCarrito.tipo,
        productoAMiCarrito.titulo,
        productoAMiCarrito.descripcion,
        productoAMiCarrito.precio,
        productoAMiCarrito.codigo,
        1
      );

      // y lo agrego al dicho array de objetos en 'miCarrito':
      miCarrito.productos.push(productoAMiCarrito);
      Toastify({
        text: `ahora tienes ${productoAMiCarrito.cantidad} unidad/es de ${productoAMiCarrito.titulo} en el carrito`,
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }
  //en caso contrario, es decir, que no tenga stock.
  else {
    Swal.mixin({
      toast: true,
      position: "top-right",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    }).fire({
      icon: "error",
      title: "No hay stock del producto seleccionado",
    });
  }
  //finalmente, cargo la actualización del array al array
  localStorage.setItem(
    "productosEnMiCarrito",
    JSON.stringify(miCarrito.productos)
  );
  localStorage.setItem("totalCarrito", generateTotalCarrito());
}
//esta función (agregarAlCarrito) la vinculo al elemento 'getE1' de la función 'cargarCarrito'. Esto, porque son elementos que se generan con NOM, por lo cual debo generar el evento conforme genero cada elemento de este NOM.

//el carrito está vacío:
function carritoVacio() {
  productoEnCarritoContainer.innerHTML = ``;
  let sign = document.createElement("h2");

  productoEnCarritoContainer.appendChild(sign);
  Swal.fire({
    icon: "error",
    title: "el carrito está vacío",
    showConfirmButton: false,
    timer: 900,
  });
}
//defino la variable 'totalCarrito' porque voy a querer iterar con ella después:
localStorage.getItem("totalCarrito") || localStorage.setItem("totalCarrito", 0);

let totalCarrito = parseFloat(localStorage.getItem("totalCarrito"));

//genero esta función para usar en momentos posteriores:
function generateTotalCarrito() {
  let total = 0;

  miCarrito.productos.forEach((e) => {
    let subtotal = e.cantidad * e.precio;
    total = total + subtotal;
  });
  return total;
}

//NOM con los items del carrito:
function productosEnCarritoNOM() {
  productoEnCarritoContainer.innerHTML = ``;
  let totalCarrito = 0;

  miCarrito.productos.forEach((e) => {
    let productoEnCarrito = document.createElement("div");

    let subTotal = e.cantidad * e.precio;
    totalCarrito = totalCarrito + subTotal;

    productoEnCarrito.innerHTML = `
            <h3>${e.titulo}</h3>
            <h4> Cantidad: ${e.cantidad}</h4>
            <h4>${`subtotal: ` + subTotal}</h4>

            ${
              miCarrito.productos.indexOf(e, 1) ==
              miCarrito.productos.length - 1
                ? `<h2>total:  ${generateTotalCarrito()}</h2>`
                : ``
            }
           
            ${
              (miCarrito.productos.indexOf(e, 1) ==
                miCarrito.productos.length - 1) |
              (miCarrito.productos.length == 1)
                ? `<button id="btnOcultarCarrito">ocultar carrito</button>`
                : ``
            }
            ${
              (miCarrito.productos.indexOf(e, 1) ==
                miCarrito.productos.length - 1) |
              (miCarrito.productos.length == 1)
                ? `<button id="btnVaciarCarrito">vaciar carrito</button>`
                : ``
            }
            `;

    productoEnCarritoContainer.appendChild(productoEnCarrito);
  });
  //genero la función 'ocultarCarrito' para vaciar el HTML del contenedor:
  function ocultarCarrito() {
    productoEnCarritoContainer.innerHTML = "";
  }
  //GETeo el elemento btnOcularCarrito y le vinculo la función 'ocultarCarrito':
  let btnOcultarCarrito = document.getElementById("btnOcultarCarrito");
  btnOcultarCarrito.addEventListener("click", () => ocultarCarrito());

  function vaciarCarrito() {
    miCarrito.productos = [];
    localStorage.setItem("productosEnMiCarrito", []);
    ocultarCarrito();
    localStorage.setItem("totalCarrito", generateTotalCarrito());
  }
  //GETeo el elemento btnVaciarCarrito y le vinculo la función 'vaciarCarrito':
  let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
  btnVaciarCarrito.addEventListener("click", () => vaciarCarrito());
}
//Mostrar carrito:
function mostrarCarrito() {
  miCarrito.productos.length ? productosEnCarritoNOM() : carritoVacio();
}
//vinculo la función 'mostrarCarrito' al elemento 'btnVerCarrito':
btnVerCarrito.addEventListener("click", () => mostrarCarrito());

//Estructura del pedido para trabajarlo después en el 'swal' de la función 'mostrarPedido':
function pedido() {
  let contenedor = "";
  miCarrito.productos.forEach((e) => {
    contenedor += `<p>(${e.cantidad}) - titulo:  ${e.titulo} (${e.tipo}) $${
      e.cantidad * e.precio
    }</p>`;
  });
  return contenedor;
}

//mostrar pedido:
function mostrarPedido() {
  //genero un condicional para saber si el carrito tiene elementos:
  if (miCarrito.productos.length) {
    //genero variables de acceso con fechas, luego las usaré en el html del 'swal':
    const DateTime = luxon.DateTime;
    const fecha = DateTime.now().setLocale("es").toLocaleString();

    Swal.fire({
      icon: "success",
      title: "Exito!",
      html: `Su orden:\n ${pedido()} Ha sido generada con éxito. \n`,
      footer: `Fecha: ${fecha} - Precio total de su orden: $${generateTotalCarrito()}`,
    });
    localStorage.setItem("productosEnMiCarrito", JSON.stringify([]));
    miCarrito.productos = JSON.parse(
      localStorage.getItem("productosEnMiCarrito")
    );
    productoEnCarritoContainer.innerHTML = ``;
  } else {
    Swal.fire({
      icon: "error",
      title: "No hay productos en el carrito",
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
btnComprar.addEventListener("click", () => mostrarPedido());

//EJECUCIONES:

//cargo el catálogo (NOM):
CargarCatalogoEnHTML(catalogo);

//====================================================================================
