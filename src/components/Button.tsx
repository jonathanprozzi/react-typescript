import React from "react";

type Props = {
  text: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
