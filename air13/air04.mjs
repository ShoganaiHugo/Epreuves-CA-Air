export function oneTime(arrayOfWord) {

	// On vérifie les arguments
	if (arrayOfWord.length !== 1) {
		return 'error';

	} else {

		// On s'assure de manipuler une str et on créé une str de retour
		arrayOfWord = arrayOfWord[0];
		let strResult = '';

		// Si i === i++ alors on passe à la suite, sinon on écrit le caractère dans la nouvelle str
		for (let i = 0; i < arrayOfWord.length; i++) {
			if (arrayOfWord.charAt(i) === arrayOfWord.charAt(i + 1)) {
				continue;
			} else {
				strResult += arrayOfWord[i];
			}
		}

		return strResult;
		
	}
}