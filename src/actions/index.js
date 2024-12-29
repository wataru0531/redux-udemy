/************************************************************

Dispatchに渡すaction

*************************************************************/
export const increment = (number = 1) => {
  
  // ここでreturnされるものが、Reducerに渡される
  return {
    type: "INCREMENT",
    payload: number,
  }
};

export const decrement = () => {
  return{
    type: "DECREMENT",
  }
};

export const login = () => {
  return{
    type: "LOGIN",
  }
}