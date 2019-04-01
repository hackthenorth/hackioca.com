import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

import ImgChevron from "src/static/images/chevron_up.svg";
import { Flavor, Topping } from "src/data";

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

/* HELPERS */
type ToppingOrFlavor = Topping | Flavor;

const OPTION_IMAGES = {
  milk: ImgFlavorOptionMilk,
  strawberry: ImgFlavorOptionStrawberry,
  mango: ImgFlavorOptionMango,
  matcha: ImgFlavorOptionMatcha,
  taro: ImgFlavorOptionTaro,
  grass_jelly: ImgToppingOptionGrassJelly, // eslint-disable-line @typescript-eslint/camelcase
  tapioca: ImgToppingOptionTapioca,
  pudding: ImgToppingOptionPudding,
  aloe_vera: ImgToppingOptionAloeVera, // eslint-disable-line @typescript-eslint/camelcase
  red_bean: ImgToppingOptionRedBean // eslint-disable-line @typescript-eslint/camelcase
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px auto;

  ${media.phone`
    display: none;
  `}
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

interface OptionPickerProps {
  incrementOption: () => void;
  decrementOption: () => void;
  changeOption: (option: ToppingOrFlavor) => void;
  selectedOption: ToppingOrFlavor;
  shownOptions: ToppingOrFlavor[];
  tooltipOptions: {
    [key: string]: string;
  };
}

const OptionPicker: React.FC<OptionPickerProps> = ({
  incrementOption,
  decrementOption,
  changeOption,
  selectedOption,
  shownOptions,
  tooltipOptions
}) => (
  <Container className="optionPicker">
    <PickerArrow src={ImgChevron} onClick={decrementOption} />
    {shownOptions.map((option, i) => (
      <PickerOption
        key={i}
        onClick={() => changeOption(option)}
        selected={option === selectedOption}
        data-tip={tooltipOptions[option]}
      >
        <img src={OPTION_IMAGES[option]} alt={option} />
      </PickerOption>
    ))}
    <PickerArrow src={ImgChevron} down onClick={incrementOption} />
  </Container>
);

export default OptionPicker;
