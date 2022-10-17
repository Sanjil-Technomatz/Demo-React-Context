export const initialState = {
  count: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export function increase() {
  return { type: "increase" };
}
export function decrease() {
  return { type: "decrease" };
}
export function reset() {
  return { type: "reset" };
}
