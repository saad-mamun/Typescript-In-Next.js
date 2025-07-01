"use client"
import { useReducer } from "react";

type State = {
  count: number;
};
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <p> Count: {state.count}</p>
      <div className="space-x-3">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};
export default UseReducer;
