function surChacunEntreEux(arrayOfNum) {

	// On vérifie les arguments
	if (arrayOfNum.length === 0) {
		return 'error';

	} else {

		// On enregistre le calcul à faire
		let calcul = arrayOfNum[arrayOfNum.length - 1];
		// On supprime le dernier élément du tableau, le calcul à faire
		arrayOfNum.pop();

		// On vérifie que tout ce qui est renseigné sont ben des chiffres et qu'on a bien un calcul à effecuer
		for (var i = 0; i < arrayOfNum.length; i++) {
			if (!isNaN(arrayOfNum[i]) === true && calcul.length >= 2) {
				continue;
			} else {
				return 'error';
			}
		}

		// On sépare le signe du calcul et la valeur ex : "+23" --> ['+', '23']
		let arrayCalcul = ['', ''];
		arrayCalcul[0] = calcul.charAt(0);

		for (let j = 1; j < calcul.length; j++) {
			arrayCalcul[1] += calcul.charAt(j);
		}

		// On regarde si s'est '+' ou '-' et on fait le calcul
		for (let k = 0; k < arrayOfNum.length; k++) {
			if (arrayCalcul[0] === '+') {
				arrayOfNum[k] = Number(arrayOfNum[k]) + Number(arrayCalcul[1]);
			} else if (arrayCalcul[0] === '-') {
				arrayOfNum[k] = Number(arrayOfNum[k]) - Number(arrayCalcul[1]);
			} else {
				return 'error';
			}
		}

		// On renvoie le tableau sous la forme : 1 2 3 plutôt que ['1', '2', '3']
		return arrayOfNum.join(' ');
		
	}
}

console.log(surChacunEntreEux(process.argv.slice(2)));