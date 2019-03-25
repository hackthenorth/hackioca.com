import { css, ThemedCssFunction } from "styled-components";

interface DisplaySizes {
  phone: number;
}

interface MediaTemplates {
  phone: ThemedCssFunction<object>;
}

const sizes: DisplaySizes = {
  phone: 700
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
