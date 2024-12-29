import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers/index";

// Store...Reducerを含む。
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 全てのコンポーネントでstoreにアクセス可能に */}
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
