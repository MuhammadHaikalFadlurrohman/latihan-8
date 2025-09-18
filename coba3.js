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
})

// membaca isi file (sync)
const data = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data);

// membaca isi file (async)
fs.readFile('data/test.txt', 'utf-8', (eror, data) => {
    if (eror) {
        console.log(eror);
    }
    console.log(data);
})

