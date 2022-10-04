export function melangeur(arrayAFusionner) {
	
	// On vérifie les arguments
	if (arrayAFusionner.length < 2 || arrayAFusionner.includes('fusion') === false) {
		return 'error';

	} else {

		let arrayResult = [];
		let i = 0;

		while (arrayAFusionner[i] !== 'fusion') {
			arrayResult[i] = arrayAFusionner[i];
			i++;
		}

		i++;

		while (i < arrayAFusionner.length) {
			arrayResult[i - 1] = arrayAFusionner[i];
			i++;
		}

		// J'utilise le tri à bulle de l'eau
		let tmp = '';
	    let j = 0;
	    let newArr = arrayResult;
	    // Pour que le check se fasse jusu'à ce que tout soit ok
	    while (j < newArr.length) {
	      // On vérifie Number pour bien comparer des integer et non des string
	      if (Number(newArr[j]) > Number(newArr[j+1])) {
	        // On décale tout à droite la valeur la plus "grande"
	        tmp = newArr[j+1];
	        newArr[j+1] = newArr[j];
	        newArr[j] = tmp;
	        // On fait en sorte que j = 0 pour boucler jusqu'à ce que le array soit trié
	        j = -1;
	      }
	      j++;
	    }

		return newArr.join(' ');

	}
}