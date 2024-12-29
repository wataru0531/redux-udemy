

// state...前の状態
// action...despatchで渡ってくる
const isLoginReducer = (state = false, action) => {
  switch(action.type){
    case "LOGIN":
      return !state;
    default:
      return state;
  }
}

export default isLoginReducer;