import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const ToolTip = styled(ReactTooltip)`
  font-family: Bubbleboddy;
  font-size: 16px;
  background: none !important;
  color: #000 !important;

  &:before,
  &:after {
    display: none;
  }
`;

export default ToolTip;
