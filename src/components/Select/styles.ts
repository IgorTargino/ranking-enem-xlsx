import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem;

  background-color: ${(props) => props.theme.color.backgroundInput};
  color: ${(props) => props.theme.color.textInputEntered};
  border: 1px solid ${(props) => props.theme.color.borderInput};

  &::placeholder {
    color: ${(props) => props.theme.color.textInputEntered};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.color.borderInput};
    background-color: ${(props) => props.theme.color.backgroundInputFocused};
    color: ${(props) => props.theme.color.textInputFocused};

    &::placeholder {
      color: #8f8a9b;
    }
  }
`;

export { StyledSelect, StyledLabel, StyledContainer };
