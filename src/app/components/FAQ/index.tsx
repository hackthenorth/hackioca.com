import React from "react";
import styled from "styled-components";

import copy from './copy';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 74%;

  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
    padding: 0 25px;
  }
`;

const Heading = styled.h1`
  color: #000;
  font-size: 48px;
  text-align: center;
`;

const Column = styled.div`
  width: 45%;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const QuestionSet = styled.div`
  margin-bottom: 32px;

  h4 {
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`;

const FAQ:React.FC = () => (
  <Wrapper>
    <Heading>{copy.heading}</Heading>
    <Body>
      <Column>
        {
          copy.body.left.map(({question, answer}, i) => (
            <QuestionSet key={`question-${i}`}>
              <h4>{question}</h4>
              <p>{answer}</p>
            </QuestionSet>
          ))
        }
      </Column>
      <Column>
        {
          copy.body.right.map(({question, answer}, i) => (
            <QuestionSet key={`question-${i}`}>
              <h4>{question}</h4>
              <p>{answer}</p>
            </QuestionSet>
          ))
        }
      </Column>

    </Body>

  </Wrapper>
);

export default FAQ;
