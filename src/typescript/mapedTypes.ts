const mistake = [] as Array<number>; // type casting (приведение к типу)
mistake.push(1);

let bigObj = {
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!",
      "body": "The shortest article. Ever.",
      "created": "2015-05-22T14:56:29.000Z",
      "updated": "2015-05-22T14:56:28.000Z"
    },
    "relationships": {
      "author": {
        "data": {"id": "42", "type": "people"}
      }
    }
  }],
  "included": [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John",
        "age": 80,
        "gender": "male"
      }
    }
  ]
}

bigObj.included[0].attributes.age = 22;

type TBigObj = typeof bigObj;

const typedBigObj: MyReadonlyDeep<TBigObj> = bigObj;

// typedBigObj.included[0].id = 'sasasa';


type TObjKeys = keyof TBigObj;
type TDataType = TBigObj['data'];

type MyReadonly<T> = {
  // mapped types
  readonly [N in keyof T]: T[N]
}

/*
const some1: MyReadonly<TBigObj> = {
  included: [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John",
        "age": 80,
        "gender": "male"
      }
    }
  ],
  data: 'data'
}
*/

type MyPartial<T> = {
  [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
}

type picked = Pick<TBigObj, 'data' | 'included'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
}

type TSomeType = MyReadonlyDeep<TBigObj>;

// type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string) {
  return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

// type TReturnType = FnReturnType<typeof greaterThenZero>;
// type TArgsType = FnParameters<typeof greaterThenZero>;
type TReturnType = ReturnType<typeof greaterThenZero>;
type TArgsType = Parameters<typeof greaterThenZero>;
