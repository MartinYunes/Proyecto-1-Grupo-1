let recuperarStorage= localStorage.getItem('favoritos');
console.log(recuperarStorage);
let favoritos= JSON.parse (recuperarStorage)


let seccion= document.querySelector("#lista")

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
                arrayPeliculasFavoritas += `<article class="peliOSerie">
                                            <p class="nombrePeliOSerie">${data.title}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}' alt="img" class="tapapelicula">
                                            <a href="./detalle_peliculas.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`

            pelisFavoritas.innerHTML = arrayPeliculasFavoritas;

            }).catch(function (error) {
                return error;
            });





let btn= document.querySelector("#botton")
btn.addEventListener("click", function (e){
    e.preventDefault()
    let favoritos = [];

    let recuperarStorage=localStorage.getItem('favoritos');

    if (recuperarStorage !=null){
        favoritos =JSON.parse(recuperarStorage);
        console.log(favoritos);


    }
    //let fav =document.querySelector('.fav');

    if(favoritos.includes(id)){
        let indice= favoritos.indexOF(id);
        favoritos.slice(indice,1);
        btn.innerText="Agregar favorito"

    }else{
        favoritos.push(id);
        btn.innerText="Quitar favorito"
    }
    letfavToString=JSON.stringify(favoritos);
    localStorage.setItem('favoritos',favToString)

