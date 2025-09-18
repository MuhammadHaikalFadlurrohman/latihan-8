const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data
const dispart = './data';
if (!fs.existsSync(dispart)) {
    fs.mkdirSync(dispart);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukan No Hp : ', (noHp) => {
        rl.question('Masukkan email : ', (email) => {
            rl.question('Masukkan alamat rumah : ', (alamat) => {
                const contact = { nama, noHp, email, alamat };
                const file = fs.readFileSync(dataPath, 'utf-8');
                const contacts = JSON.parse(file);
                contacts.push(contact);
                fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
                console.log(`Terima Kasih ${nama}, sudah input ${noHp}`);
                rl.close();
            });
        });
    });
});