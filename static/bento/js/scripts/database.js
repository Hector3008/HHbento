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

miCarrito.productos = JSON.parse(localStorage.getItem("productosEnMiCarrito"));

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

//genero una lista para almacenar los productos que generaré manualmente en este código:
//  (lo especifico de esta manera porque después debo generar una para el LocalStorage)
const productosOriginalDataBase = [];

//genero una lista con los productos eliminados:
let productosEliminados = [];

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
let catalogo = [];