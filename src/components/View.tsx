import React, { JSX } from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
}
const View: React.FC<Props> = ({ children, dark }: Props): JSX.Element => (
  <div>
    <div
      className={`flex h-[100vh] flex-col justify-center ${
        dark && 'bg-black text-white/80'
      }`}
    >
      {children}
    </div>
  </div>
);

export default View;
