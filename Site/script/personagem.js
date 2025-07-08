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

let dadosPersonagens = JSON.parse(localStorage.getItem('dadosPersonagens')) || [];

function addPersonagensTabela() {
    const tbody = document.querySelector("#personagens tbody");
    dadosPersonagens.forEach( (personagensUsuario, chave) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td><a onclick="mostraPersonagemCompleto(${chave})" style="cursor:pointer;">Nome: ${personagensUsuario.nome}</a></td>
            <td>Level: ${personagensUsuario.level}</td>
            <td>Classe: ${personagensUsuario.classe}</td>
            <td>
                <a href="#" onclick="alteraDados(${chave})">Alterar</a>
                <a href="#" onclick="removerpersonagemUsuario(${chave})">Excluir</a>
            </td>
        `;
        tbody.appendChild(linha);
    });
}

const alterarModal = document.getElementById('alteraPersonagem');

function alteraDados(id){

    const nome = document.getElementById('nome');
    const level = document.getElementById('level');
    const classe = document.getElementById('classe');
    const raca = document.getElementById('raca'); 
    const car = document.getElementById('car');
    const sab = document.getElementById('sab');
    const int = document.getElementById('int');
    const des = document.getElementById('des');
    const forc = document.getElementById('for');
    const consti = document.getElementById('const');
    const vidaMax = document.getElementById('vidaMax');
    const inici = document.getElementById('inici');
    const classArmor = document.getElementById('classArmor');
    const caract = document.getElementById('caract');

    let listaPersonagens = JSON.parse(localStorage.getItem('dadosPersonagens')) || [];

    let personagem = listaPersonagens[id];
    nome.value = personagem.nome;
    level.value = personagem.level;
    classe.value = personagem.classe;
    raca.value = personagem.raca;
    car.value = personagem.car;
    sab.value = personagem.sab;
    int.value = personagem.int;
    des.value = personagem.des;
    forc.value = personagem.forc;
    consti.value = personagem.consti;
    vidaMax.value = personagem.vidaMax;
    inici.value = personagem.inici;
    classArmor.value = personagem.classArmor;
    caract.value = personagem.caract;

    alterarModal.showModal();
    
    document.getElementById("formPersonagemalteracao").addEventListener('submit', e =>{
        e.preventDefault();

        const personagensalteracao = {
            nome: nome.value,
            level: level.value,
            classe:  classe.value,
            raca: raca.value,
            car: car.value,
            sab: sab.value,
            int: int.value,
            des: des.value,
            forc: forc.value,
            consti: consti.value,
            vidaMax: vidaMax.value,
            inici: inici.value,
            classArmor: classArmor.value,
            caract: caract.value
        };
        
        dadosPersonagens.splice(id, 1);
        dadosPersonagens.push(personagensalteracao);
        localStorage.setItem('dadosPersonagens', JSON.stringify(dadosPersonagens));
        window.location.href = "../html/indexAdm.html";
    });
}

function removerpersonagemUsuario(id) {
    dadosPersonagens.splice(id, 1);
    localStorage.setItem('dadosPersonagens', JSON.stringify(dadosPersonagens));
    window.location.reload();
}
window.onload = addPersonagensTabela;

function mostraPersonagemCompleto(id){

    let dados = dadosPersonagens[id];

    const dialog = document.querySelector('#personagemCompleto');
    const button = document.querySelector('#personagemCompleto button');
    const ul = document.querySelector('lista');
    lista.innerHTML = `
        <li>Name: ${dados.nome}</li>
        <li>Level:${dados.level}</li>
        <li>Classe:${dados.classe}</li>
        <li>Raça:${dados.raca}</li>
        <li>Carisma:${dados.car}</li>
        <li>Sabedoria:${dados.sab}</li>
        <li>Inteligencia:${dados.int}</li>
        <li>Destreza:${dados.des}</li>
        <li>Força:${dados.forc}</li>
        <li>Constituição:${dados.consti}</li>
        <li>Vida Máxima:${dados.vidaMax}</li>
        <li>Iniciativa:${dados.inici}</li>
        <li>Classe de Amadura (CA):${dados.classArmor}</li>
        <li>Caracteristicas:${dados.caract}</li>
    `;
    dialog.showModal();
}

function fechar(){
    lista.forEach(filho, ()=>{
        lista.removeChild(filho);
    })
    dialog.close();
}