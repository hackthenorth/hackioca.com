import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import ReactTooltip from 'react-tooltip';

import media from "src/utils/media";
import { useBobaContext } from "src/utils/context/boba";
import { flavors, toppings, Flavor, Topping } from "src/data";
import copy from "src/copy";

import ImgChevron from "src/static/images/chevron_up.svg";
import ImgBobaPlaceholder from "src/static/images/hero/placeholder_cup.svg";

import ImgToppingOptionGrassJelly from "src/static/images/hero/options/toppings/grass_jelly.svg";
import ImgToppingOptionTapioca from "src/static/images/hero/options/toppings/tapioca.svg";
import ImgToppingOptionRedBean from "src/static/images/hero/options/toppings/red_bean.svg";
import ImgToppingOptionPudding from "src/static/images/hero/options/toppings/pudding.svg";
import ImgToppingOptionAloeVera from "src/static/images/hero/options/toppings/aloe_vera.svg";

import ImgFlavorOptionMilk from "src/static/images/hero/options/flavors/milk.svg";
import ImgFlavorOptionStrawberry from "src/static/images/hero/options/flavors/strawberry.svg";
import ImgFlavorOptionMango from "src/static/images/hero/options/flavors/mango.svg";
import ImgFlavorOptionTaro from "src/static/images/hero/options/flavors/taro.svg";
import ImgFlavorOptionMatcha from "src/static/images/hero/options/flavors/matcha.svg";

import ImgToppingGrassJelly from "src/static/images/hero/display/toppings/grass_jelly.svg";
import ImgToppingTapioca from "src/static/images/hero/display/toppings/tapioca.svg";
import ImgToppingRedBean from "src/static/images/hero/display/toppings/red_bean.svg";
import ImgToppingPudding from "src/static/images/hero/display/toppings/pudding.svg";
import ImgToppingAloeVera from "src/static/images/hero/display/toppings/aloe_vera.svg";

import ImgFlavorMilk from "src/static/images/hero/display/flavors/milk.svg";
import ImgFlavorStrawberry from "src/static/images/hero/display/flavors/strawberry.svg";
import ImgFlavorMango from "src/static/images/hero/display/flavors/mango.svg";
import ImgFlavorMatcha from "src/static/images/hero/display/flavors/matcha.svg";
import ImgFlavorTaro from "src/static/images/hero/display/flavors/taro.svg";

/* HELPER FUNCTIONS */
const isTopping = (option: Topping | Flavor): boolean =>
  toppings.indexOf(option as Topping) >= 0;

// const chooseRandomTopping = () => toppings[Math.floor(Math.random() * toppings.length)];
// const chooseRandomFlavor = () => flavors[Math.floor(Math.random() * flavors.length)];

const findOptionImg = (option: Topping | Flavor) => {
  switch (option) {
    case "milk":        return ImgFlavorOptionMilk;
    case "strawberry":  return ImgFlavorOptionStrawberry;
    case "mango":       return ImgFlavorOptionMango;
    case "matcha":      return ImgFlavorOptionMatcha;
    case "taro":        return ImgFlavorOptionTaro;

    case "grass_jelly": return ImgToppingOptionGrassJelly;
    case "tapioca":     return ImgToppingOptionTapioca;
    case "pudding":     return ImgToppingOptionPudding;
    case "aloe_vera":   return ImgToppingOptionAloeVera;
    case "red_bean":    return ImgToppingOptionRedBean;

    default:            return ImgFlavorOptionTaro;
  }
};

// https://stackoverflow.com/questions/50924952/typescript-has-no-compatible-call-signatures
const filterShownOptions = (
  selected: Topping | Flavor
): (Topping | Flavor)[] => {
  let resultArr = (isTopping(selected) ? [...toppings] : [...flavors]) as (
    | Topping
    | Flavor)[];
  const posInArr = resultArr.indexOf(selected);

  if (posInArr == 0) {
    resultArr = resultArr
      .slice(resultArr.length - 1, resultArr.length)
      .concat(resultArr.slice(0, 2));
  } else if (posInArr == resultArr.length - 1) {
    resultArr = resultArr
      .slice(resultArr.length - 2, resultArr.length)
      .concat(resultArr.slice(0, 1));
  } else {
    resultArr = resultArr.slice(posInArr - 1, posInArr + 2);
  }

  return resultArr;
};

const shiftOptionBy = (selected: Topping | Flavor, shiftBy: number) => {
  let newIndex =
    (isTopping(selected)
      ? toppings.indexOf(selected as Topping)
      : flavors.indexOf(selected as Flavor)) + shiftBy;

  if (newIndex < 0) {
    newIndex = toppings.length + shiftBy;
  } else if (newIndex >= toppings.length) {
    newIndex = 0 + (shiftBy - 1);
  }

  return isTopping(selected) ? toppings[newIndex] : flavors[newIndex];
};

/* STYLED COMPONENTS */
const Container = styled.div`
  width: 550px;
  height: 375px;
  position: relative;

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

const BobaSelection = styled.div`
  @keyframes pop {
    50% {
      transform: scale(1.03);
    }
  }

  width: 375px;
  height: 375px;
  position: relative;
  margin: 0 auto;

  display: grid;
  justify-items: center;
  align-items: center;

  animation: none;
  &.boop { animation: pop 200ms ease-in-out 1; }

  & img.emptyCupBg {
    max-width: 93%;
    max-height: 93%;
    position: relative;
    margin: auto;

    grid-row: 1;
    grid-column: 1;
  }

  ${media.phone`
    width: 100vw;
  `}
`;

const BobaDisplay = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  margin: auto;

  grid-row: 1;
  grid-column: 1;

  display: inline-grid;
  justify-items: center;
  align-items: center;

  cursor: pointer;
`;

const FlavorChoice = styled.img`
  max-width: 350px;
  max-height: 350px;
  position: relative;
  margin: auto;

  grid-row: 1;
  grid-column: 1;

  -webkit-user-drag: none;
  -moz-user-drag: none;
  user-drag: none;

  transition: opacity 400ms ease-in-out;
  opacity: 0;
  &.show {
    opacity: 1;
  }
`;

const ToppingChoice = styled.img`
  max-width: 350px;
  max-height: 350px;
  margin: auto;
  position: relative;

  -webkit-user-drag: none;
  -moz-user-drag: none;
  user-drag: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
`;

const BobaCarousel = styled(Carousel)`
  position: relative;

  z-index: 1;
  grid-row: 1;
  grid-column: 1;

  -webkit-tap-highlight-color: transparent;


  // This stuff targets the Carousel components, so the easiest
  // way to style them is through this kinda ugly child selecting

  & ul.slider-list li.slider-slide {

    & img {
      transition: opacity 200ms ease-in-out;
      opacity: 0;
    }

    &.slide-visible img {
      opacity: 1;
    }
  }

  ${media.phone`
    width: 100vw !important;
  `}
`;

const Picker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px auto;

  ${media.phone`
    display: none;
  `}
`;

const PickerOption = styled.div<{ selected: boolean }>`
  width: 60px;
  height: 60px;

  display: flex;

  border-radius: 50%;
  border: 3px solid white;

  cursor: pointer;

  transition: opacity 200ms ease-in-out;
  opacity: ${props => (props.selected ? 1 : 0.6)};
  &:hover {
    opacity: 1;
  }

  & > img {
    max-width: 40px;
    max-height: 40px;

    margin: auto;
  }
`;

const PickerArrow = styled.img<{ down?: true }>`
  max-width: 30px;
  max-height: 30px;

  margin: 0 auto;

  ${props => props.down && "transform: rotate(180deg);"}

  cursor: pointer;

  transition: opacity 200ms ease-in-out;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;


const PickerTooltip = styled(ReactTooltip)`
  font-family: Bubbleboddy;
  font-size: 16px;
  background: none !important;

  &:before, &:after {
    display: none;
  }
  ${'' /* opacity: 0.5 !important; */}
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

  return (
    <Container>
        <Picker>
            <PickerArrow
                src={ImgChevron}
                onClick={() =>
                    changeFlavor(shiftOptionBy(selectedFlavor, -1) as Flavor)
                }
            />
            {shownFlavors.map(flavor => (
                <PickerOption
                    key={flavor}
                    onClick={() => changeFlavor(flavor)}
                    selected={flavor === selectedFlavor}
                    data-tip={copy.hero.flavors[flavor]}
                >
                    <img src={findOptionImg(flavor)} />
                </PickerOption>
            ))}
            <PickerArrow
                src={ImgChevron}
                down
                onClick={() =>
                    changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)
                }
            />
        </Picker>
        <div className="circleBg" />
        <BobaSelection
            className={boopChanged ? "boop" : ""}
            onAnimationEnd={() => updateBoopChanged(false)}
        >
            <img className="emptyCupBg" src={ImgBobaPlaceholder} />
            <BobaDisplay className="flavor">
                <FlavorChoice
                    src={ImgFlavorMilk}
                    className={selectedFlavor === "milk" ? "show" : ""}
                />
                <FlavorChoice
                    src={ImgFlavorStrawberry}
                    className={selectedFlavor === "strawberry" ? "show" : ""}
                />
                <FlavorChoice
                    src={ImgFlavorMango}
                    className={selectedFlavor === "mango" ? "show" : ""}
                />
                <FlavorChoice
                    src={ImgFlavorMatcha}
                    className={selectedFlavor === "matcha" ? "show" : ""}
                />
                <FlavorChoice
                    src={ImgFlavorTaro}
                    className={selectedFlavor === "taro" ? "show" : ""}
                />
            </BobaDisplay>
            <BobaCarousel
                wrapAround
                withoutControls
                width="350px"
                initialSlideHeight={350}
                slideIndex={toppings.indexOf(selectedTopping)}
                afterSlide={slideIndex => changeTopping(toppings[slideIndex])}
            >
                <ToppingChoice src={ImgToppingTapioca} onClick={() => changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
                <ToppingChoice src={ImgToppingGrassJelly} onClick={() => changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
                <ToppingChoice src={ImgToppingAloeVera} onClick={() => changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
                <ToppingChoice src={ImgToppingRedBean} onClick={() => changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
                <ToppingChoice src={ImgToppingPudding} onClick={() => changeFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
            </BobaCarousel>
        </BobaSelection>
        <Picker>
            <PickerArrow
                src={ImgChevron}
                onClick={() =>
                    changeTopping(shiftOptionBy(selectedTopping, -1) as Topping)
                }
            />
            {shownToppings.map(topping => (
                <PickerOption
                    key={topping}
                    onClick={() => changeTopping(topping)}
                    selected={topping === selectedTopping}
                    data-tip={copy.hero.toppings[topping]}
                >
                    <img src={findOptionImg(topping)} />
                </PickerOption>
            ))}
            <PickerArrow
                src={ImgChevron}
                down
                onClick={() =>
                    changeTopping(shiftOptionBy(selectedTopping, 1) as Topping)
                }
            />
        </Picker>
        <PickerTooltip type="light" />
    </Container>
  );
};

export default BobaPicker;
