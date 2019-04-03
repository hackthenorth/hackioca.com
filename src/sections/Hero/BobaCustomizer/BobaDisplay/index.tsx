import React, { useState } from "react";
import styled from "styled-components";
import media from "src/utils/media";
import { Flavor } from "src/flavor";
import { Topping, toppings } from "src/topping";
import { getScrollbarWidth } from "src/utils/scroll-bar-width";
import Slider from "react-slick";
import { useBobaContext } from "src/contexts/boba";

import ImgChevron from "src/static/images/chevron_up.svg";

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
    animation: pop 150ms ease-in-out 1;
  }

  ${media.phone`
    width: calc(100vw - ${getScrollbarWidth()}px);;
    height: 340px;
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

const ToppingDisplay = styled(Slider)`
  width: 350px;
  height: 350px;
  position: relative;
  margin: 0 auto;

  z-index: 1;
  grid-row: 1;
  grid-column: 1;

  -webkit-tap-highlight-color: transparent;

  ${media.phone`
    width: calc(100vw - ${getScrollbarWidth()}px) !important;
    max-height: 300px;
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

  ${media.phone`
    max-width: 300px;
    max-height: 300px;
  `}
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

  display: block !important;

  &:active,
  &:focus {
    outline: none;
  }

  ${media.phone`
    max-width: 300px;
    max-height: 300px;
  `}
`;

const Arrow = styled.img<{ dir: "left" | "right" }>`
  max-width: 20px;
  max-height: 20px;

  position: absolute;
  z-index: 2;
  top: 50%;
  left: ${props => (props.dir === "left" ? "25px;" : "auto;")};
  right: ${props => (props.dir === "left" ? "auto;" : "25px;")};

  margin: auto 0;

  transform: translateY(50%)
    ${props => (props.dir === "left" ? "rotate(270deg);" : "rotate(90deg);")};

  cursor: pointer;
  opacity: 0.6;

  display: none;
  ${media.phone`
    display: inherit;
  `}
`;

interface BobaDisplayProps {
  switcherRef: React.MutableRefObject<null>;
  boopChanged: boolean;
  animationEndCallback: () => void;
  selectedFlavor: Flavor;
  selectedTopping: Topping;
  updateTopping: (newTopping: Topping) => void;
  prevTopping: () => void;
  nextTopping: () => void;
  nextFlavor: () => void;
}

const BobaDisplay: React.FC<BobaDisplayProps> = ({
  switcherRef,
  boopChanged,
  animationEndCallback,
  selectedFlavor,
  selectedTopping,
  nextFlavor,
  prevTopping,
  nextTopping,
  updateTopping
}) => {
  const [dragging, updateDragging] = useState(false);
  const { updateShowBg } = useBobaContext();

  const incrementFlavor = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (dragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    } else {
      nextFlavor();
    }
  };

  return (
    <Container
      className={boopChanged ? "boop" : ""}
      onAnimationEnd={animationEndCallback}
    >
      <Arrow dir="left" src={ImgChevron} onClick={prevTopping} />
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
        ref={switcherRef}
        initialSlide={toppings.indexOf(selectedTopping)}
        arrows={false}
        dots={false}
        beforeChange={() => {
          updateDragging(true);
          updateShowBg(false);
          setTimeout(() => updateShowBg(true), 1000);
        }}
        afterChange={(slideIndex: number) => {
          updateTopping(toppings[slideIndex]);
          updateDragging(false);
        }}
      >
        <ToppingChoice src={ImgToppingTapioca} onClick={incrementFlavor} />
        <ToppingChoice src={ImgToppingGrassJelly} onClick={incrementFlavor} />
        <ToppingChoice src={ImgToppingAloeVera} onClick={incrementFlavor} />
        <ToppingChoice src={ImgToppingRedBean} onClick={incrementFlavor} />
        <ToppingChoice src={ImgToppingPudding} onClick={incrementFlavor} />
      </ToppingDisplay>
      <Arrow dir="right" src={ImgChevron} onClick={nextTopping} />
    </Container>
  );
};

export default BobaDisplay;
