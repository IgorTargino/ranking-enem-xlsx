import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1.6rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 100%;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  left: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;

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

export { StyledForm, StyledInputContainer, StyledIconContainer, StyledInput };
