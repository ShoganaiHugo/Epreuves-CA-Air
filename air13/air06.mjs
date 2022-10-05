export function passSanitaire(arrayOfNames, string) {
	
	// On vérifie les arguments
	if (arrayOfNames.length < 2) {
		return 'error';

	} else {
		// On isole la chaine à vérifier et on la supprime du tableau
		string = string[string.length - 1]
		arrayOfNames.pop();
		// On prépare le tableau de résultat et son compteur d'index
		let arrayResult = [''];
		let count = 0;
		
		// On vérifie chaque élément en mettant tout en minuscule
		for (let i = 0; i < arrayOfNames.length; i++) {
			if (arrayOfNames[i].toLowerCase().includes(string.toLowerCase())) {
				continue;
			} else {
				arrayResult[count] = arrayOfNames[i];
				count++;
			}
		}

		// On retourne le tableau de résultat au bon format
		return arrayResult.join(' ');

	}
}