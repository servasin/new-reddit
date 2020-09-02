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

// const t = TMyType<typeof HomeComponent>;

type TMyType<T> = {
  [N in keyof T]: T[N] extends React.Component ? TMyType<T[N]> : T[N]
}

type test1 = TMyType<typeof HomeComponent>;
type test2 = TMyType<IProps>;

const c: test1 = HomeComponent

type TPropType<T> = T extends React.Component<infer E> ? E : T

// ???
type test3 = TPropType<typeof HomeComponent>;
