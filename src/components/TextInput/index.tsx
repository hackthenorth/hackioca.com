import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

// will move this to North tmr

interface InputProps {
  placeholder?: string;
  type?:
  | "button"
  | "checkbox"
  | "file"
  | "hidden"
  | "image"
  | "password"
  | "radio"
  | "reset"
  | "submit"
  | "text"
  | "search"
  | "email"
  | "url"
  | "tel"
  | "date"
  | "time"
  | "number"
  | "range"
  | "color"
  | "datetime-local"
  | "month"
  | "week"
  | "datetime";
  onChange?: (newVal: string) => void;
  value?: string;
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
  placeholder,
  type = "text",
  onChange = () => {},
  value
}) => (
  <Input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default TextInput;
