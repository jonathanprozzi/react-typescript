import React, { useState, useRef } from "react";

const Input = () => {
  // example using type inference - infers that the input value is a string
  const [name, setName] = useState("");
  // example explicitly setting type (can be string or null)
  // const [name, setName] = useState<string | null>("");

  // ref is Read Only
  const ref = useRef<HTMLInputElement>(null!);

  if (ref && ref.current) {
    console.log("ref", ref.current.value);
  }
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  );
};

export default Input;
