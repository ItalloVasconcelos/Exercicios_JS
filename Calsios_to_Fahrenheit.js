function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C°')
    const fahrenheitExists = degree.toUpperCase().includes('F°')

    //Fluxo de error.
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error ("Grau não identificado")
    }
    //Fluxo ideial F° to C°
    let updatedDegree = degree.toUpperCase().replace("F°", "");
    let formula = (fahrenheit) => (fahrenheit - 32) *  5 / 9
    let degreeSign = 'C°'

    //Fluxo de C° to F°
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C°", ""));
        formula = (celsius) => (celsius * 9/5 + 32)
        degreeSign = 'F°'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C°'))
    console.log(transformDegree('50F°'))
    console.log(transformDegree('10Z°'))
} catch(error) {
    console.log(error.message)
}