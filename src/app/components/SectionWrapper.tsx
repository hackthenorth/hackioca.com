import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  display: flex;
`;

const SectionWrapper: React.FC = ({ children }) => (
  <Container className="section">{children}</Container>
);

export default SectionWrapper;
