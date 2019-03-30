import React from "react";
import { BobaContext } from "src/utils/context/boba";

const BackgroundStyle = React.memo(() => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      const gradients = {
        milk: "linear-gradient(180deg, #E5C49E 0%, #F7EEE3 100%)",
        matcha: "linear-gradient(180deg, #C8D170 0%, #EFF1D7 100%)",
        taro: "linear-gradient(180deg, #CF92B7 0%, #EDD7E4 100%)",
        mango: "linear-gradient(180deg, #F2C834 0%, #FBF0CB 100%)",
        strawberry: "linear-gradient(180deg, #ED6E6F 0%, #FAD7D7 100%)"
      };
      document.body.style.background = gradients[flavor];
      return null;
    }}
  </BobaContext.Consumer>
));


export default React.memo(() => <BackgroundStyle />);
