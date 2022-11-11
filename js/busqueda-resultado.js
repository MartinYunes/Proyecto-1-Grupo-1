let form = document.querySelector('#form')
let input = document.querySelector('#busquedaPalabra')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (input.value == "") {
        alert('No puedes enviar un form vacio')
    } else if(input.value.length < 3){
        alert('Debes escribir mas de 3 caracteres')
    } else {
        this.submit()
    }

})
