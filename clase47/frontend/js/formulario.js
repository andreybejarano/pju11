window.onload = async () => {
    const query = new URLSearchParams(location.search);
    const form = document.querySelector('form.formulario');
    if (query.has('movie_id')) {
        const movieId = query.get('movie_id');
        const url = `http://localhost:3031/api/movies/${movieId}`;
        const response = await fetch(url);
        const pelicula = await response.json();
        const data = pelicula.data;
        form.btnCreate.style.display = 'none';
        form.title.value = data.title;
        form.rating.value = data.rating;
        form.awards.value = data.rating;
        form.release_date.value = data.release_date.split('T')[0];
        form.length.value = data.length;
        form.btnEdit.addEventListener('click', async (e) => {
            e.preventDefault();
            const url = `http://localhost:3031/api/movies/update/${movieId}`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: form.title.value,
                    rating: form.rating.value,
                    awards: form.awards.value,
                    release_date: form.release_date.value,
                    length: form.length.value
                })
            });
            const dataJson = await response.json();
            if (dataJson) {
                location.href = '/home.html'
            }
        });
    } else {
        form.btnEdit.style.display = 'none';
        form.btnDelete.style.display = 'none';
        form.btnCreate.addEventListener('click', async (e) => {
            e.preventDefault();
            const url = `http://localhost:3031/api/movies/create`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: form.title.value,
                    rating: form.rating.value,
                    awards: form.awards.value,
                    release_date: form.release_date.value,
                    length: form.length.value
                })
            });
            const dataJson = await response.json();
            if (dataJson) {
                location.href = '/home.html'
            }
        });
    }
}