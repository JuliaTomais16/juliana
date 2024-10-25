function criaCartao (categoria, pergunta, resposta){
let container=documet.getElementById('container');
let cartao= document.createElement('article');
cartao.className='cartao';
cartao.innerHTML=
<div class="pergunta-cartao">
<h3>${categoria}</h3>
    <div class="pergunta-cartao">
         <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
            <p>${resposta}</p>
    </div>
</div>

    let respostaEstaVisivel = false;

    function viraCartao(){
       respostaEstaVisivel = !respostaEstaVisivel;
       cartao.classList.toggle('active', respostaEstaVisivel);
    }

    Cartao.addEventlistener('click', viraCartao);

container.appendchild(cartao);
}