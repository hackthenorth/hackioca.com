import React from "react";
import styled from "styled-components";
import media from "src/utils/media";


// will move this to North tmr

interface InputProps {
  placeholder?: string;
  onChange?: () => void;
}


const Input = styled.input`
  width: 380px;
  height: 100%;
  padding-left: 20px;

  font-family: Raleway;
  font-size: 16px;
  line-height: 100%;

  border-radius: 50px;
  border: none;

  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 55vw;
    padding-left: 15px;
  `}
`;


const TextInput: React.FC<InputProps> = ({
  placeholder
}) => (
  <Input placeholder={placeholder} />
);

export default TextInput;
