const bntName = document.getElementById('bntName');
const bntLevel = document.getElementById('bntLevel');
const bntClasse = document.getElementById('bntClasse');
const bntRaca = document.getElementById('bntRaca');
const bntCar = document.getElementById('bntCar');
const bntSab = document.getElementById('bntSab');
const bntInt = document.getElementById('bntInt');
const bntDes = document.getElementById('bntDes');
const bntFor = document.getElementById('bntFor');
const bntConst = document.getElementById('bntConst');
const bntVidaMax = document.getElementById('bntVidaMax');
const bntInici = document.getElementById('bntInici');
const bntClassArmor = document.getElementById('bntClassArmor');
const bntCaract = document.getElementById('bntCaract');
const pDescricao = document.getElementById('pDescricao');

bntName.addEventListener('click', e =>{
    pDescricao.innerText = "Nome: É como seu personagem será chamado durante toda a sua campanha.";
});

bntLevel.addEventListener('click', e =>{
    pDescricao.innerText = `Nivel: Nivel atual do seu personagem aseado na experiençia obtida ao longo da campanha, 
                            que possibilita novas magias, ações, Cantrips entre outras coisas.`;
});

bntClasse.addEventListener('click', e =>{
pDescricao.innerText = `Classe: É a definição principal do seu personagem como: 
                        bruxos, magos, paladinos, guerreiros, etc.`;
});

bntRaca.addEventListener('click', e =>{
    pDescricao.innerText = `Raça: é a sua linhagem ansestral, ela adiciona 
                            tanto magias até novos encontro nas camapanhas cada raça é unica e possiu sub-classe que
                            também possuem sua diferencição como: 
                            A classe Anões possuem as sub-classe anões da colina e anões da montanha.`;
});

bntCar.addEventListener('click', e =>{
    pDescricao.innerText = `Carisma: O Carisma (Car) demonstra a força da personalidade, da persuasão, da liderança e 
                            não necessariamente da atração física do personagem, este último é aberto a intepretação do
                            mestre e seus jogadores. Atribuito usado principalmente por Bruxos e Paladinos.`;
});

bntSab.addEventListener('click', e =>{
    pDescricao.innerText = `A Sabedoria (Sab) representa o bom senso, a percepção, a disciplina e a empatia do personagem.
                            O valor de Sabedoria é utilizado para perceber detalhes, pressentir ameaças e analisar as 
                            outras pessoas. Atributo utilizado por clerigos e alguns magos.`;
});

bntInt.addEventListener('click', e =>{
    pDescricao.innerText = `A Inteligência (Int) define a velocidade de aprendizado e raciocínio do personagem. 
                            Atributo utilizdo por Magos.`;
});

bntDes.addEventListener('click', e =>{
    pDescricao.innerText = `A Destreza (Des) representa a coordenação, a pontaria, 
                            a agilidade, os reflexos e o equilíbrio do personagem.
                            Atributo utilizado por ladinos, guerreiros e atiradores.`;
});

bntFor.addEventListener('click', e =>{
    pDescricao.innerText = `A Força (For) indica a potência física do seu personagem. 
                            É importante para a maioria dos personagens que se engaja diretamente em combate.
                            Atributo utilizado por qualquer classe Corpo a Corpo.`;
});

bntConst.addEventListener('click', e =>{
    pDescricao.innerText = `Constituição (Con) representa a saúde, a resistência e a força vital de um personagem. 
                            Como a Constituição afeta pontos de vida e surtos de cura , ela é um benefício para todos 
                            os personagens jogadores.
                            Atributo utilizado por qualquer classe tank.`;
});

bntVidaMax.addEventListener('click', e =>{
    pDescricao.innerText = `Vida Maxima: Quantidade maxima te vida que um personagem pode ter até o momento, é possivel
                            ser aumentada com level, poção, certas classe e raças possuem vida maximas diferentes.`;
});

bntInici.addEventListener('click', e =>{
    pDescricao.innerText = `Iniciativa: É um valor referente ao seu poder de iniciativa, ao começo de cada batalha é 
                                rolado um dado para cada personagem para decidir qual sera a ordem de ataque, consequentemente
                                quem tiver maior iniciativa ficará mais a frente`;
});

bntClassArmor.addEventListener('click', e =>{
    pDescricao.innerText = `Classe de Armadura: Todo Ataque realizado é feito a partir de uma rolagem de dados que é a 
                            chance de acerto, a classe de armadura é um valor que ao ser realizado um ataque, será feito 
                            (Valor Obtido pela rolagem do ataque > classe de armadura) caso seja verdadeiro o ataque sera 
                            realizado caso contrario o ataque é evitado`;
});

bntCaract.addEventListener('click', e =>{
    pDescricao.innerText = "Carcteristicas: Breve descrição sobre seu personagem como: olhos azuis, chifres, pelagem branca, ect.";
});

const menu = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');

menu.forEach(a => {
    a.addEventListener('click', e =>{
        e.preventDefault();
        const href = a.getAttribute('href');
        const alvo = document.querySelector(href);

        if(alvo){
            window.scroll({
                top: alvo.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 400){
        menu.forEach(a =>{
            a.classList.add('diminuiMenu');
        });
    }else {
        menu.forEach( a =>{
            a.classList.remove('diminuiMenu');
        })
    }
});

const btnLoginAdm = document.getElementById('btnAdmin');
const btnFecharAdm = document.getElementById('btnFecharAdm');
const loginAdm = document.getElementById("loginModalAdm");
const formLoginAdm = document.querySelector("#loginModalAdm form");

btnLoginAdm.onclick = function (){
    loginAdm.showModal();
}

btnFecharAdm.onclick = function (){
    loginAdm.close();
}

let dadosUsuariosAdm = [
    { nome: "Mateus Gostosão", email: "mateus@email.com", senha: "1234" },
    { nome: "Pedro Pe Torto", email: "pedro@email.com", senha: "1234" },
    { nome: "dollynho", email: "dolly@email.com", senha: "1234" },
];

formLoginAdm.addEventListener('submit', e =>{
    e.preventDefault();

    let msgErro = document.querySelector('#loginModalAdm .erro');
    if(msgErro) loginAdm.removeChild(msgErro);

    let email = document.getElementById('emailAdm').value;
    let senha = document.getElementById('senhaAdm').value;

    dadosUsuariosAdm.forEach(usuario =>{

        if(email == usuario.email && senha == usuario.senha){
            sessionStorage.setItem('usuarioLogadoAdm', true);
            sessionStorage.setItem('nomeUsuarioAdm', usuario.nome);

            window.location.href = "../html/indexAdm.html";
        }
    });

    let usuarioLogadoAdm = sessionStorage.getItem('usuarioLogadoAdm');

    if(!usuarioLogadoAdm){
        let erro = document.createElement('p');
        erro.classList.add("erro");
        erro.innerText = "Login ou senha inválidos!";
        loginAdm.insertBefore(erro, loginAdm.firstChild);
        document.querySelector("#loginModalAdm form").reset();
    }
});