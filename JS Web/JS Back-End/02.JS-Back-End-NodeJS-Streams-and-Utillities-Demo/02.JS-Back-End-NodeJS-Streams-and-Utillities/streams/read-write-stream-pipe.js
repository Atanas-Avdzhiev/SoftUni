const fs = require('fs');

const readStream = fs.createReadStream('./lorem.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./lorem-copy.txt', { encoding: 'utf-8' });

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     writeStream.end();
// });

readStream.pipe(writeStream);
