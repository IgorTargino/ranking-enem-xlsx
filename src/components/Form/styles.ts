import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1rem;
  gap: 1rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 100%;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  right: 1rem;
`;

const StyledInput = styled.input`
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

const StyledRadioContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

const StyledLabelRadio = styled.label`
  display: flex;

  font-size: 1.2rem;
`;

const StyledRadioInput = styled.input`
  margin-right: 0.3rem;
`;

export {
  StyledForm,
  StyledInputContainer,
  StyledWrapper,
  StyledLabel,
  StyledIconContainer,
  StyledInput,
  StyledRadioContainer,
  StyledRadioInput,
  StyledLabelRadio,
};
