import React from "react";
import styled from "styled-components";
import { useBobaContext } from "src/utils/context/boba";
import { flavors, toppings, Flavor, Topping } from "src/siteData";
import PlaceholderBobaImg from "src/static/images/hero/hero_mango_boba.svg";


const isTopping = (option: Topping | Flavor): boolean => toppings.indexOf(option as Topping) >= 0;


// https://stackoverflow.com/questions/50924952/typescript-has-no-compatible-call-signatures
const showOptions = (selected: Topping | Flavor): (Topping | Flavor)[] => {
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
`;

const PickerOption = styled.div<{ selected: boolean }>`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  border: 3px solid white;

  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  opacity: ${props => props.selected ? 1 : 0.6};

  &:hover {
    opacity: 1;
  }
`;




const MailingListSignup: React.FC = () => {

  const { flavor: selectedFlavor, topping: selectedTopping, updateFlavor, updateTopping } = useBobaContext();

  const shownFlavors = showOptions(selectedFlavor) as Flavor[];
  const shownToppings = showOptions(selectedTopping) as Topping[];


  return (
    <Container>
      <Picker>
        {shownFlavors.map(flavor => (
          <PickerOption onClick={() => updateFlavor(flavor)} selected={flavor === selectedFlavor}>{flavor}</PickerOption>
        ))}
      </Picker>
      <Boba>
        <img src={PlaceholderBobaImg} />
        <div className="circleBg" />
      </Boba>
      <Picker>
        {shownToppings.map(topping => (
          <PickerOption onClick={() => updateTopping(topping)} selected={topping === selectedTopping}>{topping}</PickerOption>
        ))}
      </Picker>
    </Container>
  );
};



export default MailingListSignup;
