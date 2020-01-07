import React, { useReducer, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const initialState = { rValue: true };

type State = {
  rValue: boolean;
};

type Action = {
  type: "one" | "two"; // this works for usecases where expected type is same
};

// type Action = { type: "one" } | { type: "two" }; //union on whole Action

// type Action = { type: "one" } | { type: "two" } | { type: "three" }; // many types

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state;
  }
}

const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, () => {
    console.log("clicked outside!");
  });

  return (
    <div ref={ref}>
      {state?.rValue && <h3>I'm showing because state.rValue is true</h3>}

      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  );
};

export default ReducerButtons;
