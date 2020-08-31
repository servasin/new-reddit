// 1.
function concatString(str1: string, str2: string): string {
  return ''.concat(str1, ' ', str2);
}

console.log(concatString('Hello', 'World'));

//  2.
type MyArrayType =  Array<string | number>

interface IMyObject {
  howIDoIt: string;
  someArray: Array<string | number>
}

interface IMyHometask {
  howIDoIt: string;
  someArray: (string| number)[];
  withData?: IMyHometask[];
}

const MyHometask : IMyHometask = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [
    { 
      howIDoIt: "I Do It Wel", 
      someArray: ["string one", 23],
      withData: [
        { 
          howIDoIt: "I Do It Wel", 
          someArray: ["string one", 23],
        }
      ]
    },
    { 
      howIDoIt: "I Do It Wel", 
      someArray: ["string one", 23],
    },
  ],
}

//////
interface IExample2 {
  howIDoIt: string;
  someArray: Array<string | number>;
  withData?: Array<IExample2> | IExample2
}

const Example2: IExample2 = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [
    {
      howIDoIt: "I Do It Well",
      someArray: ["string one", 23],
    },
    {
      howIDoIt: "I Do It Deep",
      someArray: [1,5,6,8],
      withData: {
        howIDoIt: "I am child",
        someArray: []
      }
    }
  ]
}


// 3. Reduce

const myArray2: MyArray<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T

  map<U>(fn: (el: T, index: number, array: MyArray<T>) => U): MyArray<U>
  reduce<U>(fn: (prev: U, curr: T, index: number, array: MyArray<T>) => U, initial: U): U;
}

const total = myArray2.reduce((acc, val) => acc + val, 0)

// 4. Maped Types
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

const homeTask: OwnPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

type OwnPartial<T> = {
  [N in keyof T]?: T[N] extends object ? OwnPartial<T[N]> : T[N]
}
