
alert("Bem vindo a calculadora de partidas rankeadas")

function calculaNivel(vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas;
    return saldoDeVitorias
}

    if (vitorias < 10) {
    nivelDoHeroi = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivelDoHeroi = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivelDoHeroi = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivelDoHeroi = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivelDoHeroi = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivelDoHeroi = "Lendário";
} else {
    nivelDoHeroi = "Imortal";
}

let continuar = true;
while (continuar) {

  let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
  let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));
  let saldoDeVitorias = calculaNivel(vitorias, derrotas);
  console.log(`O Herói tem saldo de ${saldoDeVitorias + " vitorias"} e está no nível ${nivelDoHeroi}`);
  alert(`O Herói tem saldo de ${saldoDeVitorias + " vitorias"} e está no nível ${nivelDoHeroi}`)

  continuar = confirm("Deseja calcular o Rankeamento novamente?");
}