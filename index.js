let nome = "Michel";
let xp = 6560;

let nivel = contadorDeNivel(xp);

console.log("O Herói de nome " + nome + " está no nível de " + nivel);

function contadorDeNivel(xp) {
  if (xp >= 0 && xp <= 1001) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 5000) {
    return "Prata";
  } else if (xp <= 7000) {
    return "Ouro";
  } else if (xp <= 8000) {
    return "Platina";
  } else if (xp <= 9000) {
    return "Ascendente";
  } else if (xp <= 10000) {
    return "Imortal";
  } else if (xp >= 10001) {
    return "Radiante";
  } else {
    return "Sem nivel";
  }
}
