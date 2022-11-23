
let urlGenerosPeliculas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'
let urlGenerosSeries = 'https://api.themoviedb.org/3/genre/tv/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'


fetch(urlGenerosPeliculas).then(function (response) {
    return response.json()

}).then(function (data) {
    
    let listaDeGeneros = data.genres
    console.log(listaDeGeneros)
    let generosPeliculas = document.querySelector('#genrespeliculas')
    let generosPelis = ''

        for (let i = 0; i < 4; i++) {
            generosPelis += `<li class="buenaLista"><a href="./detail-genres.html?id_genero_pelis=${listaDeGeneros[i].id}" class="DetalledelGenero">${listaDeGeneros[i].name}</a></li>`
        
        }

        generosPeliculas.innerHTML = generosPelis

        console.log(listaDeGeneros[4])


}).catch(function (error) {
    console.log('el error es' + error);
})


fetch(urlGenerosSeries).then(function (response) {
    return response.json()

}).then(function (data) {
    
    let listaDeGenerosSeries = data.genres
    console.log(listaDeGenerosSeries)
    let generosSeries = document.querySelector('#genresseries')
    let generosdeSeries = ''

    for (let i = 0; i < 4; i++) {
        generosdeSeries += `<li class="buenaLista"><a href="./detail-genres.html?id_genero_series=${listaDeGenerosSeries[i].id}" class="DetalledelGenero">${listaDeGenerosSeries[i].name}</a></li>`
    
    }

    generosSeries.innerHTML = generosdeSeries


}).catch(function (error) {
    console.log('el error es' + error);
})