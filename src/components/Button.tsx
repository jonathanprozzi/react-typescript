import React from "react";

type Props = {
  text: string;
  onClick: (text: string) => void;
};

const Button = ({ text, onClick }: Props) => {
  return <button onClick={() => onClick("stuff")}>{text}</button>;
};

export default Button;
