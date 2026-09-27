const n = 10;

function evenNumbers(n, start) {
    if (start <= n && start % 2 === 0) {
        return `${start} \n` + evenNumbers(n, start + 1)
    }
    else if (start > n) {
        return "Done !";
    }
    else {
        return evenNumbers(n, start + 1)
    }

    // if (n === 0) {
    //     return 0;
    // }
    // if (n % 2 === 0) {
    //     return `${n} \n` + evenNumbers(n - 1)
    // }
    // return evenNumbers(n - 1)
}

console.log(evenNumbers(n, 1))