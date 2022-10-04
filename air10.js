function content(search) {
	
	// On vérifie les arguments
	if (search.length !== 1) {
		console.log('error');

	} else {

		// On ajoute le package File System
		const fs = require("fs");
		// On va lire le contenu du document
		return JSON.parse(fs.readFileSync(search[0]));
	}
}

return content(process.argv.slice(2));