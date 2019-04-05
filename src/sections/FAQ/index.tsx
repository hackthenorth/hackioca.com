import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";
import Title from "src/components/Title";

import Shapes from "src/components/Shapes";
import Subtitle from "src/components/Subtitle";

const Wrapper = styled.div`
  position: relative;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 77%;

  ${media.phone`
    flex-direction: column;
    width: 100%;
    padding: 0 25px;
  `}
`;

const Column = styled.div`
  width: 45%;

  ${media.phone`
    width: 100%;
  `}
`;

const QuestionSet = styled.div`
  font-family: Raleway;
  color: #51192c;
  margin-bottom: 32px;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  ${media.phone`
    text-align: center;
  `}
`;

interface FaqQuestion {
  question: string;
  answer: string;
}

const left: FaqQuestion[] = [];
const right: FaqQuestion[] = [];

copy.faq.body.forEach((e, i) => (i % 2 ? right : left).push(e));

const Left = (
  <Column>
    {left.map(({ question, answer }) => (
      <QuestionSet key={question}>
        <Subtitle>{question}</Subtitle>
        <p>{answer}</p>
      </QuestionSet>
    ))}
  </Column>
);

const Right = (
  <Column>
    {right.map(({ question, answer }) => (
      <QuestionSet key={question}>
        <Subtitle>{question}</Subtitle>
        <p>{answer}</p>
      </QuestionSet>
    ))}
  </Column>
);

const FAQ: React.FC = () => (
  <Wrapper>
    <Anchor id="faq" />
    <Shapes
      shapes={[
        { top: 12, left: 2, scale: 0.5, angle: 60 },
        { top: 25, left: -1, scale: 0.75, angle: 120 },
        { top: 45, left: 3, scale: 0.9, angle: 30 },
        { top: 60, left: 1, scale: 0.8, angle: 90 },
        { top: 85, left: 1, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 10, left: 92, scale: 1, angle: 90 },
        { top: 35, left: 90, scale: 0.75, angle: 10 },
        { top: 63, left: 93, scale: 0.75, angle: 40 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <Title>{copy.faq.title}</Title>
    <Body>
      {Left}
      {Right}
    </Body>
  </Wrapper>
);

export default React.memo(FAQ);
