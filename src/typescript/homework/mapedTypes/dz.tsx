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



type TDivElement = JSX.IntrinsicElements['div']
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = {
  [N in keyof T]: T[N] extends keyof React.HTMLAttributes<T> ? T[N] : never/* окуда мне доставать HTML аттрибуты,
   чтобы проверить T[N] входит в их число или нет */
}

type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {
  some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}

console.log(props)
