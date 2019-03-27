import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import media from "src/utils/media";
import { useBobaContext } from "src/utils/context/boba";
import { flavors, toppings, Flavor, Topping } from "src/siteData";

import ImgChevron from "src/static/images/chevron_up.svg";
import ImgBobaPlaceholder from "src/static/images/hero/placeholder_cup.svg";
import ImgToppingGrassJelly from "src/static/images/hero/toppings/grass_jelly.svg";
import ImgToppingTapioca from "src/static/images/hero/toppings/tapioca.svg";
import ImgToppingRedBean from "src/static/images/hero/toppings/red_bean.svg";
import ImgToppingPudding from "src/static/images/hero/toppings/pudding.svg";
import ImgToppingAloeVera from "src/static/images/hero/toppings/aloe_vera.svg";

import ImgFlavorMilk from "src/static/images/hero/flavors/milk.svg";
import ImgToppingStrawberry from "src/static/images/hero/flavors/strawberry.svg";
import ImgToppingMango from "src/static/images/hero/flavors/mango.svg";
import ImgToppingMatcha from "src/static/images/hero/flavors/matcha.svg";
import ImgToppingTaro from "src/static/images/hero/flavors/taro.svg";

/* HELPER FUNCTIONS */
const isTopping = (option: Topping | Flavor): boolean => toppings.indexOf(option as Topping) >= 0;

// https://stackoverflow.com/questions/50924952/typescript-has-no-compatible-call-signatures
const filterShownOptions = (selected: Topping | Flavor): (Topping | Flavor)[] => {
  let resultArr = (isTopping(selected) ? [...toppings] : [...flavors]) as (Topping | Flavor)[];
  const posInArr = resultArr.indexOf(selected);

  if (posInArr == 0) {
    resultArr = resultArr.slice(resultArr.length - 1, resultArr.length).concat(resultArr.slice(0, 2));

  } else if (posInArr == (resultArr.length - 1)) {
    resultArr = resultArr.slice((resultArr.length - 2), (resultArr.length)).concat(resultArr.slice(0, 1));

  } else {
    resultArr = resultArr.slice(posInArr - 1, posInArr + 2);
  }

  return resultArr;
}

const shiftOptionBy = (selected: Topping | Flavor, shiftBy: number) => {
  let newIndex = (isTopping(selected) ? toppings.indexOf(selected as Topping) : flavors.indexOf(selected as Flavor)) + shiftBy;

  if (newIndex < 0) {
    newIndex = (toppings.length + shiftBy);
  } else if (newIndex >= toppings.length) {
    newIndex = 0 + (shiftBy - 1);
  }

  return (isTopping(selected) ? toppings[newIndex] : flavors[newIndex]);
}


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

    background-color: #F2E1CF;
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
      transform: scale(1.02);
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
  &.boop { animation: pop 250ms ease-in-out 1; }

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

const FlavourChoice = styled.img`
  max-width: 93%;
  max-height: 93%;
  position: relative;
  margin: auto;

  grid-row: 1;
  grid-column: 1;

  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &.show { opacity: 1; }
`;


const ToppingChoice = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin: auto;
  position: relative;

  &:active, &:focus {
    outline: none;
  }
`;


const BobaCarousel = styled(Carousel)`
  position: relative;

  z-index: 1;
  grid-row: 1;
  grid-column: 1;

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

  border-radius: 50%;
  border: 3px solid white;

  cursor: pointer;

  transition: opacity 200ms ease-in-out;
  opacity: ${props => props.selected ? 1 : 0.6};
  &:hover { opacity: 1; }
`;


const PickerArrow = styled.img<{ down?: true; }>`
  max-width: 30px;
  max-height: 30px;

  margin: 0 auto;

  ${props => props.down && 'transform: rotate(180deg);'}

  cursor: pointer;

  transition: opacity 200ms ease-in-out;
  opacity: 0.6;
  &:hover { opacity: 1; }
`;


/* MAIN COMPONENT */
const BobaPicker: React.FC = () => {

  const { flavor: selectedFlavor, topping: selectedTopping, updateFlavor, updateTopping } = useBobaContext();
  const [ boopChanged, updateBoopChanged ] = useState(false);
  const shownFlavors = filterShownOptions(selectedFlavor) as Flavor[];
  const shownToppings = filterShownOptions(selectedTopping) as Topping[];

  useEffect(() => {
    updateBoopChanged(true);
  }, [selectedFlavor])

  return (
    <Container>
        <Picker>
            <PickerArrow src={ImgChevron} onClick={() => updateFlavor(shiftOptionBy(selectedFlavor, -1) as Flavor)} />
            {shownFlavors.map(flavor => (
                <PickerOption key={flavor} onClick={() => updateFlavor(flavor)} selected={flavor === selectedFlavor}>
                    {flavor}
                </PickerOption>
            ))}
            <PickerArrow src={ImgChevron} down onClick={() => updateFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
        </Picker>
        <div className="circleBg" />
        <BobaSelection
            className={boopChanged ? "boop" : ""}
            onAnimationEnd={() => updateBoopChanged(false)}
        >
            <img className="emptyCupBg" src={ImgBobaPlaceholder} />
            <BobaDisplay className="flavor" onClick={() => updateFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)}>
                <FlavourChoice src={ImgFlavorMilk} className={(selectedFlavor === "milk") ? "show" : ""} />
                <FlavourChoice src={ImgToppingStrawberry} className={(selectedFlavor === "strawberry") ? "show" : ""} />
                <FlavourChoice src={ImgToppingMango} className={(selectedFlavor === "mango") ? "show" : ""} />
                <FlavourChoice src={ImgToppingMatcha} className={(selectedFlavor === "matcha") ? "show" : ""} />
                <FlavourChoice src={ImgToppingTaro} className={(selectedFlavor === "taro") ? "show" : ""} />
            </BobaDisplay>
            <BobaCarousel
                wrapAround
                withoutControls
                width="350px"
                initialSlideHeight={350}
                slideIndex={toppings.indexOf(selectedTopping)}
                afterSlide={slideIndex => updateTopping(toppings[slideIndex])}
            >
                <ToppingChoice src={ImgToppingTapioca} />
                <ToppingChoice src={ImgToppingGrassJelly} />
                <ToppingChoice src={ImgToppingAloeVera} />
                <ToppingChoice src={ImgToppingRedBean} />
                <ToppingChoice src={ImgToppingPudding} />
            </BobaCarousel>
        </BobaSelection>
        <Picker>
            <PickerArrow src={ImgChevron} onClick={() => updateTopping(shiftOptionBy(selectedTopping, -1) as Topping)} />
            {shownToppings.map(topping => (
                <PickerOption key={topping} onClick={() => updateTopping(topping)} selected={topping === selectedTopping}>
                    {topping}
                </PickerOption>
            ))}
            <PickerArrow src={ImgChevron} down onClick={() => updateTopping(shiftOptionBy(selectedTopping, 1) as Topping)} />
      </Picker>
    </Container>
  );
};


export default BobaPicker;
