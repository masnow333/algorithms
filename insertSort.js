const { performance } = require('perf_hooks');

const insertSort = (valuesToSort) => {

    // Iniciar el contador de rendimiento
    const performanceStart = performance.now();

    for (let i = 1; i < valuesToSort.length; i++) {
        let j;
		let currentVale = valuesToSort[i];
        for (j = i-1; j >= 0 && valuesToSort[j] > currentVale; j--) {
            valuesToSort[j+1] = valuesToSort[j];
        }

        valuesToSort[j+1] = currentVale;

    }

    // Finalizar el contador de rendimiento
    const performanceEnd = performance.now();
    const performanceDuration = performanceEnd - performanceStart;

    console.log(`Tiempo de ejecución insertSort: ${performanceDuration} milisegundos`);

    return valuesToSort;
}

module.exports = insertSort;
