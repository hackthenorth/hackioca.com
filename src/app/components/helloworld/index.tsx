import React from "react";
import { useSiteContext } from "../../../utils/context";
import { UPDATE_HELLO_WORLD } from "../../../utils/context/actions";


const HelloWorld = () => {
  const { state, dispatch } = useSiteContext();

  return (
    <div onClick={() => dispatch({ type: UPDATE_HELLO_WORLD, data: "I was clicked!" })}>
        {state.helloWorld}
    </div>
  )
}

export default HelloWorld;
