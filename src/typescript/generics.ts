// Generics
const myArray: Array<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T

  map<U>(fn: (el: T, index: number, array: MyArray<T>) => U): MyArray<U>
}

myArray.map((f) => f + 1);
myArray.map((f) => `f + ${f}`)

let variable = myArray[0];

[1, 2, 3].map((f, index, arr) => f + 1) // --> 2, 3, 4

function identity<T>(arg: T): T {
  return arg;
}

let res = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
  return arr.length
}


getLen([1,2,3]);

interface IValueWithType<T> {
  type: string;
  value: T
}

function withType<U>(arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg,
  }
}

const res2 = withType(123);

// Встроенные generics

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

const omitedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = { // убирает св-ва
  type: 'sfsdfs'
}

const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = { // добавляет св-ва
  isEmpty: true,
  value: 132,
}

const partial: Partial<IExample<object>> = { // делает св-ва необязательными
  isEmpty: false,
}
