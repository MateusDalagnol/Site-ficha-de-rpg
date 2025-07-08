let usuarioLogado = sessionStorage.getItem('usuarioLogado');
let usuarioLogadoAdm = sessionStorage.getItem('usuarioLogadoAdm');

if(!usuarioLogadoAdm){
    window.location.href = "../html/index.html";
}

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

let nomeUsuarioAdm = sessionStorage.getItem("nomeUsuarioAdm");
const nomeLogado = document.getElementById("nomeLogado");

nomeLogado.innerText = "Bem-vindo: " + nomeUsuarioAdm.valueOf();





