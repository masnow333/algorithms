const { performance } = require('perf_hooks');

const selectionSort = (valuesToSort) => {

    // Iniciar el contador de rendimiento
    const performanceStart = performance.now();

    const lengthToSort = valuesToSort.length;
    const sortedValues = [];

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

    console.log(`Tiempo de ejecución selectionSort: ${performanceDuration} milisegundos`);
    
    return sortedValues
}

module.exports = selectionSort;