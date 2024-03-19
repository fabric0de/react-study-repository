import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterStore from "./CounterStore";

const store = new CounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
