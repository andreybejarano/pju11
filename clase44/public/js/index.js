// Capturar elemento main con el metodo querySelector en la variable main
const main = document.querySelector('main.container');
const subtitle = document.querySelector('h2.subtitulo');
// Capturar elemento html por id
const linkMovies = document.getElementById('link-movies');
// const linkMovies = document.querySelector('#link-movies');
// Capturar todos los parrafos que estan dentro de la seccion informacion
const p = document.querySelectorAll('section.informacion > p');

const userName = prompt('Ingresa tu nombre');

if (userName) {
    subtitle.textContent += ' ' + userName;
} else {
    subtitle.textContent += ' Invitado';
}

// Codigo mas optimo
// const userText = userName || 'Invitado';
// subtitle.textContent += ' ' + userText;

subtitle.style.textTransform = 'uppercase';
linkMovies.style.color = '#E51B3E';

const background = confirm('¿Desea colocar un fondo de pantalla?.');

if (background) {
    document.body.classList.add('fondo');
}

p.forEach((element, index) => {
    if (index % 2 === 0) {
        element.classList.add('destacadoImpar');
    } else {
        element.classList.add('destacadoPar');
    }
});

main.style.display = 'block';