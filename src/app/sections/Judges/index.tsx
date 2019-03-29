import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

import Judge from "src/app/components/Judge";
import Anchor from 'src/components/Anchor';
import Title from 'src/components/Title';

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
  <div>
    <Anchor id="judges" />
    <Title>{copy.judges.title}</Title>
    <Wrapper>
      <Judge
        bgPath="judge_cups_matcha.svg"
        photoPath="barack_bobama.png"
        name={copy.judges.barack.name}
        quote={copy.judges.barack.quote}
      />
      <Judge
        bgPath="judge_cups_milktea.svg"
        photoPath="boba_fett.png"
        name={copy.judges.boba.name}
        quote={copy.judges.boba.quote}
      />
      <Judge
        bgPath="judge_cups_strawberry.svg"
        photoPath="matcha_zuckerberg.png"
        name={copy.judges.mark.name}
        quote={copy.judges.mark.quote}
      />
    </Wrapper>
    <Wrapper>
      <Judge
        bgPath="judge_cups_taro.svg"
        photoPath="michael_buble_tea.png"
        name={copy.judges.michael.name}
        quote={copy.judges.michael.quote}
      />
      <Judge
        bgPath="judge_cups-mango.svg"
        photoPath="oolong_musk.png"
        name={copy.judges.elon.name}
        quote={copy.judges.elon.quote}
      />
    </Wrapper>
  </div>
);

export default React.memo(Judges);
