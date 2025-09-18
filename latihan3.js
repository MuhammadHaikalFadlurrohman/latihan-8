const data = readFileSynch('data/test.txt');
console.log(data.toString());

const data1 = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data1);

