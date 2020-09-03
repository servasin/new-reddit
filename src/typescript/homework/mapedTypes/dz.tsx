import * as React from "react";

function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}

interface IProps {
  firstProp: string
}

type t = GetParamsyy<typeof HomeComponent>;

type TMyType<T> = 
  T extends React.Component<infer P>
  ? P
  : T
type GetParams<T extends React.Component> = T extends React.Component<infer P> ? P : never


type TGetJSXPropsProp<T> = {
  [N in keyof T]: T[N]
}

type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {
  // some: '1233' // throw error потому что не содержится в атрибутах div
  className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}

/*
type TMyType<T> = {
  [N in keyof T]: T[N] extends React.Component ? TMyType<T[N]> : T[N]
}

type test1 = TMyType<typeof HomeComponent>;
type test2 = TMyType<IProps>;

const c: test1 = HomeComponent

type TPropType<T> = T extends React.Component<infer E> ? E : T

// ???
type test3 = TPropType<typeof HomeComponent>;
*/

