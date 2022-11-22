function validarform(){
    
    let validaCod = document.forms['cadastrar']['codigo'].value;
    let validaDat = document.forms['cadastrar']['data'].value;
    let validajog = document.forms['cadastrar']['jogo'].value;
    let validaprod = document.forms['cadastrar']['produtor'].value
    let validaemp = document.forms['cadastrar']['empresa'].value
    let validaper = document.forms['cadastrar']['personagens'].value
    let validanot = document.forms['cadastrar']['nota'].value



    if (validaCod == '') {
        alert('O código deve ser preenchido');
        return false;
    }

    if (validadat == '') {
        alert('A data deve ser preenchida');
        return false;
    }

    if (validajog == '') {
        alert('O nome do jogo deve ser preenchido');
        return false;
    }

    if (validaprod == '') {
        alert('O produtor(a) deve ser preenchido');
        return false;
    }

    if (validaemp == '') {
        alert('A empresa deve ser preenchida');
        return false;
    }

    if (validaper == '') {
        alert('O nome do personagem(a) deve ser preenchido');
        return false;
    }

    if (validanot == '') {
        alert('A nota deve ser preenchida');
        return false;
    }

}

function insere(){
    let cod= document.forms['cadastrar']['codigo'].value;
    let Dat= document.forms['cadastrar']['data'].value;
    let jog= document.forms['cadastrar']['jogo'].value;
    let prod= document.forms['cadastrar']['produtor'].value;
    let emp= document.forms['cadastrar']['empresa'].value;
    let per= document.forms['cadastrar']['personagem'].value;
    let not= document.forms['cadastrar']['nota'].value;

    let inserir =  window.document.getElementById('inserirTabela');
    inserir.innerHTML =  `<th scope='row'>${cod}</th>`;
    inserir.innerHTML += `<td>${jog}</td>`;
    inserir.innerHTML += `<td>${prod}</td>`;
    inserir.innerHTML += `<td>${emp}</td>`;
    inserir.innerHTML += `<td>${Dat}</td>`;
    inserir.innerHTML += `<td>${per}</td>`;
    inserir.innerHTML += `<td>${not}</td>`;

}
