export function rotateLeft(arrayToRotate) {
	
	// On vérifie les arguments
	if (arrayToRotate.length < 2) {
		return 'error';

	} else {

		// On copie le tableau dans le tableau de retour et prepare une var temporaire
		let arrayResult = arrayToRotate;
		let tmp = '';

		// On fait le tour du array et chaque fois on inverse i et i+1
		for (let i = 0; i < arrayResult.length - 1; i++) {
			tmp = arrayResult[i];
			arrayResult[i] = arrayResult[i + 1];
			arrayResult[i + 1] = tmp;
		}

		// On affiche le résultat au bon format
		return arrayResult.join(', ');

	}
}