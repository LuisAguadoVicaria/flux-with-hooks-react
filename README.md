<h1 align="center">Flux with hooks in React</h1>

<p align="center" >
  Simple Flux architecture for React applications, allowing to use Hooks and access/edit from anywhere. Designed for small projects. Code improvements are welcome.
</p>
<p align="center" >
  <a href="https://luisaguadovicaria.github.io/flux-with-hooks-react">
    <img height="44px"  src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/live-demo-button.png" alt="live-demo" align="center">
  </a>
</p>




<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>
<h1></h1>

<code>Flux.js</code>


````JSX
import { useState, useNavigate } from "react";

/** Use any React Hook of your choice */

const useFlux = () => {
  const [store, _setStore] = useState({
    /** Global store objects. */
    hide: false,
    var1: "val1",
    save: { any: "obj" },
  });

  const setStore = (obj) => _setStore({ ...store, ...obj });
  return {
    actions: {
      /** Global functions. */
      /** Example of a global function. */
      hideTextToggle: () => {
        /** Set and access Flux within Flux. */
        setStore({ hide: !store.hide });
      },
    },
    store: store,
    setStore: (obj) => setStore(obj),
  };
};

export default useFlux;
````

<code>index.js</code>

````JSX
...

/** Import useFlux and define the global context. */
import useFlux from "./Flux";
const AppContext = React.createContext();

...

/** Wrap the context and inject useFlux(). */
const Index = () => (
  <AppContext.Provider value={useFlux()}>
    <App />
  </AppContext.Provider>
);

...

/** Export the context as React custom hook. */
export const useAppContext = () => useContext(AppContext);

````

<code>anycomponent.js</code>

````JSX
/** Import the global context. */
import { useAppContext } from "./index";

...

  /** Declare helpers to manipulate the context. */
  const { store, setStore, actions } = useAppContext();
  
...

/** Change or set your global variables. */
         ... onClick={() => setStore({ var1: "val1-changed", adding: "another" })}
          
...

/** Call your global functions. */
         ... onClick={() => actions.hideTextToggle()}

````

## Deployment

- Assuming you have installed Node.js locally, run: `npm install`
- Run: `npm run start` to start development server and test the live web site.
- Run: `npm run build` to compile the site for production.
- Look for the `/build` folder.
- Make sure the HTML and JS paths are correct and install the site on your preferred web server.

<sub><sub>You can also open any GitHub repository in Gitpod</sub></sub> 
  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuisAguadoVicaria/flux-with-hooks-react)

## Contact

  <sub>Feel free to leave me a message, I'm friendly!</sub>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-aguado-vicar%C3%ADa-546b33241/)
