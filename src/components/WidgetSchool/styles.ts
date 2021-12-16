import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border: 1px solid #222;
  padding: 0.5rem;

  border-color: ${(props) => props.theme.color.borderInput};
  background: ${(props) => props.theme.color.backgroundInput};
`;

const StyledRow = styled.div`
  strong {
    color: ${(props) => props.theme.color.textInputEntered};
    margin-right: 0.2rem;
  }
`;

export { StyledContainer, StyledRow };
