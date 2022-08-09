import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/** Import useFlux and define the global context. */
import useFlux from "./Flux";
const AppContext = React.createContext();

/** Wrap the context and inject useFlux(). */
const Index = () => (
  <AppContext.Provider value={useFlux()}>
    <App />
  </AppContext.Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

/** Export the context as React custom hook. */
export const useAppContext = () => useContext(AppContext);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
