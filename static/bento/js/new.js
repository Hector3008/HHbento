//genero una lista para almacenar los carritos:
let carritos = [];

//genero una clase 'Carrito':
class Carrito {
  
  //defino un constructor que no recibe parámetros:
  constructor() {
    this.id = toString(carritos.length + 1);
    this.productos = [];

    /*
    quiero que cuando se cree el objeto, automaticamente se pushee a la lista de carritos e intenté con esto: 

    carritos.push(this);
    */
  }
  //defino un método para vaciar la lista de productos dentro del carrito:
  toCleanAll() {
    this.productos = [];
  }
  //defino métodos para eliminar elementos puntuales dentro de la lista:
  toDeleteElement(element) {
    if (this.productos.find(element)) {
      e.toDelete;
    } else {
      return NaN;
    }
    let unProductoBuscado = misProductos.find(
      (unProducto) => unProducto.nombre === nombreBuscado.toUpperCase()
    );
  }
  //un método con id:
  toDeleteElementById(e) {
    if (this.productos.find(producto.id == e)) {
      producto.toDelete();
    } else {
      return NaN;
    }
  }
  //un método con codigo:
  toDeleteElementById(e) {
    if (this.productos.find(producto.codigo == e)) {
      producto.toDelete();
    } else {
      return NaN;
    }
  }
  //defino métodos para agregar elementos al carrito:
  toAddElement(Producto, cantidad) {
    let nuevoElemento = new ProductoEnCarrito(Producto, cantidad);
    this.productos.push(nuevoElemento);
  }
}

//genero el objeto 'miCarrito':
let miCarrito = new Carrito()

//genero una clase 'ProductoEnCarrito':
class ProductoEnCarrito {

  //construyo el objeto recibiendo un objeto Producto, un objeto Carrito y la cantidad:
  constructor(Carrito, Producto, cantidad=1) {
    
    this.Carrito=Carrito;
    this.id = toString(Carrito.productos.length()+1);
    this.tipo = Producto.tipo;
    this.titulo = Producto.titulo;
    this.descripcion = Producto.descripcion;
    this.precio = Producto.precio;
    this.codigo = Producto.codigo;
    this.cantidad = cantidad;
  }
  //metodo para eliminar usando null:
  toDelete(){
    this.Carrito=null;
    this.tipo = null;
    this.titulo = null;
    this.descripcion = null;
    this.precio = null;
    this.codigo = null;
    this.cantidad = null;
  }
}