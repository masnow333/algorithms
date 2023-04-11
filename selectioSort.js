const { performance } = require('perf_hooks');

const VALUES_TO_SORT = [
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987, // Números decimales adicionales
    9.9, 3.1, 7.98, 25.5 // Números decimales repetidos
  ];

const selectionSort = (valuesToSort) => {
    const lengthToSort = valuesToSort.length;
    const sortedValues = [];

    // Iniciar el contador de rendimiento
    const performanceStart = performance.now();

    for (let i = 0; i < lengthToSort; i++) {

        let minimunValue = valuesToSort[i]
        let minimunIndex = i

        for (let k = i + 1; k < valuesToSort.length; k++) {

            if(minimunValue > valuesToSort[k]) {

                minimunValue = valuesToSort[k];
                minimunIndex = k;

            }

        }
        if(minimunIndex !== i) [valuesToSort[i], valuesToSort[minimunIndex]] = [valuesToSort[minimunIndex], valuesToSort[i]]

        sortedValues.push(minimunValue)
    }

    // Finalizar el contador de rendimiento
    const performanceEnd = performance.now();
    const performanceDuration = performanceEnd - performanceStart;

    console.log(`Tiempo de ejecución: ${performanceDuration} milisegundos`);
    
    return sortedValues
}

console.log(selectionSort(VALUES_TO_SORT))