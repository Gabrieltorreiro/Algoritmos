function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    let result = [];
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    while (right.length || left.length) {
        if (left.length && (left[0] <= right[0] || !right.length))
            result.push(left.shift());
        if (right.length && (right[0] < left[0] || !left.length))
            result.push(right.shift());
    }
    return result;
}

exports.mergeSort = mergeSort;