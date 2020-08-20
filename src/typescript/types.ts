// JS types ................//typeof

const str = 'string';     //typeof --> 'stryng'
const num = 2;           //typeof --> 'number'
const nan = NaN;         // typeof --> 'number'
const obj = {};          // typeof --> 'object'
const arr = [];          // typeof --> 'object'
const nul = null;        // typeof --> 'object'
const sym = Symbol();    // typeof --> 'object'
const und = undefined;   // typeof --> 'undefinrd'
const _void = void 0;    // typeof --> 'undefined'
const bool = true;       // typeof --> 'boolean'
const fn = () => { };    // typeof --> 'function'

let tsStr: string = 'fefrr';

function sumTS(arr: number[]) {
  return arr.reduce((a, v) => a + v);
}

const tsNumber = 22;
const tsString = '22';

const result = tsString + tsNumber;
const result2 = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
  const result2 = tsString - tsNumber; 
}
