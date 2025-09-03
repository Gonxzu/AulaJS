fetch("http://localhost:3000/usuarios").then(res=>{
    if(!res.ok){
        throw new Error("Erro ao buscar usuarios");
    }
    return res.json();
}).then (usuarios=>{
    const listaUsuarios = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        console.log(usuario.nome);
        listaUsuarios.innerHTML += `
        <li class="list-group-item">
            <div class="d-flex justify-content-between">
                <h6>nome: ${usuario.nome} - idade:  ${usuario.idade}</h6>
                <div>
                <a href="editarUsuario/index.html?id=${usuario.id}" class="btn btn-primary">Atualizar</a>
                    <button type="button" class="btn btn-danger" onclick="deletarUsuario(${usuario.id})">Deletar</button>
                <div>
            </div>     
            
        </li>`;
    });
})
.catch(err=>{
    console.error(err);
})

function deletarUsuario(userId) {
    let confirmar = confirm("Você deseja excluir o usuário " + userId + "?");
    if (confirmar) {
        fetch(`http://localhost:3000/usuarios/${userId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert("Usuário " + userId + " excluído com sucesso!");
                window.location.reload(); // recarrega a lista
                return;
            }
            alert("Algo deu errado!");
        })
        .catch(error => console.error("Erro ao deletar:", error));
    }
}


const cep = document.getElementById("cep").value
const url = `https://viacep.com.br/ws/${cep}/json/`;

fetch(url)
    .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar CEP");
        return res.json();
    })
    .catch(err => console.error("Erro:", err));
