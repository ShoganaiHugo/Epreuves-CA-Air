export function intru(arr) {

	// On vérifie les arguments
	if (arr.length === 0) {
		return 'error';

	} else {

		// J'utilise l'exo de l'eau pour trier par ordre ASCII

		// On créé un array de resultat, une var pour stocker temporairement des valeurs et un compteur
	    let tmp = '';
	    let i = 0;
	    let newArr = arr;
	    // Pour que le check se fasse jusu'à ce que tout soit ok
	    while (i < newArr.length) {
	      
	      if (newArr[i] > newArr[i+1]) {
	        // On décale tout à gauche le première élément par ordre ASCII
	        tmp = newArr[i];
	        newArr[i] = newArr[i+1];
	        newArr[i+1] = tmp;
	        // On fait en sorte que i = 0 pour boucler jusqu'à ce que le array soit trié
	        i = -1;
	      }
	      i++;
	    }

	    let j = 0;
	    let intrus = [''];
	    let index = 0;

	    while (j < newArr.length - 1) {
	    	if (newArr[j] !== newArr[j+1]) {
	    		intrus[index] = newArr[j];
	    		j++;
		    	index++;
		    	intrus[index] = '';
		    } else {
		    	j += 2;
		    }
	    }

	    if (j === newArr.length - 1) {
	    	intrus[index] = newArr[j];
	    	index++
	    	intrus[index] = '';
	    }

	    let result = '';

	    for ( let i = 0; i !== intrus.length; i++ ) {
	      if (intrus[i] !== 0) {
	      	result += intrus[i];
	      }
	      
	    }

	    return result;

	}
}