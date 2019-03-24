import React from "react";
import { useBobaContext } from "src/utils/context/boba";

const HelloWorldTestState = () => {
  const { flavor, topping, updateFlavor } = useBobaContext();

  return (
    <div>
      Flavour is {flavor} and topping is {topping}
      <button onClick={() => updateFlavor("mango")}>
        Click to set flavour to mango
      </button>
    </div>
  );
};

export default HelloWorldTestState;
