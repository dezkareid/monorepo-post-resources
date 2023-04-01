import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./Context";
import "./index.css";

const initialProps = {
  input: "",
  todos: [],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider initialProps={initialProps}>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
