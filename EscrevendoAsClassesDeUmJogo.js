let jogador = "Michel";
let idade = 23;
let ocupacao = "guerreiro";
let tipoAtaque = "guerreiro";
ocupacao = tipo
//classe para definir os tipos de arma ou ataque de personagens disponiveis
class TipoClasse {
    constructor() {
        this.ataqueMago = "magia";
        this.ataqueGuerreiro = "espada";
        this.ataqueMonge = "artes marciais";
        this.ataqueNinja = "shuriken";
    }
}
//função para definir o tipo de personagem para o algoritmo retornar o tipo de ataque de acordo com a ocapacao do personagem
let tipoClasse = new TipoClasse();
if (tipoAtaque === "mago") {
    tipoAtaque = tipoClasse.ataqueMago;
} else if (tipoAtaque === "guerreiro") {
    tipoAtaque = tipoClasse.ataqueGuerreiro;
} else if (tipoAtaque === "monge") {
    tipoAtaque = tipoClasse.ataqueMonge;
} else if (tipoAtaque === "ninja") {
    tipoAtaque = tipoClasse.ataqueNinja;
}

console.log("O " + ocupacao + " atacou usando " + tipoAtaque);
