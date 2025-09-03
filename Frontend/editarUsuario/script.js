const params = new URLSearchParams(window.location.search);

const usuarioId = params.get("id");
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let senha = document.getElementById("senha");


document.addEventListener("DOMContentLoaded", () => {
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let senha = document.getElementById("senha");

    fetch('https://localhost:3000/usuarios/${usuarioId}')

    .then(response => response.json())
    .then(data => {
        console.log(data);
        nome.value = data.nome;
        idade.value = data.idade;
        senha.value = data.senha;

})

    .catch(error => console.log(error));


})

function atualizarUsuario(event){
    event.preventDefault();

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const senha = document.getElementById("senha");

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
    
        .then(data => {
            console.log(data);
            alert(`Usuario ${usuarioID} foi atualizado com sucesso`);
            window.location.href = "../index.html";
        })
    
        .catch(error => console.log(error));

}