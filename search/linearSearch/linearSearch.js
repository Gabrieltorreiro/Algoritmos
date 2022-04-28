function linearSearchRecursive(arr, value, index = 0) {
    if (arr[index] == value)
        return index;
    if (index >= arr.length)
        return null;
    return linearSearchRecursive(arr, value, index + 1);
}

function linearSearch(arr, value) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == value)
            return index;
    }
    return null;
}

exports.linearSearchRecursive = linearSearchRecursive;
exports.linearSearch = linearSearch;