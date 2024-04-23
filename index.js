//Calculadora de partidas Rankeadas

function calcularVitorias(win, defeat) {
    return (win - defeat);
}
 function ranking(saldoVitorias) {
let nivel ="";
if(saldoVitorias <= 10) {
    nivel = "Ferro";
} else if(saldoVitorias >= 11 && saldoVitorias <= 20  ) {
    nivel = "Branze";
} else if(saldoVitorias >= 21 && saldoVitorias <= 50  ) {
    nivel = "Prata";
} else if(saldoVitorias >= 51 && saldoVitorias <= 80  ) {
    nivel = "Ouro";
} else if(saldoVitorias >= 81 && saldoVitorias <= 90  ) {
    nivel = "Diamente";
} else if(saldoVitorias >= 91 && saldoVitorias <= 100  ) {
    nivel = "Lendário";
} else if( saldoVitorias > 101 ) {
    nivel = "Imortal";
}
    return nivel;
}



let saldoVitorias = calcularVitorias(25, 12);
let nivel =  ranking(saldoVitorias);

console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);

