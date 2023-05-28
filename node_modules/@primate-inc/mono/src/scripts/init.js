'use strict';

import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

async function copyFile(file, dest) {
    try {
        const data = await fs.readFile(file, 'utf8'); // Read the contents of the source file
        await fs.outputFile(dest, data); // Write the contents to the destination file
    } catch (err) {
        console.error(`Failed to copy file: ${file}`, err);
        throw err; // Throw the error to be handled by the caller
    }
}

async function copyFilesArray(arr, dest) {
    try {
        const packageDir = path.resolve(new URL('.', import.meta.url).pathname, '..', 'init'); // Get the path to the package directory
        const cwd = process.cwd(); // Get the current working directory of the user

        console.log(`Copying files to destination: ${dest}`);

        arr.forEach(async (file) => {
            const fileDest = dest.startsWith('.') ? path.join(dest, file) : path.join(cwd, dest, file); // Determine the destination path for the file
            const filePath = path.join(packageDir, file); // Construct the source file path

            await copyFile(filePath, fileDest); // Copy the file to the destination
        });
        console.log('File copying completed.');
    } catch (err) {
        console.error('An error occurred during file copying:', err);
        throw err; // Throw any errors that occur during file copying
    }
}

async function init(userPath) {
    const files = ['config.scss', 'slots.scss', 'tokens.scss', 'config.js']; // Array of files to copy

    const dest = path.join(userPath, 'mono'); 
    await copyFilesArray(files, dest); // Copy the files to the specified destination
}

export default init;
