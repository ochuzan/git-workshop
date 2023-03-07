function readFile() {
    const fs = require('fs');
    const file = fs.readFileSync(proces.argv[2], 'utf-8').trim();
    // return an array of strings
    return file.split('\n');
}

function main() {
    return readFile();
}

main()