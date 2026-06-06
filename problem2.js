function dotProduct(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}

function dotProduct(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}

const v1 = [1, 2, 3];
const v2 = [2, -1, 0];

const result = dotProduct(v1, v2);

console.log("Dot Product =", result);

if (result === 0) {
    console.log("Vectors are Orthogonal");
} else {
    console.log("Vectors are NOT Orthogonal");
}


function dotProduct(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}

const pairs = [
    {
        v1: [1, 2, 3],
        v2: [2, -1, 0]
    },
    {
        v1: [1, 2],
        v2: [3, 4]
    }
];

for (let pair of pairs) {

    const result = dotProduct(pair.v1, pair.v2);

    console.log("Dot Product =", result);

    if (result === 0) {
        console.log("Orthogonal");
    } else {
        console.log("Not Orthogonal");
    }

    console.log("----------------");
}