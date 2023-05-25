
//(PENDIENTE) fetch asíncrono para simulador de publicidad:

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    function anuncio() {
      let contenedor = "";

      data.forEach((e) => {

        contenedor = `<h6 style="margin: 2px; padding: 2px">(${e.email})</h6> <p style="font-size: 15px; margin: 2px; padding: 2px"> titulo:  ${e.body} </p> <h6 style="font-size: 15px; margin: 2px; padding: 2px">(${e.name})</h6>
        <p style="font-size: 12px">esto es un simulador de anuncio publicitario usando fetch con api externa y asincronía con intervalos de tiempo</p>
        `; 
    } );

      return contenedor;
    }
    data.forEach((e) =>
      setTimeout(() => {
        Swal.fire({
          html: `${anuncio()}`,
          position: "top-end",
          width: "250px",
          heightAuto: "heightAuto",
          showConfirmButton: false,
        });

      }, 90000 * parseInt(data.indexOf(e) + 1))
    );
  })
  .catch(() => {console.log("error");}); 
  

