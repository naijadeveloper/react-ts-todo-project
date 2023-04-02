import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskifyContextProvider } from "./context/TaskifyContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TaskifyContextProvider>
      <App />
    </TaskifyContextProvider>
  </React.StrictMode>
);
