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

// Object
type myObjType = { a: number, b: string };

const myObj: { a: number, b: string } = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number;
  b: string;
  c?: number[];
  e: number | undefined;
}

const myObj2: MyFirstInterface = {
  a: 1,
  b: 'ffdf',
  e: undefined,
}

if (myObj2.c) {
  const value = myObj2.c;
}

const ApiAnswer: IndexInterface = { key: 'frdfg', key2: 'efdf' };

const val3 = ApiAnswer.randomKey

interface IndexInterface {
  [N: string]: string;
}

// Function

enum Methods {
  add,
  sub,
  div,
}

// calculate('add', 5, 5) // -> 10
function calculate(method: Methods, left: number, right: number): number {
  switch (method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
    case Methods.div: return left / right;
  }
}

const sum = calculate(Methods.add, 2, 2);

const arrowFn: TypeFn = () => 2;

type TypeFn = () => number;

interface FnInterface {
  (a: string): void;
}


type StrangeTsTypes = any | unknown | never;

const some: any = undefined;
some.reduce() // нет метода

const un: unknown = 'd';
// un.concat() - у unknow нет методов

if (typeof un === 'string') {
  un.concat();
}

function voidFn(): void {}
const voidExample = voidFn(); // -> void

function neverFn(): never {
  throw new Error('Exaption'); // функция не дойдет до конца
}

const neverExample = neverFn();
