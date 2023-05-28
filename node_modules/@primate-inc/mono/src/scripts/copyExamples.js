'use strict'

import fs from 'fs-extra';

// Async/Await:
async function examples(destination, overwrite) {
  const cwd = process.env.PWD
  const userPath = (destination + '/mono/').replace('//', '/')
  const src = (cwd + '/node_modules/@primate-inc/mono/src/examples/mono.*.scss').replace('//','/')
  const dest = userPath[0] == '.' ? userPath : (cwd + '/' + userPath).replace('//','/')

  try {
    await fs.copy(src, dest, {
      overwrite: overwrite,
      errorOnExist: true,
    });
    console.log(
      '\x1b[32m',
      `Mono example files were copied to: ${dest}.`
    );
    return true;
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(
        '\x1b[36m',
        `It looks like some of those files already exist. Use -o to overwrite them.`
      );
      return false;
    }
    throw error;
  }
}

export default examples;

