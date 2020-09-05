// type A<T> = T
// type B = A<string>
// type C = A<'hello'>
// type D = A<number>

type MyArr<T> = T[]
const array: MyArr<string> = ['Hello', 'TypeScript']

// function echo<T>(x: T): T {
//   return x
// }

// const echo = <T>(x: T): T => {
//   return x
// }

const echo: <T>(x: T) => T = <T>(x: T): T => {
  return x
}

// const r: string = echo('Hello TypeScript')
const r = echo<string>('Hello TypeScript')

// class List<T> {
//   elements: T[] = []

//   add(element: T) {
//     this.elements.push(element)
//   }
// }

// const list = new List<string>()
// list.add('Hello')
// list.add('TypeScript')
// list.add(2020)  // -> ошибка!

interface IList<T> {
  elements: T[],
  add(element: T): void,
}

class List implements IList<string> {
  elements: string[] = []

  add(element: string): void {
    this.elements.push(element)
  }
}

const list = new List()
list.add('Hello')
list.add('TypeScript')
// list.add(2020)  // -> ошибка!

// type A<T extends string> = T
// type A<T> = T extends string ? string : never
// type B = A<string>
// type C = A<'hello'>
// type D = A<number>

interface IName {
  name: string
}

function printName<T extends IName>(person: T) {
  console.log(person.name);
}

// printName({ name: 'Sergey' })

// interface A {
//   a: string,
//   b: number,
//   c: boolean
// }

// type B = keyof A

function getProperty<ObjectType, KeyType extends keyof ObjectType>(object: ObjectType, key: KeyType) {
  return object[key]
}

// const res1 = getProperty({ name: 'Sergey', age: 25 }, 'randomKey')

// const arr1 = [1, 'hello', false]
// type A<T> = T extends (infer U)[] ? U : never
// type B = typeof arr1
// type C = A<B>
// type D = A<typeof arr1>

const person = {
  name: 'Sergey',
  age: 25
}

type A<T> = T extends {
  [key: string]: infer U
} ? U : never

type B = typeof person
type C = A<B>

class Cat {
  say(): string {
    return 'meow'
  }
}

class Dog {
  say(): string {
    return 'woof'
  }
}

interface IClass<T> {
  new (): T
}

function createObject<T>(c: IClass<T>): T {
  return new c()
}

const pet = createObject(Cat)