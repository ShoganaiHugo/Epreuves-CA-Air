export function splitMaison(arrayOfWord, separateurs) {

	// On vérifie les arguments
	if (arrayOfWord.length !== 1) {
		return 'error';

	} else {

		// On initialise le tableau de retour et son compteur d'index
		// On en profite pour modifier arrayOfWord (array) en strACut (str)
		let arr = [''];
		let index = 0;
		let strACut = arrayOfWord[0];

		// On parcourt la str et vérifie si le caractère est contenu dans separateurs
		for (let i = 0; i < strACut.length; i++) {
			if (strACut.charAt(i).includes(separateurs.charAt(0, 1, 2)) === true) {
				// On écrit rien mais on augmente la valeur d'index
				index++;
				// Surtout on créé la 'case' du tableau, sinon on récupère 'undefinedles' ou 'undefinedgars'
				arr[index] = [''];
			} else {
				arr[index] += strACut.charAt(i);
			}

		}

		let result = '';
		// On affiche chaque case de notre array
		for ( let i = 0; i < arr.length - 1; i++ ) {
	      result += arr[i] + '\n';
	    }

	    result += arr[arr.length - 1];

	    return result;
	}
}