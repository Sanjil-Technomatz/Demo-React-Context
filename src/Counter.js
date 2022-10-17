import React from "react";
import { useContext } from "react";
import { CounterContext } from "./App";
import { increase, decrease, reset } from "./reducers";
import { Button } from "@mui/material";

export default function Counter() {
  const user = useContext(CounterContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter using Context and useReducer</h1>
      <div style={{ display: "inline-flex", gap: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => {
            user.dispatch(increase());
          }}
        >
          Increase +
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            if (user.state.count === 0) {
              alert("Count value should not be less than 0");
            } else {
              user.dispatch(decrease());
            }
          }}
        >
          Decrease -
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            user.dispatch(reset());
          }}
        >
          Reset
        </Button>
      </div>
      <h1>Count : {user.state.count} </h1>
    </div>
  );
}
