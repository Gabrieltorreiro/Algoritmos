function binarySearchRecursive(arr, value, start = 0, end = arr.length) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] == value)
        return middle;
    if (end < start)
        return null;
    if (value < arr[middle]) {
        return binarySearchRecursive(arr, value, start, middle - 1);
    } else {
        return binarySearchRecursive(arr, value, middle + 1, end);
    }
}

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] == value)
            return middle;
        if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return null;
}

exports.binarySearchRecursive = binarySearchRecursive;
exports.binarySearch = binarySearch;