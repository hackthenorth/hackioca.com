import React from "react";
import styled from "styled-components";

interface SectionWrapperProps {
  className?: string;
}

const Container = styled.section``;

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  className,
  children
}) => <Container className={className}>{children}</Container>;

export default SectionWrapper;
