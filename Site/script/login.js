const btnLogin = document.getElementById('btnLogin');
const btnFechar = document.getElementById('btnFechar');
const login = document.getElementById("loginModal");
const formLogin = document.querySelector("#loginModal form");

btnLogin.onclick = function (){
    login.showModal();
}
,
btnFechar.onclick = function (){
    login.close();
}


const modalCadastro = document.getElementById('modalCadastro');

function abreCadastro(){
    login.close();
    modalCadastro.showModal();
}

function fechaCadastro(){
    modalCadastro.close();
}

const formularioCadastro = document.getElementById('formCadastro');
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
    if(campos[0].value.length < 4){
        erro(0); 
    }else{
        tiraErro(0);
        return true;
    }
}

function validaEmail(){
    if(!emailValidar.test(campos[1].value)){
        erro(1);
    }else{
        tiraErro(1);
        return true;
    }
}

function validaSenha(){
    if(campos[2].value.length < 6){
        erro(2);
    }else{
        tiraErro(2 );
        return true;
    }
}



function cadastro(){

    formularioCadastro.addEventListener('submit', e=>{
        e.preventDefault();
        let nomeValidado = validaNome();
        let emailValidado = validaEmail();
        let senhaValidada = validaSenha();

        if(nomeValidado && emailValidado && senhaValidada){
            let dadosCadastroUsuario = JSON.parse(localStorage.getItem('dadosCadastroUsuario')) || [];
            
                let nome = document.getElementById('nomeCadastro');
                let email = document.getElementById('emailCadastro');
                let senha = document.getElementById('senhaCadastro');
            
                const usuarioCadastro = {
                    nome: nome.value,
                    email: email.value,
                    senha:  senha.value
                };
                    
                dadosCadastroUsuario.push(usuarioCadastro);
                localStorage.setItem('dadosCadastroUsuario', JSON.stringify(dadosCadastroUsuario));
                window.location.href = "../html/index.html";
        }else{
            return;
        }
    })
}

formLogin.addEventListener('submit', e =>{
    e.preventDefault();

    let msgErro = document.querySelector('#loginModal .erro');
    if(msgErro) login.removeChild(msgErro);

    let dadosUsuarios = JSON.parse(localStorage.getItem('dadosCadastroUsuario')) || [];

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    dadosUsuarios.forEach(usuario =>{

        if(email == usuario.email && senha == usuario.senha){
            sessionStorage.setItem('usuarioLogado', true);
            sessionStorage.setItem('nomeUsuario', usuario.nome);

            window.location.href = "../html/logado.html";
        }
    });

    let usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        let erro = document.createElement('p');
        erro.classList.add("erro");
        erro.innerText = "Login ou senha inválidos!";
        login.insertBefore(erro, login.firstChild);
        document.querySelector("#loginModal form").reset();
    }

});