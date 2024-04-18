window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    const form = document.querySelector('.form');
    form.title.focus();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const required = {
            title: true,
            rating: true,
            awards: true,
            release_date: true,
            length: true,
            genre_id: true
        };

        let isValid = true;
        for (const key in required) {
            const err = document.getElementById(`err-${key}`);
            if (required[key] && !form[key]?.value) {
                form[key].classList.add('is-invalid');
                err.classList.add('alert-warning');
                err.innerText = 'El campo es requerido';
                isValid = false;
            } else {
                form[key].classList.remove('is-invalid');
                form[key].classList.add('is-valid');
                err.classList.remove('alert-warning');
                err.innerText = '';
            }
        }

        if (form.rating.value <= 0 || form.rating.value > 10.0) {
            const err = document.getElementById('err-rating');
            err.classList.add('alert-warning');
            err.innerText = 'El campo calificación no puede ser menor a cero ni mayor a 10';
            form.rating.classList.add('is-invalid');
            isValid = false;
        }
        if (form.awards.value <= 0 || form.awards.value > 10) {
            const err = document.getElementById('err-awards');
            err.classList.add('alert-warning');
            err.innerText = 'El campo premios no puede ser menor a cero ni mayor a 10';
            form.awards.classList.add('is-invalid');
            isValid = false;
        } 
        if (form.length.value < 60 || form.length.value > 360) {
            const err = document.getElementById('err-length');
            err.classList.add('alert-warning');
            err.innerText = 'El campo duración no puede ser menor a 60 ni mayor a 360 minutos';
            form.length.classList.add('is-invalid');
            isValid = false;
        }

        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario
        if (isValid) {
            form.submit();
        }
    });


}