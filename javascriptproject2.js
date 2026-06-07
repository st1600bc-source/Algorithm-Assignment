function reverseString(str) {
    return str.split('').reverse().join('');
}


function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

function sumOfArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false; 

  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateFibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
