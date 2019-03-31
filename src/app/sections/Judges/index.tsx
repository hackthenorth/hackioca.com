import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

import Shapes from "src/components/Shapes";
import Judge from "src/components/Judge";
import Anchor from "src/components/Anchor";
import Title from "src/components/Title";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  ${media.phone`
    flex-direction: column;
    margin: 0;
    `}
`;

const Judges = () => (
  <Container>
    <Anchor id="judges" />
    <Title>{copy.judges.title}</Title>
    <Shapes
      shapes={[
        { top: 12, left: 10, scale: 0.5, angle: 60 },
        { top: 25, left: 15, scale: 0.75, angle: 120 },
        { top: 45, left: 7, scale: 0.9, angle: 30 },
        { top: 60, left: 18, scale: 0.8, angle: 90 },
        { top: 80, left: 5, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 10, left: 80, scale: 1, angle: 90 },
        { top: 35, left: 90, scale: 0.75, angle: 10 },
        { top: 55, left: 80, scale: 0.75, angle: 40 },
        { top: 65, left: 75, scale: 0.3, angle: 60 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <Wrapper>
      <Judge
        photoPath="barack_bobama.png"
        name={copy.judges.barack.name}
        quote={copy.judges.barack.quote}
      />
      <Judge
        photoPath="boba_fett.png"
        name={copy.judges.boba.name}
        quote={copy.judges.boba.quote}
      />
      <Judge
        photoPath="matcha_zuckerberg.png"
        name={copy.judges.mark.name}
        quote={copy.judges.mark.quote}
      />
    </Wrapper>
    <Wrapper>
      <Judge
        photoPath="michael_buble_tea.png"
        name={copy.judges.michael.name}
        quote={copy.judges.michael.quote}
      />
      <Judge
        photoPath="oolong_musk.png"
        name={copy.judges.elon.name}
        quote={copy.judges.elon.quote}
      />
    </Wrapper>
  </Container>
);

export default React.memo(Judges);
