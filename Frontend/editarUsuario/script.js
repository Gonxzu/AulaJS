const params = new URLSearchParams(window.location.search);

const usuarioId = params.get("id");
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let senha = document.getElementById("senha");


document.addEventListener("DOMContentLoaded", () => {
    fetch('https://localhost:3000/usuarios/${usuarioId}')

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.log(error));


})

function atualizarUsuario(event){
    event.preven

    fetch('https://localhost:3000/usuarios/${usuarioId}', {
    
        method: 'PUT',
    
        headers: {
    
            'Content-Type': 'application/json'
    
        },
    
        body: JSON.stringify({
            nome: nome.value,
            idade: idade.value,
            senha: senha.value
        })
    
    })
    
        .then(response => response.json())
    
        .then(data => console.log(data))
    
        .catch(error => console.log(error));

}