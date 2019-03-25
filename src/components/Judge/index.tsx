import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

const Wrapper = styled.div`
  font-family: "Raleway";
  text-align: center;
  color: #51192c;

  ${media.phone`
    margin: 10px 0;
    `}
`;

const Title = styled.h3`
  font-weight: 700;
  margin: 10px 0 5px 0;
`;

const Quote = styled.p`
  margin-top: 0;
  font-style: italic;
  font-size: 14px;
  line-height: 1.5em;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

const Profile = styled.img`
  position: absolute;
  margin-left: 80px;
  margin-top: 100px;
  width: 50px;
  border-radius: 50%;
  border: 5px solid #51192c;
`;

const Image = styled.img`
  width: 100px;
  margin: 0 60px;
`;

interface JudgeProps {
  bgPath: string;
  picturePath: string;
  name: string;
  quote: string;
}

const Judge = (props: JudgeProps) => (
  <Wrapper>
    <Profile src={`images/judges/${props.picturePath}`} />
    <Image src={`images/judges/${props.bgPath}`} />
    <Title>{props.name}</Title>
    <Quote>&quot;{props.quote} is my favourite.&quot;</Quote>
  </Wrapper>
);

export default Judge;
