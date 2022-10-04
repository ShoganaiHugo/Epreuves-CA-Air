function content(search) {
	
	// On vérifie les arguments
	if (search.length !== 1) {
		console.log('error');

	} else {

		// On ajoute le package File System
		const fs = require("fs");
		// On va lire le contenu du document s'il existe sinon on renvoie 'error'
		fs.readFile(search[0], (error, contentFile) => {
  			if (error) {
  				console.log('error');
  			} else {
  				console.log(contentFile.toString());
  			}
		});
	}
}

return content(process.argv.slice(2));