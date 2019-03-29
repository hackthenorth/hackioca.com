import { css, ThemedCssFunction } from "styled-components";

interface DisplaySizes {
  phone: number;
  tablet: number;
}

type MediaTemplates = {
  [key in keyof DisplaySizes]: ThemedCssFunction<object>
};

export const sizes: DisplaySizes = {
  phone: 700,
  tablet: 900
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...args: []) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(literals, ...args)}
    }
  `;
  return acc;
}, {}) as MediaTemplates;

export default media;
