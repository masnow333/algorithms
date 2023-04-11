const VALUES_TO_SORT = [9, 4, 7, 1, 5, 3, 8, 2, 6];

const combSort = (valuesToSort) => {

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

    return valuesToSort;
}

console.log(combSort(VALUES_TO_SORT))
