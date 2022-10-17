import { createContext, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers";
import Counter from "./Counter";

export const CounterContext = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
}

export default App;
