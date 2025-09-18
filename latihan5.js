const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukan No Hp : ', (noHp) => {
        rl.question('Masukkan email : ', (nama) => {
            rl.question('Masukkan alamat rumah : ', (nama) => {
        console.log(`Terima Kasih ${nama}, sudah input ${noHp}`);
        rl.close();
    });
});
    });
});
