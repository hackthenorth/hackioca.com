import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

const Wrapper = styled.div`
  font-family: "Raleway";
  text-align: center;
  color: #51192c;

  ${media.phone`
    margin: 10px 0;
    `}
`;

const Name = styled.h3`
  font-weight: 700;
  margin: 10px 0 5px 0;
`;

const Quote = styled.p`
  margin: 0 auto;
  font-style: italic;
  font-size: 14px;
  line-height: 1.5em;
  width: 150px;
`;

const Photo = styled.img`
  position: absolute;
  margin-left: 80px;
  margin-top: 100px;
  width: 50px;
  border-radius: 50%;
  border: 5px solid #51192c;
`;

const Background = styled.img`
  width: 100px;
  margin: 0 60px;
`;

interface JudgeProps {
  bgPath: string;
  photoPath: string;
  name: string;
  quote: string;
}

const Judge = (props: JudgeProps) => (
  <Wrapper>
    <Photo src={`../images/judges/${props.photoPath}`} />
    <Background src={`../images/judges/${props.bgPath}`} />
    <Name>{props.name}</Name>
    <Quote>
      &quot;{props.quote} {copy.judges.suffix}&quot;
    </Quote>
  </Wrapper>
);

export default React.memo(Judge);
