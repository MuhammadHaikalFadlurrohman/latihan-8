const readln = require('readline');
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    console.log(`Halo, nama saya ${nama}`);
    rl.close();
});
