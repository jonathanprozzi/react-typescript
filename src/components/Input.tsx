import React, { useState, useRef } from "react";

const Input = () => {
  // example using type inference - infers that the input value is a string
  const [name, setName] = useState("");
  // example explicitly setting type (can be string or null)
  // const [name, setName] = useState<string | null>("");

  const ref = useRef<HTMLInputElement>(null);

  // this uses optional chaining - checks if ref? and current? are null before looking for value (only shows value if ref and current exist)
  console.log("ref", ref?.current?.value);

  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  );
};

export default Input;
