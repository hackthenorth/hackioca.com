import React from "react";
import styled from "styled-components";
import { BobaContext } from "src/contexts/boba";

const BaseBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  -webkit-transition: opacity 1s ease-out;
  -moz-transition: opacity 1s ease-out;
  -o-transition: opacity 1s ease-out;
  transition: opacity 1s ease-out;
  -webkit-transform: translate3d(0, 0, 0);
`;

const MilkBackground = styled(BaseBackground)``;
const MatchaBackground = styled(BaseBackground)``;
const TaroBackground = styled(BaseBackground)``;
const MangoBackground = styled(BaseBackground)``;
const StrawberryBackground = styled(BaseBackground)``;

const BackgroundStyle = () => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      return (
        <>
          <MilkBackground
            style={{
              background: "linear-gradient(180deg, #E5C49E 0%, #F7EEE3 100%)",
              opacity: flavor === "milk" ? 1 : 0
            }}
          />
          <MatchaBackground
            style={{
              background: "linear-gradient(180deg, #C8D170 0%, #EFF1D7 100%)",
              opacity: flavor === "matcha" ? 1 : 0
            }}
          />
          <TaroBackground
            style={{
              background: "linear-gradient(180deg, #CF92B7 0%, #EDD7E4 100%)",
              opacity: flavor === "taro" ? 1 : 0
            }}
          />
          <MangoBackground
            style={{
              background: "linear-gradient(180deg, #F2C834 0%, #FBF0CB 100%)",
              opacity: flavor === "mango" ? 1 : 0
            }}
          />
          <StrawberryBackground
            style={{
              background: "linear-gradient(180deg, #ED6E6F 0%, #FAD7D7 100%)",
              opacity: flavor === "strawberry" ? 1 : 0
            }}
          />
        </>
      );
    }}
  </BobaContext.Consumer>
);

export default React.memo(BackgroundStyle);
