let jogador = "Michel";
let vitorias = 91;
let derrotas = 15;
let saldoVitorias = vitorias - derrotas
let nivel = contadorDeVitorias(vitorias);

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);

function contadorDeVitorias(vitorias) {
  if (vitorias >= 0 && vitorias <= 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else if (vitorias >= 101) {
    return "Imortal";
  } else {
    return "Sem vitorias";
  }
}
