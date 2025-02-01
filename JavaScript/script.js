$(function () {
    // Constantes
    var urlApi = 'https://api.api-onepiece.com/v2/characters/en';
    var contenedorFlotante = $('.contenedor-flotante');
    // Eventos
    contenedorFlotante.on('mouseenter', function () {
        contenedorFlotante.animate({
            height: '270px',
        }, 500);
        contenedorFlotante.css({
            backgroundColor: '#fff',
        });
    });
    contenedorFlotante.on('mouseleave', function () {
        contenedorFlotante.animate({
            height: '40px',
        }, 500);
        contenedorFlotante.css({
            backgroundColor: 'transparent',
        });
    });
    // Petición
    $.ajax({
        url: urlApi,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log('Datos obtenidos exitosamente');
            data.forEach(function (personaje) {
                var personajeHtml = "\n          <div class=\"personaje\">\n            <h2>".concat(personaje.name, "</h2>\n            <p>Edad: ").concat(personaje.age, "</p>\n            <p><b>Cargo: ").concat(personaje.job, "</b></p>\n            <h3>Recompensa: ").concat(personaje.bounty, "</h3>\n          </div>          \n        ");
                $('#personaje').append(personajeHtml);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error al obtener los datos', jqXHR, textStatus, errorThrown);
        },
    });
});
