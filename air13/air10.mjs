import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export function content(search) {

	// On vérifie les arguments
	if (search.length !== 1) {
		return 'error';

	} else {

		// On ajoute le package File System
		const fs = require('fs');
		// On va lire le contenu du document

     	return JSON.parse(fs.readFileSync(search[0]));
	}
}