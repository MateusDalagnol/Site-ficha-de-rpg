let usuarioLogado = sessionStorage.getItem('usuarioLogado');
let usuarioLogadoAdm = sessionStorage.getItem('usuarioLogadoAdm');

let nomeUsuarioAdm = sessionStorage.getItem("nomeUsuarioAdm");
const nomeLogado = document.getElementById("nomeLogado");

nomeLogado.innerText = "Bem-vindo: " + nomeUsuarioAdm.valueOf();

const paginaPrincipal = function(){
    window.location.href = "../html/indexAdm.html"
}

const btn = function(){
    sessionStorage.removeItem('usuarioLogadoAdm');
    sessionStorage.removeItem('nomeUsuarioAdm');

    if(!usuarioLogado){
        window.location.href = "../html/index.html";
    }else{
        window.location.href = "../html/logado.html";
    }
}

let dadosCadastroUsuario = JSON.parse(localStorage.getItem('dadosCadastroUsuario')) || [];

function addCadatroTabela() {
    const tbody = document.querySelector("#usuarios tbody");
    dadosCadastroUsuario.forEach( (usuarioCadastro, chave) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuarioCadastro.nome}</td>
            <td>${usuarioCadastro.email}</td>
            <td>${usuarioCadastro.senha}</td>
            <td>
                <a href="#" onclick="removerUsuarioCadastro(${chave})">Excluir</a>
            </td>
        `;
        tbody.appendChild(linha);
    });
}

function removerUsuarioCadastro(id) {
    dadosCadastroUsuario.splice(id, 1);
    localStorage.setItem('dadosCadastroUsuario', JSON.stringify(dadosCadastroUsuario));
    window.location.reload();
}
window.onload = addCadatroTabela;