export function insertionArray(arrayOfNum, newElement) {
	
	// On vérifie les arguments
	if (arrayOfNum.length === 0) {
		return 'error';

	} else {
		
		//O On vérifie que tout ce qui est saisi sont bien des num
		for (var i = 0; i < arrayOfNum.length; i++) {
			if (!isNaN(arrayOfNum[i]) === false) return 'error';
		}

		// On sépare le tableau déjà trié et la valeur à ajouter
		newElement = newElement[newElement.length - 1];
		arrayOfNum.pop();
		// On créé le tableau de retour et son compteur d'index
		let arrayTrié = [''];
		let count = 0;

		// On commence à écrire tous les éléments inferieurs à celui qu'on doit ajouter
		let j = 0;
		while (arrayOfNum[j] < newElement) {
			arrayTrié[count] = arrayOfNum[j];
			count++;
			j++;
		}

		// On écrit ensuite celui à ajouter
		arrayTrié[count] = newElement;
		count++;

		// On revient en arrière car la boucle aura fait un j++ de trop
		j -= 1;

		// On supprime tous les éléments déplacés du tableau de départ
		while (j >= 0) {
			arrayOfNum.splice(j, 1);
			j--;
		}

		// On fait une concaténation des deux tableaux
		arrayTrié = arrayTrié.concat(arrayOfNum);

		// On retourne le tableau de résultat au bon format
		return arrayTrié.join(' ');

	}
}