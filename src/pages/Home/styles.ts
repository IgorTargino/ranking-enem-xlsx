import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;

  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.background};
`;

const StyledContainerInputFile = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  align-items: center;
  padding: 10rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  margin-top: 5rem;
`;

const StyledTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;

  text-align: center;
  padding-bottom: 1rem;

  color: ${(props) => props.theme.color.blue};
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
  background: ${(props) => props.theme.color.loginBackground};
`;

const StyledButton = styled.button`
  display: flex;
  width: calc(100% - 2rem);

  justify-content: center;
  align-items: center;

  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;

  border: 0;

  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.blue};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const StyledRankList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: center;

  padding: 2rem;
  gap: 2rem;
`;

const StyledWidgetList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  height: 100%;
  width: 100%;
  padding: 1rem;

  /* overflow-y: scroll; */

  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export {
  StyledContainer,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledWidgetList,
  StyledContainerInputFile,
  StyledRankList,
  StyledTitle,
};
