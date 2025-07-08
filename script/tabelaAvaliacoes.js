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
let dadosAvaliacao = JSON.parse(localStorage.getItem('dadosAvaliacao')) || [];

function addAvaliacaoTabela() {
    const tbody = document.querySelector("#avaliacao tbody");
    dadosAvaliacao.forEach( (avaliacaoUsuario) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${avaliacaoUsuario.nome}</td>
            <td>${avaliacaoUsuario.email}</td>
            <td>${avaliacaoUsuario.coment}</td>
        `;
        tbody.appendChild(linha);
    });
}
window.onload = addAvaliacaoTabela;