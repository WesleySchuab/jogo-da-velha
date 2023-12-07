let jogadorAtual = "X";
let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Função para verificar se um jogador venceu
function verificarVitoria() {
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === tabuleiro[i][1] === tabuleiro[i][2] !== "") {
      return tabuleiro[i][0];
    }
    if (tabuleiro[0][i] === tabuleiro[1][i] === tabuleiro[2][i] !== "") {
      return tabuleiro[0][i];
    }
  }
  if (tabuleiro[0][0] === tabuleiro[1][1] === tabuleiro[2][2] !== "") {
    return tabuleiro[0][0];
  }
  if (tabuleiro[0][2] === tabuleiro[1][1] === tabuleiro[2][0] !== "") {
    return tabuleiro[0][2];
  }
  return "";
}

// Função para atualizar o tabuleiro
function atualizarTabuleiro(linha, coluna, marca) {
  tabuleiro[linha][coluna] = marca;
}

// Função para verificar se o jogo acabou
function verificarFimDeJogo() {
  let vencedor = verificarVitoria();
  if (vencedor !== "") {
    return vencedor;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] === "") {
        return "";
      }
    }
  }
  return "Empate";
}

// Função para iniciar o jogo
function iniciarJogo() {
  jogadorAtual = "X";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = "";
    }
  }
}

// Função para fazer uma jogada
function fazerJogada(linha, coluna) {
  atualizarTabuleiro(linha, coluna, jogadorAtual);
  jogadorAtual = (jogadorAtual === "X") 
}