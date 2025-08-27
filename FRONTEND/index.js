

fetch("http://localhost:3000/usuarios").then(async res=>{
    if(!res.ok){
        throw new Error("Erro na requisição");
    }
    return res.json();
}).then(usuarios=>{
    

    const listaUsurarios = document.getElementById("lista-usuarios")
    usuarios.forEach(usuarios => {
    console.log(usuarios.nome);
    listaUsurarios.innerHTML += <li class="list-group-item">${usuarios.nome}</li>
    });
})
.catch(err=>{
    console.error(err);
})
