const btnSair = document.getElementById('btn');

let usuarioLogado = sessionStorage.getItem('usuarioLogado');

if(!usuarioLogado){
    window.location.href = window.location.href = "../html/index.html";
}

btnFechar = function(){

    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('nomeUsuario');

    window.location.href = "../html/index.html";
}

const formularioAvaliacao = document.getElementById('formAvaliacao');
const campos = document.querySelectorAll('.validar');
const span = document.querySelectorAll('.span');
const emailValidar = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function erro(index){
    campos[index].style.border = '2px solid #FF0000';
    span[index].style.display = 'block';
}

function tiraErro(index){
    campos[index].style.border = '';
    span[index].style.display = 'none';
}

function validaNome(){
    if(campos[1].value.length < 4){
        erro(1); 
    }else{
        tiraErro(1);
        return true;
    }
}

function validaEmail(){
    if(!emailValidar.test(campos[0].value)){
        erro(0);
    }else{
        tiraErro(0);
        return true;
    }
}


function avaliacao(){
    formularioAvaliacao.addEventListener('submit', e=>{
        e.preventDefault();
        let nomeValidado = validaNome();
        let emailValidado = validaEmail();

        if(nomeValidado && emailValidado){
            let dadosAvaliacao = JSON.parse(localStorage.getItem('dadosAvaliacao')) || [];

 
            e.preventDefault();

            let nome = document.getElementById('nomeAvaliacao');
            let email = document.getElementById('emailAvaliacao');
            let coment = document.getElementById('coment');

            const avaliacaoUsuario = {
                nome: nome.value,
                email: email.value,
                coment:  coment.value
            };
            
            dadosAvaliacao.push(avaliacaoUsuario);
            localStorage.setItem('dadosAvaliacao', JSON.stringify(dadosAvaliacao));
            window.location.href = "../html/logado.html";
        }
    })
}