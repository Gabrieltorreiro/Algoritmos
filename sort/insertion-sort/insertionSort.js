function insertionSort(arr) {
    let array = [...arr];
    for (let currentItem = 1; currentItem < array.length; currentItem++) {
        let key = array[currentItem];
        currentIndex = currentItem - 1;
        while (currentIndex >= 0 && array[currentIndex] > key) {
            array[currentIndex + 1] = array[currentIndex];
            currentIndex = currentIndex - 1;
        }
        array[currentIndex + 1] = key;
    }
    return array;
}

exports.insertionSort = insertionSort;