import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";

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

const Title = styled.h1`
  font-family: "Bubbleboddy";
  color: #000;
  font-size: 64px;
  text-align: center;
  margin-bottom: 32px;
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

  h4 {
    font-weight: bold;
    line-height: 45px;
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 34px;
  }

  ${media.phone`
    text-align: center;
  `}
`;

const FAQ: React.FC = () => (
  <div id="faq">
    <Title>{copy.faq.title}</Title>
    <Body>
      <Column>
        {copy.faq.body.left.map(({ question, answer }, i) => (
          <QuestionSet key={`question-left-${i}`}>
            <h4>{question}</h4>
            <p>{answer}</p>
          </QuestionSet>
        ))}
      </Column>
      <Column>
        {copy.faq.body.right.map(({ question, answer }, i) => (
          <QuestionSet key={`question-right-${i}`}>
            <h4>{question}</h4>
            <p>{answer}</p>
          </QuestionSet>
        ))}
      </Column>
    </Body>
  </div>
);

export default FAQ;
