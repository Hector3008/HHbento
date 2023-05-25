
//genero el array iterable como JSON en el LocalStorage:
function upDataBase() {
  fetch("./../static/bento/data/productosOriginalDataBase.json")
    .then((res) => res.json())
    .then((data) => {


      localStorage.getItem("catalogo") ||
      localStorage.setItem("catalogo", JSON.stringify(data));

      catalogo = JSON.parse(localStorage.getItem("catalogo"));       
    });
}

upDataBase(); 

catalogo = JSON.parse(localStorage.getItem("catalogo"));

//genero la variable de acceso 'catalogo' con el parseo del JSON para iterar sobre el array:

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
