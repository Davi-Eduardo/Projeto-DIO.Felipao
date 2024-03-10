let saldoDeVitorias = calcularVitorias(70, 60) - calcularDerrotas(60, 50)
let nivelDoHeroi = ""

function calcularVitorias(win1, win2){
    let resultadoVitorias = win1 + win2
    return resultadoVitorias
}

function calcularDerrotas(defeat1, defeat2){
    let resultadoDerrotas = defeat1 + defeat2
    return resultadoDerrotas
}

if(saldoDeVitorias < 10){
    nivelDoHeroi = "Ferro"
}
else if(saldoDeVitorias <= 20){
    nivelDoHeroi = "Bronze"
}
else if(saldoDeVitorias <= 50){
    nivelDoHeroi = "Prata"
}
else if(saldoDeVitorias <= 80){
    nivelDoHeroi = "Ouro"
}
else if(saldoDeVitorias <= 90){
    nivelDoHeroi = "Diamante"
}
else if(saldoDeVitorias <= 100){
    nivelDoHeroi = "Lendário"
}
else{nivelDoHeroi = "Imortal"}

console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias e está no nível de " + nivelDoHeroi)