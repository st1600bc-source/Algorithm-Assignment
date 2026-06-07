function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}


function bitwiseXOR(a, b) {
    return a ^ b;
}

function redundant(str) {
    return function() {
        return str;
    };
}

function getNotesDistribution(students) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    students.forEach(student => {
        const note = student.note;
        
        if (distribution.hasOwnProperty(note)) {
            distribution[note]++;
        }
    });
    
    return distribution;
}