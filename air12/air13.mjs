import {splitMaison} from './air00.mjs';
import {splitEnFonction} from './air01.mjs';
import {strConcat} from './air02.mjs';
import {intru} from './air03.mjs';
import {oneTime} from './air04.mjs';
import {surChacunEntreEux} from './air05.mjs';
import {passSanitaire} from './air06.mjs';
import {insertionArray} from './air07.mjs';
import {melangeur} from './air08.mjs';
import {rotateLeft} from './air09.mjs';
import {content} from './air10.mjs';
import {pyramide} from './air11.mjs';
import {kingOfTri, partition} from './air12.mjs';



let air00 = '';
let air01 = '';
let air02 = '';
let air03 = '';
let air04 = '';
let air05 = '';
let air06 = '';
let air07 = '';
let air08 = '';
let air09 = '';
let air10 = '';
let air11 = '';
let air12 = '';


let result = 0;
let max = 0;



if (splitMaison(["Bonjour les gars"], " \n\t") === 'Bonjour\nles\ngars') {
	air00 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air00 = '\x1b[31mfailure';
	max++;
}

if (splitEnFonction(['Crevette magique dans la mer des étoiles', 'la'], ['la']) === 'Crevette magique dans \nmer des étoiles') {
	air01 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air01 = '\x1b[31mfailure';
	max++;
}

if (strConcat(['je', 'test', 'des', 'trucs', ' '], ['je', 'test', 'des', 'trucs', ' ']) === 'je test des trucs') {
	air02 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air02 = '\x1b[31mfailure';
	max++;
}

if (intru(['1', '2', '3', '4', '5', '4', '3', '2', '1']) === '5') {
	air03 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air03 = '\x1b[31mfailure';
	max++;
}

if (oneTime(['Hello miladay,     bien ou quoi ??']) === 'Helo miladay, bien ou quoi ?') {
	air04 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air04 = '\x1b[31mfailure';
	max++;
}

if (surChacunEntreEux(['1', '2', '3', '4', '5', '+2']) === '3 4 5 6 7') {
	air05 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air05 = '\x1b[31mfailure';
	max++;
}

if (passSanitaire(['Michel', 'Albert', 'Thérèse', 'Benoit', 't'], ['Michel', 'Albert', 'Thérèse', 'Benoit', 't']) === 'Michel') {
	air06 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air06 = '\x1b[31mfailure';
	max++;
}

if (insertionArray(['1', '3', '4', '2'], ['1', '3', '4', '2']) === '1 2 3 4') {
	air07 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air07 = '\x1b[31mfailure';
	max++;
}

if (melangeur(['10', '20', '30', 'fusion', '15', '25', '35']) === '10 15 20 25 30 35' ) {
	air08 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air08 = '\x1b[31mfailure';
	max++;
}

if (rotateLeft(['Michel', 'Albert', 'Thérèse', 'Benoit']) === 'Albert, Thérèse, Benoit, Michel') {
	air09 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air09 = '\x1b[31mfailure';
	max++;
}

if (content(['a.txt']) === "Je danse le mia") {
	air10 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air10 = '\x1b[31mfailure';
	max++;
}

if (pyramide(['0', '5'], ['0', '5']) === '    0    \n   000   \n  00000  \n 0000000 \n000000000') {
	air11 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air11 = '\x1b[31mfailure';
	max++;
}

if (kingOfTri(['6', '5', '4', '3', '2', '1']) === '1 2 3 4 5 6') {
	air12 = '\x1b[32msuccess';
	result++;
	max++;
} else {
	air12 = '\x1b[31mfailure';
	max++;
}

console.log('\x1b[0mair00 (1/1) : ' + air00);
console.log('\x1b[0mair01 (1/1) : ' + air01);
console.log('\x1b[0mair02 (1/1) : ' + air02);
console.log('\x1b[0mair03 (1/1) : ' + air03);
console.log('\x1b[0mair04 (1/1) : ' + air04);
console.log('\x1b[0mair05 (1/1) : ' + air05);
console.log('\x1b[0mair06 (1/1) : ' + air06);
console.log('\x1b[0mair07 (1/1) : ' + air07);
console.log('\x1b[0mair08 (1/1) : ' + air08);
console.log('\x1b[0mair09 (1/1) : ' + air09);
console.log('\x1b[0mair10 (1/1) : ' + air10);
console.log('\x1b[0mair11 (1/1) : ' + air11);
console.log('\x1b[0mair12 (1/1) : ' + air12);
console.log();
console.log('\x1b[0mTotal success: (' + result + '/' + max + ')');