Hola, Saúl.

  Este readme lo escribo el 24/05/2023 a las 20:30, hora peruana.
  Me he dedicado de lleno a este proyecto durante las últimas tres semanas
  y, a pesar de que aún debo optimizarlo y agregarle un par de cosas,
  creo que te he podido entregar hoy un trabajo que demuestra
  mi dominio sobre los conceptos, métodos y recursos esenciales de la cursada.

  Señalo parte de los detalles y mejorables con un comentario de clave '(PENDIENTE)'.
  Estaré trabajando en ellos en el transcurso de estos días y es posible que los veas
  corregidos en comentarios posteriores del repositorio GitHub.
  Esta entrega está identificada con el comentario 'ProyectoFinal+hectorHernandez'
  Las actualizaciones posteriores estarán identificadas con un 'ProyectoFinal+hectorHernandez(avanceAgregado)'.

###
Sobre la Estructura:

  los html están dentro de una carpeta 'templates' y son dos: 
    'admin.html' y 'shop__optimized.html'.

    las dos comparten 4 scripts: 'producto.js', 'database.js', 'upToDataBase.js' y 'publicidad.js'.
    pero sus funcionalidades propias están dentro de su script particular 'admin.js' y 'shop.js' respectivamente.

  Estos script están dentro de la ruta 'static/bento/js/', con su correspondiente 'classes' o 'scripts' según su tipo.

    en el script 'publicidad.js' genero un simulador de publicidad conectado a API externa, implemento así un proceso asíncrono. No es el más vistoso y es un poco molesto y tal véz lo mejore en unos días, pero creo que cumple con su propósito.

  En estas se integra localStorage, eventos, NOM y carga de datos con FETCH a un JSON propio del repo. Este JSON se encuentra en la carpeta 'data' y se llama 'productosOriginalDataBase.json'.

  Solo un comentario: si se ejecuta el html 'shop__optimized.html' sin haber cargado el localStorage, este html va a necesitar una recarga manual para poder funcionar. Había resuelto este problema agregandole un 'await' al fetch del script 'upToDataBase.js' pero después el navegador no me lo permitió.

  Sabrás que mientras el código que carga el fetch se ejecuta, el resto del código sigue su curso. Por lo cual, las variables que modifico en la promesa then, son iteradas en esta primera carga del html sin la modificación que hago en este fetch.

  Fuera de eso, no tengo mayor problema con el CRUD que hago en el html 'admin.html' ni en los procesos del carrito dentro del 'shop__optimized.html'.

  Sobre el uso de carpetas sass, libs y static: disculpa si hacen mucho ruido, las ordeno así por consejo de mis cursadas en programación web y python.

###

sobre las variables:
  
  La más importante es variable 'Catalogo'. La clase 'Producto'. Con ella, trabajo circunstancialmente con otras llamadas 'productoAMiCarrito', 'productoExistenteEnMiCarrito', 'productoEnMiCarrito'. Y 'miCarrito.productos', que es el array que guarda los elementos dentro del carrito. Creo que están bien explicitadas con su clave. Fuera de eso, tengo un par de arrays llamados 'productosOriginalDataBase' y 'productosEliminados', que serán para hacer los posteriores respaldos de productos eliminados y el restablecimiento de la base de datos original.

###

sobre las funciones: 

  trabajo especialmente la función 'CargarCatalogoEnHTML' donde recibo el catálogo de productos y genero un NOM de tres columnas. Fue todo un reto, aunque aún puedo optimizarlo más. También genero capturas de elementos html por id y les agrego eventos dentro de la misma función. Hacerlo dentro, fue la única forma en que me funcionó dentro de mozilla.firefox.

  El proceso del carrito también está trabajado en una funciones llamadas 'agregarAlCarrito', 'carritoVacio', 'productosEnCarritoNOM' y 'mostrarCarrito'. Siguiendo la dinámica que enseñó Luciano en el último afterclass. Queda pendiente el simulador a proceso de pago, pero te juro que no me alcanzó el tiempo para tenerlo hoy.

  En el administrador, la función más trabajada es 'tablaAdminNOM'. Allí pinto la tabla del read y agrego eventos para hacer un UPDATE a cada atributo de los objetos. También elimino los objetos con un button que modifica todos los atributos rellenandolos con un NULL. Con esto, me queda pendiente trabajar los filtros para sus ejecuciones, pero eso es algo que explicitaré en lo sucesivo.
  La otra función del administrador es la creación de objetos que genero con el evento del formulario en el html. Aún tengo pendiente trabajar sus validaciones, pero también lo haré en lo sucesivo.

