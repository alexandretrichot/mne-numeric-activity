import { PropsWithChildren } from 'react';

type Props = {}

export default function Loader(props: PropsWithChildren<Props>) {
  return <div className="loader">
    <svg viewBox="0 0 50 50">
      <circle className="ring" cx="25" cy="25" r="20"></circle>
      <circle className="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
    {props.children}
  </div>;
}