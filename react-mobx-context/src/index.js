import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterStore from "./CounterStore";
import { CounterProvider } from "./context/counterContext";

const store = new CounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider value={store}>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
