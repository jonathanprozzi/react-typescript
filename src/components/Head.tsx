import React from "react";

type Props = {
  title: string; //required prop
  isActive?: boolean; //optional prop - has a default
};

const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h2>Active</h2>}
    </div>
  );
};
export default Head;
