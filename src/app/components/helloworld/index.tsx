import React from "react";
import { useSiteContext } from "src/utils/context";
import { ACTIONS } from "src/utils/context/types";

const HelloWorld = () => {
  // equivalent to useContext(SiteContext)
  // destructures the object to get state and dispatch
  // state now contains current state in context, dispatch allows us to change state
  // usage below, refreshes component automatically
  const { state, dispatch } = useSiteContext();

  return (
    <div
      onClick={() =>
        dispatch({ type: ACTIONS.UPDATE_HELLO_WORLD, data: "I was clicked!" })
      }
    >
      {state.helloWorld}
    </div>
  );
};

export default HelloWorld;
