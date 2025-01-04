const fs = require('fs/promises');

async function main() {
    // Get names of files and directories
    const files = await fs.readdir('./files');
    console.log(files);

    // Create directory
    try {
        await fs.mkdir('./files/second-dir');
    } catch (err) {
        console.log(err);
    }

    // Remove dir
    await fs.rmdir('./files/second-dir');

    // Rename file of directory
    await fs.rename('./files/a.txt', './files/aa.txt');

    // Write to file
    await fs.writeFile('./output.txt', 'Hello from FS', { encoding: 'utf8' });
}

main();
