let recuperarStorage= localStorage.getItem('favoritos');

let favoritos= JSON.parse (recuperarStorage)


let section= document.querySelector("#lista")

let peliculasFavoritas = document.querySelector("#peliculasFavoritas");

let seriesFavoritas = document.querySelector('#seriesFavoritas');

let arraySeriesFavoritas = '';
let arrayPeliculasFavoritas = '';

console.log(favoritos);

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    for (let i = 0; i < 5; i++) {
        let urlPeli = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
        fetch(urlPeli)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                arrayPeliculasFavoritas += `<article class="peliculaOSerie">
                                            <p class="nombrepeliculaOSerie">${data.title}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}' alt="img" class="tapadepelicula">
                                            <a href="./detail-movie.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`            

            seriesFavoritas.innerHTML = arrayPeliculasFavoritas;

            }).catch(function (error) {
                return error;
            });



};}
