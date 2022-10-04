export function splitEnFonction(arrayOfWord, separateurs) {

	// On vérifie les arguments
	if (arrayOfWord.length !== 2) {
		return 'error';

	} else {

		// On initialise le tableau de retour et son compteur d'index
		// On en profite pour modifier arrayOfWord (array) en strACut (str)
		let arr = [''];
		let index = 0;
		strACut = arrayOfWord[0];
		separateurs = separateurs[0];

		// On parcourt la str et vérifie si le caractère est le même que le premier des separateurs
		for (let i = 0; i < strACut.length; i++) {
			if (strACut.charAt(i).includes(separateurs.charAt(0)) === true) {

				// On sauvegarde i  pour ne pas l'impacter en cas de modification inutile
				let tmp = i;
				let j = 0;
				let aTester = '';

				// On copie les caractères de strACut dans une str à partir de i
				while (j < separateurs.length) {
					aTester += strACut.charAt(i);
					i++;
					j++;
				}

				// On compare aTester avec les separateurs saisi
				if (aTester === separateurs) {
					// On écrit rien mais on augmente la valeur d'index
					index++;
					// Surtout on créé la 'case' du tableau, sinon on récupère 'undefinedles' ou 'undefinedgars'
					arr[index] = [''];
				} else {
					// Si c'était incorrecte donc inutile, on réafecte sa valeur à i et on écrit le caractère dans le array
					i = tmp;
					arr[index] += strACut.charAt(i);
				}
					
			} else {
				arr[index] += strACut.charAt(i);
			}
			

		}

		let result = '';
		// On affiche chaque case de notre array
		for ( let i = 0; i !== arr.length; i++ ) {
	      result += arr[i];
	    }

	    return result;
	}
}