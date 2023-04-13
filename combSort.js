const { performance } = require('perf_hooks');

const combSort = (valuesToSort) => {

    // Iniciar el contador de rendimiento
    const performanceStart = performance.now();

    let round = Math.round( valuesToSort.length / 1.3);

    round = round === 0 ? 1 : round;
    
    while (round > 0) {

        let currentValue = valuesToSort[0]

        for (let j = round; j < valuesToSort.length && round > 0; j++) {

            if (currentValue > valuesToSort[j]) {

                [valuesToSort[j - round], valuesToSort[j]] = [valuesToSort[j], currentValue];

            }

            currentValue = valuesToSort[j - round + 1]
        }

        round--;

    }

    // Finalizar el contador de rendimiento
    const performanceEnd = performance.now();
    const performanceDuration = performanceEnd - performanceStart;

    console.log(`Tiempo de ejecución combSort: ${performanceDuration} milisegundos`);

    return valuesToSort;
}

module.exports = combSort;