const n = 10;

function evenNumbers(n, start) {

    if (n === 2) {
        return n;
    }
    if (n % 2 === 0) {
        return `${evenNumbers(n - 1)} \n` + n
    }
    return evenNumbers(n - 1)
}

console.log(evenNumbers(n))