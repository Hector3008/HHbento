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
}
