export function kingOfTri(array, left, right) {

	// On défini les limites gauche et droites	
	left = left || 0;
	right = right || array.length - 1;

	// On s'assure de manipuler des numb
	for (var i = 0; i < array.length; i++) {
		array[i] = Number(array[i]);
	}

	// On partitionne les listes
	const pivot = partition(array, left, right);

	// En fonction des sous listes on rappel la fonction avec certains arguments

	if(left < pivot - 1) {
		kingOfTri(array, left, pivot - 1);
	}

	if (right > pivot) {
		kingOfTri(array, pivot, right);
	}

	// On renvoie le tableau au bon format
	return array.join(' ');

}

export function partition(array, left, right) {

	// on défini le pivot
	const pivot = Math.floor((left + right) / 2);

	// On boucle pour partitionner les sous tableaux
	while (left <= right) {
		while (array[left] < array[pivot]) {
			left++;
		}

		while (array[right] > array[pivot]) {
			right--;
		}

		if (left <= right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--
		}
	}

	// On return left qu'oin attribuera au pivot dans notre fonction principale
	return left;

}

console.log(kingOfTri(process.argv.slice(2)));