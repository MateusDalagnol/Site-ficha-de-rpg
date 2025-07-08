function cadastroPersonagem(){
    let dadosPersonagens = JSON.parse(localStorage.getItem('dadosPersonagens')) || [];

    document.getElementById("formCadastroPersonagem").addEventListener('submit', e =>{
        e.preventDefault();

        let nome = document.getElementById('nome');
        let level = document.getElementById('level');
        let classe = document.getElementById('classe');
        let raca = document.getElementById('raca');
        let car = document.getElementById('car');
        let sab = document.getElementById('sab');
        let int = document.getElementById('int');
        let des = document.getElementById('des');
        let forc = document.getElementById('for');
        let consti = document.getElementById('const');
        let vidaMax = document.getElementById('vidaMax');
        let inici = document.getElementById('inici');
        let classArmor = document.getElementById('classArmor');
        let caract = document.getElementById('caract');

        const personagensUsuario = {
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
        
        dadosPersonagens.push(personagensUsuario);
        localStorage.setItem('dadosPersonagens', JSON.stringify(dadosPersonagens));
        window.location.href = "../html/indexAdm.html";
    });
}