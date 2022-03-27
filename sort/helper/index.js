

function randomArray(length) {
    let array = generateArray(length)
    return shuffleArray(array);
}

function generateArray(length) {
    return Array(length).fill(0)
        .map((value, index) => index);
}

function shuffleArray(array) {
    let arr = array;
    for (let index of arr) {
        let randomIndex = Math.floor(Math.random() * (array.length - 1));
        let buf = arr[index];
        array[index] = array[randomIndex];
        array[randomIndex] = buf;
    }
    return arr;
}

exports.randomArray = randomArray;