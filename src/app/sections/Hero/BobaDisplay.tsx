import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import media from "src/utils/media";
import { toppings, Topping, Flavor } from "src/data";


import ImgBobaPlaceholder from "src/static/images/hero/placeholder_cup.svg";

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


const Container = styled.div`
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
  &.boop {
    animation: pop 200ms ease-in-out 1;
  }

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


const FlavorDisplay = styled.div`
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


const ToppingDisplay = styled(Carousel)`
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



interface BobaDisplayProps {
  boopChanged: boolean;
  animationEndCallback: () => void;
  selectedFlavor: Flavor;
  selectedTopping: Topping;
  setTopping: (newTopping: Topping) => void;
  incrementFlavor: () => void;
};


const BobaDisplay: React.FC<BobaDisplayProps> = ({
  boopChanged,
  animationEndCallback,
  selectedFlavor,
  selectedTopping,
  setTopping,
  incrementFlavor
}) => (
  <Container
      className={boopChanged ? "boop" : ""}
      onAnimationEnd={animationEndCallback}
  >
      <img className="emptyCupBg" src={ImgBobaPlaceholder} />
      <FlavorDisplay className="flavor">
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
      </FlavorDisplay>
      <ToppingDisplay
          wrapAround
          withoutControls
          width="350px"
          initialSlideHeight={350}
          slideIndex={toppings.indexOf(selectedTopping)}
          afterSlide={slideIndex => setTopping(toppings[slideIndex])}
      >
          <ToppingChoice
              src={ImgToppingTapioca}
              onClick={incrementFlavor}
          />
          <ToppingChoice
              src={ImgToppingGrassJelly}
              onClick={incrementFlavor}
          />
          <ToppingChoice
              src={ImgToppingAloeVera}
              onClick={incrementFlavor}
          />
          <ToppingChoice
              src={ImgToppingRedBean}
              onClick={incrementFlavor}
          />
          <ToppingChoice
              src={ImgToppingPudding}
              onClick={incrementFlavor}
          />
      </ToppingDisplay>
  </Container>
);

export default BobaDisplay;
