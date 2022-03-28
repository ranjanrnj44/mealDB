import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";

//import store, and the provider and make it available to our entire app
import store from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
