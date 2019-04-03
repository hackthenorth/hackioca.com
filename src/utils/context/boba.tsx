import React, { useState, createContext, useContext } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { Flavor, isFlavor, flavors } from "src/flavor";
import { Topping, isTopping, toppings } from "src/topping";

export interface BobaState {
  flavor: Flavor;
  topping: Topping;
  updateFlavor: (newFlavor: Flavor, updateQueryParam?: boolean) => void;
  updateTopping: (newTopping: Topping, updateQueryParam?: boolean) => void;
  showBg: boolean;
  updateShowBg: (show: boolean) => void;
}

export const BobaContext: React.Context<BobaState> = createContext({
  flavor: flavors[0],
  topping: toppings[0],
  updateFlavor: () => {},
  updateTopping: () => {},
  showBg: true,
  updateShowBg: () => {}
});

export const useBobaContext = () => useContext(BobaContext);

const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];

export const BobaProvider: React.FC = ({ children }) => {
  const [stateFlavor, updateStateFlavor] = useState<Flavor>();
  const [stateTopping, updateStateTopping] = useState<Topping>();
  const [showBg, updateShowBg] = useState(true);

  const [queryParamFlavor, updateQueryParamFlavor] = useQueryParam(
    "flavor",
    StringParam
  );
  const [queryParamTopping, updateQueryParamTopping] = useQueryParam(
    "topping",
    StringParam
  );

  const flavor: Flavor =
    stateFlavor ||
    (isFlavor(queryParamFlavor) ? queryParamFlavor : randomFlavor);
  const topping: Topping =
    stateTopping ||
    (isTopping(queryParamTopping) ? queryParamTopping : randomTopping);

  const updateFlavor = (
    newFlavor: Flavor,
    updateQueryParam: boolean = true
  ): void => {
    updateStateFlavor(newFlavor);
    if (updateQueryParam) {
      updateQueryParamFlavor(newFlavor);
    }
  };

  const updateTopping = (
    newTopping: Topping,
    updateQueryParam: boolean = true
  ): void => {
    updateStateTopping(newTopping);
    if (updateQueryParam) {
      updateQueryParamTopping(newTopping);
    }
  };

  const bobaState: BobaState = {
    flavor,
    topping,
    updateFlavor,
    updateTopping,
    showBg,
    updateShowBg
  };

  return (
    <BobaContext.Provider value={bobaState}>{children}</BobaContext.Provider>
  );
};
