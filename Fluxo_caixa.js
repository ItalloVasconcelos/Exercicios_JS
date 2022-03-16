// Fluxo de caixa

const caixa = {
    receitas: [1230,506,710],
    despesas: [1000,236,305]
}


function sum(array) {
    let total = 0

    for ( let value of array) {
        total += value
    }
    return total
}

function fluxo() {
    const calculoReceitas = sum(caixa.receitas)
    const calculoDespesas = sum(caixa.despesas)

    const total = calculoReceitas - calculoDespesas
    const itsOk = total >=0

    let balanceText = "Negativo"

    if(itsOk) {
        balanceText = "Positivo"        
    } 

    console.log(`Seu saldo é ${balanceText}: R$ ${total}`)
}
    fluxo()