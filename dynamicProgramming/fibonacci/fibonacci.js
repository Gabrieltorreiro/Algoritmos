function fibonacci(num, load = { 0: 1, 1: 1 }) {
    if (load[num])
        return load[num];
    load[num] = fibonacci(num - 2, load) + fibonacci(num - 1, load);
    return load[num];
}

console.log(fibonacci(1000));