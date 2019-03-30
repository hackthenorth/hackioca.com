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
  height: 50px;
  padding-left: 20px;

  font-family: Raleway;
  font-size: 16px;
  line-height: 50px;

  border-radius: 50px;
  border: none;

  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 50vw;
  `}
`;


const TextInput: React.FC<InputProps> = ({
  placeholder
}) => (
  <Input placeholder={placeholder} />
);

export default TextInput;
