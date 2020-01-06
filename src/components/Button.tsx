import React from "react";

type Props = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// using the Functional Component (FC) type and merges the expected Props allows for robust inclusion of children without needing to worry about explicitly defining the children type -  use this when including children

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
