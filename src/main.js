function readFile() {
    const fs = require('fs');
    const file = fs.readFileSync(proces.argv[2], 'utf-8').trim();
    // return an array of strings
    return file.split('\n');
}

function main() {
    function addNumbers(input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input;
        }
        
        return sum;
    }
}

function main (){
    readFile();
    addNumbers([1,2,3]);
}

main();