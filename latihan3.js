const { eror } = require("console");
const fs = require('fs');
// menulis string ke file (sync)
try {
    fs.writeFileSync('data/test.txt', 'Hello World secara Sync');
} catch (e) {
    console.log(eror);
}

// menulis string ke file (async)
fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (eror) => {
    console.log(eror);
});

const data = readFileSynch('data/test.txt');
console.log(data.toString());

const data1 = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data1);


