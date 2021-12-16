import styled from 'styled-components';

const StyledSelect = styled.select`
  position: relative;
  min-width: 200px;
  width: 100%;

  svg {
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 6px;
    stroke-width: 2px;
    stroke: #9098a9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
`;

const StyledLabel = styled.label`
  margin-right: auto;
  font-size: 1.5rem;
`;

export { StyledSelect, StyledLabel };
