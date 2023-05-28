#!/usr/bin/env node
'use strict';

import meow from 'meow';
import init from './src/scripts/init.js';
import copyExamples from './src/scripts/copyExamples.js';
import { transformTokens } from './src/scripts/transformTokens.js'

const pkgName = 'MONO';
const pkgCommand = 'mono';
const pkgFolderName = 'mono';

const cli = meow(`
	Usage
	$ ${pkgCommand} <command> <options>

	Commands
		init <options -p> Copies ${pkgName} example files to destination directory.
		tokens <options -p> Generates SCSS tokens from JSON file

	Options
		--path, -p  Destination path inside the project where /${pkgFolderName} folder would live.

	Examples
		$ ${pkgCommand} init -p ./path/to/styles
		$ ${pkgCommand} tokens -p ./path/to/styles
`, {
	importMeta: import.meta,
	flags: {
		path: {
			type: 'string',
			alias: 'p',
			isRequired: true //(flags, input) => input[0] == 'init' ? true : false
		}	
    }
});

const currentCommand = cli.input[0];

switch (currentCommand) {
	case 'init' :
        console.log(`Initializing ${pkgName}...`);
		init(cli.flags.path)
        console.log('Package initialization completed.');
		break
    case 'tokens' :
		console.log('Generating SCSS tokens.')
        transformTokens(cli.flags.path)
		console.log('Tokens generation complete.')
		break
	default:
		console.log(`Command '${currentCommand}' not found.`)
		console.log(cli.help)
}

