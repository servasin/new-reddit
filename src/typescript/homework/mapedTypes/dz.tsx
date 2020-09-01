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

type TMyType<T> = {
  [N in keyof T]: T[N] extends React.Component ? TMyType<T[N]> : T[N]
}

// const t = TMyType<typeof HomeComponent>;


