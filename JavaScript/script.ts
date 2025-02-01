$(function () {
  // Constantes
  const urlApi = 'https://api.api-onepiece.com/v2/characters/en';
  const contenedorFlotante = $('.contenedor-flotante');

  // Eventos
  contenedorFlotante.on('mouseenter', () => {
    contenedorFlotante.animate(
      {
        height: '270px',
      },
      500
    );

    contenedorFlotante.css({
      backgroundColor: '#fff',
    });
  });

  contenedorFlotante.on('mouseleave', () => {
    contenedorFlotante.animate(
      {
        height: '40px',
      },
      500
    );

    contenedorFlotante.css({
      backgroundColor: 'transparent',
    });
  });

  // Petición
  $.ajax({
    url: urlApi,
    method: 'GET',
    dataType: 'json',
    success: (data) => {
      console.log('Datos obtenidos exitosamente');

      data.forEach((personaje: any) => {
        const personajeHtml = `
          <div class="personaje">
            <h2>${personaje.name}</h2>
            <p>Edad: ${personaje.age}</p>
            <p><b>Cargo: ${personaje.job}</b></p>
            <h3>Recompensa: ${personaje.bounty}</h3>
          </div>          
        `;
        $('#personaje').append(personajeHtml);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('Error al obtener los datos', jqXHR, textStatus, errorThrown);
    },
  });
});
