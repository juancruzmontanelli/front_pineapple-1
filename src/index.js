import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import "./assets/reset.css";
import { saveState } from "./utils/browserStorage";

store.subscribe(() => {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
