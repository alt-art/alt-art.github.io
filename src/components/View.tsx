import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
}
const View: React.FC<Props> = ({ children, id, dark }: Props): JSX.Element => (
  <div id={id}>
    <div
      className={`flex h-[100vh] snap-center flex-col justify-center ${
        dark && 'bg-black text-white/80'
      }`}
    >
      {children}
    </div>
  </div>
);

export default View;
