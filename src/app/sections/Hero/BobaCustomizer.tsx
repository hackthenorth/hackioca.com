import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import media from "src/utils/media";
import copy from "src/copy";
import { flavors, toppings, Flavor, Topping } from "src/data";
import { useBobaContext } from "src/utils/context/boba";

import BobaDisplay from "./BobaDisplay";
import OptionPicker from "./OptionPicker";

/* HELPERS */
type ToppingOrFlavor = Topping | Flavor;

const isTopping = (option: ToppingOrFlavor): option is Topping =>
  toppings.indexOf(option as Topping) >= 0;

// https://stackoverflow.com/questions/50924952/typescript-has-no-compatible-call-signatures
// Since the picker only displays 3 options for each, find the range of -1, +1 options based
// on the currently selected option
const filterShownOptions = (selected: ToppingOrFlavor): ToppingOrFlavor[] => {
  // Deep copy the array of options
  let resultArr: ToppingOrFlavor[] = isTopping(selected)
    ? [...toppings]
    : [...flavors];
  const posInArr = resultArr.indexOf(selected);

  if (posInArr === 0) {
    // Merge array of last item with first two items in options
    resultArr = resultArr
      .slice(resultArr.length - 1, resultArr.length)
      .concat(resultArr.slice(0, 2));
  } else if (posInArr === resultArr.length - 1) {
    // Merge last two items with first item in options
    resultArr = resultArr
      .slice(resultArr.length - 2, resultArr.length)
      .concat(resultArr.slice(0, 1));
  } else {
    // Get item before, item after, and current item in options
    resultArr = resultArr.slice(posInArr - 1, posInArr + 2);
  }

  return resultArr;
};

// Changes the selected option by shiftBy units in the original
// toppings or flavors array
const shiftOptionBy = (selected: ToppingOrFlavor, shiftBy: number) => {
  // Shift index by shiftBy places
  let newIndex =
    (isTopping(selected)
      ? toppings.indexOf(selected as Topping)
      : flavors.indexOf(selected as Flavor)) + shiftBy;

  // Take module to bound index by options array size
  // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
  newIndex = ((newIndex % toppings.length) + toppings.length) % toppings.length;

  // Return the correct type
  return isTopping(selected) ? toppings[newIndex] : flavors[newIndex];
};

/* STYLED COMPONENTS */
const Container = styled.div`
  width: 550px;
  height: 375px;
  position: relative;

  margin: auto;

  display: flex;
  justify-content: space-between;

  & div.circleBg {
    width: 300px;
    height: 300px;
    bottom: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background-color: #f2e1cf;
    border-radius: 50%;
  }

  ${media.phone`
    width: 100vw;
    height: 400px;
  `}
`;

const PickerTooltip = styled(ReactTooltip)`
  font-family: Bubbleboddy;
  font-size: 16px;
  background: none !important;

  &:before,
  &:after {
    display: none;
  }
`;

/* MAIN COMPONENT */
const BobaPicker: React.FC = () => {
  const {
    flavor: selectedFlavor,
    topping: selectedTopping,
    updateFlavor,
    updateTopping
  } = useBobaContext();
  const [userInteracted, updateUserInteracted] = useState(false);
  const [boopChanged, updateBoopChanged] = useState(false);
  const shownFlavors = filterShownOptions(selectedFlavor) as Flavor[];
  const shownToppings = filterShownOptions(selectedTopping) as Topping[];

  const changeFlavor = (flavor: Flavor) => {
    if (flavor !== selectedFlavor) updateUserInteracted(true);
    updateFlavor(flavor);
  };
  const changeTopping = (topping: Topping) => {
    if (topping !== selectedTopping) updateUserInteracted(true);
    updateTopping(topping);
  };

  // Randomly change flavor every 3 secs until user interaction occurs
  useEffect(() => {
    if (!userInteracted) {
      const flavorChangerId = setInterval(
        () => updateFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor),
        3000
      );
      return () => clearTimeout(flavorChangerId);
    }

    return () => {};
  }, [userInteracted, selectedFlavor]);

  // Trigger the boop animation
  useEffect(() => {
    if (userInteracted) updateBoopChanged(true);
  }, [userInteracted, selectedFlavor]);

  // Update the tooltips after flavor/topping selection changed
  useEffect(() => ReactTooltip.rebuild(), [selectedFlavor, selectedTopping]);

  return (
    <Container>
      <OptionPicker
        incrementOption={() =>
          changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)
        }
        decrementOption={() =>
          changeFlavor(shiftOptionBy(selectedFlavor, -1) as Flavor)
        }
        changeOption={changeFlavor}
        shownOptions={shownFlavors}
        selectedOption={selectedFlavor}
        tooltipOptions={copy.hero.flavors}
      />

      <div className="circleBg" />

      <BobaDisplay
        boopChanged={boopChanged}
        animationEndCallback={() => updateBoopChanged(false)}
        selectedFlavor={selectedFlavor}
        selectedTopping={selectedTopping}
        setTopping={changeTopping}
        incrementFlavor={() =>
          changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)
        }
      />

      <OptionPicker
        incrementOption={() =>
          changeTopping(shiftOptionBy(selectedTopping, 1) as Topping)
        }
        decrementOption={() =>
          changeTopping(shiftOptionBy(selectedTopping, -1) as Topping)
        }
        changeOption={changeTopping}
        shownOptions={shownToppings}
        selectedOption={selectedTopping}
        tooltipOptions={copy.hero.toppings}
      />

      <PickerTooltip type="light" />
    </Container>
  );
};

export default BobaPicker;
