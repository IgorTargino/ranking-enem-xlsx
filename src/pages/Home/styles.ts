import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.background};
`;

const StyledForm = styled.form`
  position: relative;
  width: 225px;

  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.2s;

  &:active {
    transform: scale(1.1);
  }
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  padding: 1.4rem;

  font-size: 0;
  cursor: pointer;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

const StyledLabel = styled.label`
  display: block;
  z-index: 1;
  padding: 1.4rem 4.5rem;
  font-size: 1.5rem;
  transition: all 0.1s;

  border-radius: 10px;

  color: #fff;
  background: #34495e;
`;

export { StyledContainer, StyledForm, StyledInput, StyledLabel };
