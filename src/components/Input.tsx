import React, { useState } from "react";

const Input = () => {
  // example using type inference - infers that the input value is a string
  const [name, setName] = useState("");
  // example explicitly setting type (can be string or null)
  // const [name, setName] = useState<string | null>("");
  return <input value={name} onChange={e => setName(e.target.value)} />;
};

export default Input;
