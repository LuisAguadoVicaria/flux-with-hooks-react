import logo from "./logo.svg";
import "./App.css";

/** Import the global context. */
import { useAppContext } from "./index";

function App() {
  /** Declare the helpers to manipulate context. */
  const { store, setStore, actions } = useAppContext();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flux_: <code>{JSON.stringify(store)}</code>
        </p>
        <button
          /** Change or set your global variables. */
          onClick={() => setStore({ var1: "val1-changed", adding: "another" })}
          className="App-link"
        >
          Change Flux
        </button>
        <button
          /** Call your global functions. */
          onClick={() => actions.hideTextToggle()}
          className="App-link"
        >
          Toggle Text
        </button>
        {!store.hide ? "Toggled text" : null}
      </header>
    </div>
  );
}

export default App;
