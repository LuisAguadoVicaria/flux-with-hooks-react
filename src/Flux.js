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
