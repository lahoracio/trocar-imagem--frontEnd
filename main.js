"use strict"

//const criando variavel
// o . significa para acessar tal elemendo e () ao como chama 
const botaoTrocarImagem = document.getElementById('trocar-imagem')

//function manda o que fazer 
function trocarImagem (){
    const imagem = document.getElementById('imagem') . value
    document.documentElement.style.setProperty ('--imagem-fundo', imagem )

}
botaoTrocarImagem.addEventListener('click', trocarImagem)