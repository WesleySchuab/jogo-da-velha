var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
//Variaveis para controlar placar
let vitoriasA = 0,
    vitoriasB = 0;
let partidas = 0;
let pessoaA = "Jogador 1",
    pessoaB = "Jogador 2";
var jogada;
const quadrados = document.querySelectorAll('.quadrado');
mudarJogador('X');

function salvarNome() {
    var nome = document.getElementById("jogador1").value;
    var nome2 = document.getElementById("jogador2").value;
    document.getElementById("NomeJogador1").textContent = nome ;
    document.getElementById("NomeJogador2").textContent = nome2 ;
    var nome = document.getElementById("jogador1").value='';
    var nome = document.getElementById("jogador2").value='';
    
    
}
function empate(){
    console.log("entrou na função empate");
    let empate = 0 ;
    var quadradosVazios = [];
    for (let contador = 0; contador < 9; contador++) {
        if (quadrados[contador].innerHTML === '-') {
            empate++;
        }
    }
    console.log("valor da var emapte: "+empate);
    if(empate==0){
        alert("emapte");
        
        var quadrado1 = document.getElementById(1);
        quadrados[0].style.background = '#0f0';
        quadrados[7].style.background = '#0f0';
        quadrados[2].style.background = '#0f0';
       // mudarCorQuadrado(quadrado1, quadrado8, quadrado3);
        return true;
    }else
    return false;
}
function escolherQuadrado(id) {    
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
    empate();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {

        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        marcarPlacar(quadrado1);

        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
         mudarVencedor(quadrado4);
         marcarPlacar(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
         mudarVencedor(quadrado7);
         marcarPlacar(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        marcarPlacar(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
         mudarVencedor(quadrado2);
         marcarPlacar(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        marcarPlacar(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
       mudarVencedor(quadrado3);
       marcarPlacar(quadrado3);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);        
        mudarVencedor(quadrado3);
        marcarPlacar(quadrado3);
    }
}
function marcarPlacar(quadrado)
{
    if (quadrado.innerText === 'X'){
        document.getElementById("jogadorA").innerHTML = "Vitórias: " + ++vitoriasA;
        console.log("aqui");
    }else if(quadrado.innerText === 'O'){
        document.getElementById("jogadorB").innerHTML = "Vitórias: " + ++vitoriasB;
        console.log("aqui");
    }
}
function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);

        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}