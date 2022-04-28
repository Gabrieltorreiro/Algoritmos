function merge(A, p, q, r) {
    let left = A.slice(p, q + 1);
    let right = A.slice(q + 1, r + 1);
    for (let i = p; left.length || right.length; i++) {
        if (!right.length || (left[0] <= right[0]))
            A[i] = left.shift();
        else
            A[i] = right.shift();
    }
    return A;
}

function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2)
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
    return A;
}

exports.mergeSort = mergeSort;