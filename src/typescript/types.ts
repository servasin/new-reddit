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

// Union type
const strOrNumber: string | number = '22';

// Type alias 
type StrOrNumber = string | number;

const strOrNumber1: string | number = '22';
const strOrNumber2: string | number = '22';
const strOrNumber3: string | number = '22';
const strOrNumber4: string | number = '22';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | void | symbol;

// Array
const tsArray: number [] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [1, 2, 3];

const unionArray: (string | number)[] = [1, '2', 3, '4'];
const unionArrayGeneric: Array<string | number> = [1, '2', 3, '4'];

// Tuple
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

// const [ state, setState ] = useState();

type StrangeTsTypes = any | unknown | never;
