function strConcat(arrayOfWord, separateurs) {

	// On vérifie les arguments
	if (arrayOfWord.length < 2) {
		console.log('error');

	} else {

		// On séléctionne uniquement la dernière str
		separateurs = separateurs[separateurs.length - 1];
		// On supprime le dernier élément du tableau qui est le separateur
		arrayOfWord.pop();
		let strResult = '';

		// On ajoute chaque élément du array dans la str
		for (let i = 0; i < arrayOfWord.length - 1; i++) {
			strResult += arrayOfWord[i] + ' ';
		}

		// On ajoute ensuite le denier élément pour ne pas avoir comme dernier caractère ' '
		strResult += arrayOfWord[arrayOfWord.length - 1];

		return strResult;

	}
}

console.log(strConcat(process.argv.slice(2), process.argv.slice(2)));