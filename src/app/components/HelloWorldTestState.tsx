import React from "react";
import { useBobaContext } from "src/utils/context/boba";

 const HelloWorldTestState = () => {

  const { flavour, topping, updateFlavour } = useBobaContext();

   return (
    <div>
        Flavour is {flavour} and topping is {topping}
        <button onClick={() => updateFlavour("mango")}>Click to set flavour to mango</button>
    </div>
  );
};

 export default HelloWorldTestState;
