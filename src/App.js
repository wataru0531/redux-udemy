import './App.css';

// useSelector...StoreからReducerの状態を取得する。
// useDispatch...actionをStoreのReducerに通知する
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, login } from "./actions/index";

function App() {
  // Storeからカウンター、ログインのstateを取得。
  const counter = useSelector((state) => {
    // state...allReducersが取得できる
    // console.log(state)

    return state.counter;
  });
  const isLogin = useSelector((state) => state.isLogin);

  // StoreのReducerににactionを通知。
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント : { counter }</h3>
      <button onClick={ () => dispatch(increment(10)) }>+</button>
      <button onClick={() =>  dispatch(decrement())}>-</button>

      { 
        isLogin ? <h3>ログインに成功</h3> : <h3>ログインしてください</h3>
      }
      <button onClick={() => dispatch(login())}>
        { isLogin ? "ログアウト" : "ログインする" }
      </button>
    </div>
  );
}

export default App;
