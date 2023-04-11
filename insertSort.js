const VALUES_TO_SORT = [9, 4, 7, 1, 5, 3, 8, 2, 6];
const insertSort = (valuesToSort) => {
    // const lenghtValues = valuesToSort.length;
    for (let i = 1; i < valuesToSort.length; i++) {
        let j;
		let currentVale = valuesToSort[i];
        for (j = i-1; j >= 0 && valuesToSort[j] > currentVale; j--) {
            valuesToSort[j+1] = valuesToSort[j];
        }

        valuesToSort[j+1] = currentVale;

    }

    return valuesToSort;
}

console.log(insertSort(VALUES_TO_SORT));
