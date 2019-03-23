import React, { useState, createContext, useContext } from "react";

const flavours: ReadonlyArray<Flavour> = [
  "milk",
  "matcha",
  "taro",
  "mango",
  "strawberry"
];
type Flavour = "strawberry" | "mango" | "milk" | "matcha" | "taro";

const toppings: ReadonlyArray<Topping> = [
  "tapioca",
  "grass jelly",
  "aloe vera",
  "red bean",
  "pudding"
];
type Topping = "tapioca" | "grass jelly" | "aloe vera" | "red bean" | "pudding";

interface BobaState {
  flavour: Flavour;
  topping: Topping;
  updateFlavour: (newFlavour: Flavour) => void;
  updateTopping: (newTopping: Topping) => void;
}

export { flavours, toppings, Flavour, Topping, BobaState };

export const BobaContext: React.Context<BobaState> = createContext({
  flavour: flavours[0],
  topping: toppings[1],
  updateFlavour: () => {},
  updateTopping: () => {}
});

export const useBobaContext = () => useContext(BobaContext);

export const BobaProvider = ({ children }: { children: React.ReactNode }) => {
  const randomFlavour = flavours[Math.floor(Math.random() * flavours.length)];
  const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
  const [flavour, updateFlavour] = useState(randomFlavour);
  const [topping, updateTopping] = useState(randomTopping);

  const bobaState: BobaState = {
    flavour,
    topping,
    updateFlavour,
    updateTopping
  };

  return (
    <BobaContext.Provider value={bobaState}>{children}</BobaContext.Provider>
  );
};
