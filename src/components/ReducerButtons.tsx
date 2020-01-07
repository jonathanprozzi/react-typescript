import React, { useReducer } from "react";

const initialState = { rValue: true };

type State = {
  rValue: boolean;
};

type Action = {
  type: string;
};

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

  return (
    <div>
      {state?.rValue && <h3>I'm showing because state.rValue is true</h3>}

      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  );
};

export default ReducerButtons;
