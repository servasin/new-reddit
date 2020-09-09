import * as React from "react";

function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}

function GreetingComponent(props: { phrase: string,  name: string }) {
  return (
    <div>
      `{ props.phrase }, my name { props.name }`
    </div>
  )
}

interface IProps {
  firstProp: string
}

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;

type t = TMyType<typeof HomeComponent>;
type t2 = TMyType<typeof GreetingComponent>;

// 6.

// type TDivElement = JSX.IntrinsicElements['div'];

// type TDivProps = TGetJSXPropsProp<'div'>

// const props: TDivProps = {
//   some: '1233' ,// throw error потому что не содержится в атрибутах div
//   className: 'handler' // не выкидывает ошибку так как валидно для div элемента
// }

// Может так ? Незнаю
// type filterHTMLAttr<T> = T extends React.DOMAttributes<infer E> | React.ClassAttributes<infer E> ? E : T
// type TGetJSXPropsProp<tag> = tag extends keyof JSX.IntrinsicElements ? filterHTMLAttr<JSX.IntrinsicElements[tag]> : {};

// const propsInput1: TGetJSXPropsProp<'input'> = {
//   required: true,
//   children: 'dsfdsf',
// };

// const propsInput2: TGetJSXPropsProp<'input'> = {
//   required: true,
//   ref: 'asdsa',
// };
type InputType = JSX.IntrinsicElements['input']
type TGetJSXPropsProp<T> = Omit<InputType, keyof React.DOMAttributes<InputType> | keyof React.ClassAttributes<InputType>>

const mock: any = undefined // заглушка типа any, которая подойдет к любому типу (чтобы не создавать громоздкие обьекты для теста)

const propsInput1: TGetJSXPropsProp<'input'> = { // ok
    required: true, // ok - это свойство input
};

const propsInput2: TGetJSXPropsProp<'input'> = { // error
    required: true, // ok - это свойство input
    children: mock, // error - это реакт свойство
};

const propsInput3: TGetJSXPropsProp<'input'> = { // error
    required: true, // ok
    ref: mock, // error - это реакт свойство
};