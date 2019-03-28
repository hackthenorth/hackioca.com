import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaContext } from "src/utils/context/boba";

interface StyleProps {
  graident?: string;
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bubbleboddy";
    font-weight: 700;
    src: url("/fonts/Bubbleboddy-FatTrial.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 300;
    src: url("/fonts/Raleway-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 400;
    src: url("/fonts/Raleway-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 500;
    src: url("/fonts/Raleway-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 600;
    src: url("/fonts/Raleway-Semibold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 700;
    src: url("/fonts/Raleway-Bold.ttf") format("truetype");
  }

  html {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props: StyleProps) => props.graident};
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Style = () => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      const graident = {
        milk: "linear-gradient(180deg, #E5C49E 0%, #F7EEE3 100%);",
        matcha: "linear-gradient(180deg, #C8D170 0%, #EFF1D7 100%);",
        taro: "linear-gradient(180deg, #CF92B7 0%, #EDD7E4 100%);",
        mango: "linear-gradient(180deg, #F2C834 0%, #FBF0CB 100%)",
        strawberry: "linear-gradient(180deg, #ED6E6F 0%, #FAD7D7 100%)"
      };

      return <GlobalStyle graident={graident[flavor]} />;
    }}
  </BobaContext.Consumer>
);

export default React.memo(Style);
