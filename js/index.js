let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1"

fetch(PeliculasPopulares)
.then(function (res) {
    return res.json()
})
.then(function (data) {
    console.log(data);
    let arrayDePersonajes = data.results;

    let seccion = document.querySelector('#pelirecomendadasid');
    let allCharacters = [];

    console.log(arrayDePersonajes);
    
    for(let i=0; i<arrayDePersonajes.length; i++){
        
        allCharacters += `<a href="./detalle.html?buscador=${arrayDePersonajes[i].id}"><article>
                            <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                            <p>Name: ${arrayDePersonajes[i].name} </p>
                            <p>Status: ${arrayDePersonajes[i].status} </p>
                        </article></a>`
    }
  
    seccion.innerHTML = allCharacters;

})
.catch( function(e){
    console.log(e)
})
