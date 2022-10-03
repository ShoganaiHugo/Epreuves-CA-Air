function splitMaison(arrayOfWord, separateur) {

	let arr = [''];
	let index = 0;
	arrayOfWord = arrayOfWord[0];

	for (let i = 0; i < arrayOfWord.length; i++) {
		if (arrayOfWord.charAt(i).includes(separateur.charAt(0, 1, 2)) === true) {
			index++;
			arr[index] = [''];
		} else {
			arr[index] += arrayOfWord.charAt(i);
		}

	}

	for ( let i = 0; i !== arr.length; i++ ) {
      console.log(arr[i]);
    }

}

return splitMaison(process.argv.slice(2), " \n\t");