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

// Как мен написать "ИЛИ" в TypeScript?
type filterHTMLAttr<T> = T extends keyof React.DOMAttributes<T> | React.ClassAttributes<T> ? never : T
type TGetJSXPropsProp<tag> = tag extends keyof JSX.IntrinsicElements ? filterHTMLAttr<JSX.IntrinsicElements[tag]> : {};

const propsInput1: TGetJSXPropsProp<'input'> = {
  required: true,
  children: 'dsfdsf',
};

const propsInput2: TGetJSXPropsProp<'input'> = {
  required: true,
  ref: 'asdsa',
};