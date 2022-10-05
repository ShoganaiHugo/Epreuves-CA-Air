export function pyramide(caract, lignes) {
	
	// On vérifie les arguments
	if (caract.length !== 2) {
		return 'error';

	} else {

		// On s'assure d'avoir des str
		caract = caract[0];
		lignes = lignes[1];

		// On vérifie que ligne est un numb
		if(isNaN(lignes) === true) return 'error';

		// On compte la largeur de la pyramide
		let taille = 1 + (2 * (lignes - 1) );
		// On créé les espaces vides et le compteur
		let espacesCount = 0;
		let espaces = ' ';
		// On créé le tableau de résultat
		let arrayResult = [''];
		// On défini le compteur d'index du tableau à la valeur max
		let count = Number(lignes) - 1;

		// A chaque passage on remplace de plus en plus de caract par des espaces
		for (let i = 0; i < lignes; i++) {
			arrayResult[count] = espaces.repeat(espacesCount) + caract.repeat(taille) + espaces.repeat(espacesCount);
			taille -= 2;
			espacesCount ++;
			count--;
		}

		// On renvoie le tableau au bon format
		return arrayResult.join('\n');
	}
}