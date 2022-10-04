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
import {} from './air11.mjs';
import {} from './air12.mjs';



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






if (splitMaison(["Bonjour les gars"], " \n\t") === 'Bonjour\nles\ngars') {
	air00 = 'success';
} else {
	air00 = 'failure';
}

if (splitEnFonction(['Crevette magique dans la mer des étoiles'], ['la']) === 'Crevette magique dans\nmer des étoiles') {

}

if (strConcat(['je', 'test', 'des', 'trucs', ' '], ['je', 'test', 'des', 'trucs', ' ']) === 'je test des trucs') {

}

if (intru(['1', '2', '3', '4', '5', '4', '3', '2', '1']) === '5') {

}

if (oneTime(['Hello miladay,     bien ou quoi ??']) === 'Helo miladay, bien ou quoi ?') {

}

if (surChacunEntreEux(['1', '2', '3', '4', '5', '+2']) === '3 4 5 6 7') {

}

if (passSanitaire(['Michel', 'Albert', 'Thérèse', 'Benoit', 't']) === 'Michel') {

}

if (insertionArray(['1', '2', '3', '4', '2'], ['1', '2', '3', '4', '2']) === '1 2 3 4') {

}

if (melangeur(['10', '20', '30', 'fusion', '15', '25', '35']) === '10 15 20 25 30 35 40' ) {

}

if (rotateLeft(['Albert', 'Thérèse', 'Benoit', 'Micel']) === 'Albert, Thérèse, Benoit, Micel') {

}

if (content('a.txt') === 'Je danse le mia') {
	air10 = 'successs';
} else {
	air10 = 'fail';
}