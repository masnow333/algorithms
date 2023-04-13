const { performance } = require('perf_hooks');

const shellSort = (valuesToSort) => {

    // Iniciar el contador de rendimiento
    const performanceStart = performance.now();

    const firstSecuenceValue = Math.round(valuesToSort.length / 3)

    const secuence = [ firstSecuenceValue === 0 ? 1 : firstSecuenceValue]

    let lastSecuenceValue = secuence[secuence.length-1]

    while (lastSecuenceValue !== 1) {
        if(lastSecuenceValue <= 4){
            secuence.push(Math.round(lastSecuenceValue - 1))
        }else{
            secuence.push(Math.round(lastSecuenceValue / 3))
        }

        lastSecuenceValue = secuence[secuence.length-1]
    }

    for (let i = 0; i < secuence.length; i++) {

        for (let j = i + secuence[i]; j < valuesToSort.length; j = j + secuence[i]) {

            if (valuesToSort[j - secuence[i]] > valuesToSort[j]) {

                [valuesToSort[j], valuesToSort[j - secuence[i]]] = [valuesToSort[j - secuence[i]], valuesToSort[j]]

                let k = j - (secuence[i] * 2)

                while ( k >= 0 && valuesToSort[k] > valuesToSort[k + secuence[i]]) {

                    [valuesToSort[k], valuesToSort[k + secuence[i]]] = [valuesToSort[k + secuence[i]], valuesToSort[k]]
                    
                    k - secuence[i]

                }

            }

        }
    }

    // Finalizar el contador de rendimiento
    const performanceEnd = performance.now();
    const performanceDuration = performanceEnd - performanceStart;

    console.log(`Tiempo de ejecución shellSort: ${performanceDuration} milisegundos`);

    return valuesToSort;
}

module.exports = shellSort;