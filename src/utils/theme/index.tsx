import styled from "styled-components";
import { css, ThemeDefinition, UnstyledButton } from "@hackthenorth/north";

import media from "src/utils/media";
import globalStyles from "./globalStyles";

const theme: ThemeDefinition = {
  globalStyles,
  button: {
    component: styled(UnstyledButton)`
      position: absolute;
      width: 170px;
      height: 100%;
      right: 0;
      display: inline-block;

      font-family: Raleway, sans-serif;
      font-weight: 600;
      color: white;
      text-align: center;
      line-height: 100%;

      border-top-right-radius: 9999px;
      border-bottom-right-radius: 9999px;

      cursor: pointer;
      background-color: #51192c;

      transition: all 200ms ease-in-out;
      &:hover {
        color: #cccccc;
      }

      ${media.phone`
        width: 25vw;
      `}
    `,
    variants: {
      error: css`
        background-color: #ED6E6F;
      `,
      success: css`
        background-color: #5eac0f;
      `,
    }
  }
};

export default theme;
