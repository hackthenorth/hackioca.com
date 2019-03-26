import React from "react";
import styled from "styled-components";
import { useBobaContext } from "src/utils/context/boba";
import { flavors, toppings, Flavor, Topping } from "src/siteData";

import ImgChevron from "src/static/images/chevron_up.svg";
import ImgBobaPlaceholder from "src/static/images/hero/hero_mango_boba.svg";


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

const shiftOptionBy = (selected: Topping | Flavor, shiftBy: number): (Topping | Flavor) => {
  let newIndex = (isTopping(selected) ? toppings.indexOf(selected as Topping) : flavors.indexOf(selected as Flavor)) + shiftBy;

  if(newIndex < 0) {
    newIndex = (toppings.length + shiftBy);
  } else if(newIndex >= toppings.length) {
    newIndex = 0 + (shiftBy - 1);
  }

  return (isTopping(selected) ? toppings[newIndex] : flavors[newIndex]);
}


/* STYLED COMPONENTS */
const Container = styled.div`
  width: 550px;
  height: 375px;

  display: flex;
  justify-content: space-between;
`;

const Boba = styled.div`
  width: 375px;
  height: 375px;
  position: relative;

  display: grid;
  justify-items: center;
  align-items: center;

  & div.circleBg {
    width: 90%;
    height: 90%;
    position: relative;
    bottom: 0;

    grid-row: 1;
    grid-column: 1;

    background-color: #F2E1CF;
    border-radius: 50%;
  }

  & img {
    max-width: 95%;
    max-height: 95%;

    z-index: 1;
    grid-row: 1;
    grid-column: 1;
  }
`;

const Picker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px auto;
`;

const PickerOption = styled.div<{ selected: boolean }>`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: 3px solid white;

  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  opacity: ${props => props.selected ? 1 : 0.6};

  &:hover {
    opacity: 1;
  }
`;


const Arrow = styled.img`
  max-width: 30px;
  max-height: 30px;

  margin: 0 auto;
`;


/* MAIN COMPONENT */
const MailingListSignup: React.FC = () => {

  const { flavor: selectedFlavor, topping: selectedTopping, updateFlavor, updateTopping } = useBobaContext();
  const shownFlavors = filterShownOptions(selectedFlavor) as Flavor[];
  const shownToppings = filterShownOptions(selectedTopping) as Topping[];

  return (
    <Container>
      <Picker>
        <Arrow src={ImgChevron} onClick={() => updateFlavor(shiftOptionBy(selectedFlavor, -1) as Flavor)} />
        {shownFlavors.map(flavor => (
          <PickerOption onClick={() => updateFlavor(flavor)} selected={flavor === selectedFlavor}>
            {flavor}
          </PickerOption>
        ))}
        <Arrow src={ImgChevron} onClick={() => updateFlavor(shiftOptionBy(selectedFlavor, 1) as Flavor)} />
      </Picker>
      <Boba>
        <img src={ImgBobaPlaceholder} />
        <div className="circleBg" />
      </Boba>
      <Picker>
        <Arrow src={ImgChevron} onClick={() => updateTopping(shiftOptionBy(selectedTopping, -1) as Topping)} />
        {shownToppings.map(topping => (
          <PickerOption onClick={() => updateTopping(topping)} selected={topping === selectedTopping}>
            {topping}
          </PickerOption>
        ))}
        <Arrow src={ImgChevron} onClick={() => updateTopping(shiftOptionBy(selectedTopping, 1) as Topping)} />
      </Picker>
    </Container>
  );
};



export default MailingListSignup;
