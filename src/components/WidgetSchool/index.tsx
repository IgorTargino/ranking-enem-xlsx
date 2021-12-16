import React from 'react';
import School from '../../types/school';

import { StyledContainer, StyledRow } from './styles';

interface Props {
  school: School;
}
const WidgetSchool = ({ school }: Props) => (
  <StyledContainer>
    <StyledRow>
      <strong>
        {school.NO_MUNICIPIO_ESC} - {school.SG_UF}
      </strong>
    </StyledRow>
    <StyledRow>
      <strong>Escola: </strong>
      {school.NO_ENTIDADE}
    </StyledRow>
    <StyledRow>
      <strong>Posição no Brasil:</strong>{' '}
      {school['Posição (média provas objetivas) Brasil']}
    </StyledRow>
    <StyledRow>
      <strong>Posição no Estado:</strong>
      {school['Posição (média provas objetivas) UF']}
    </StyledRow>
    <StyledRow>
      <strong>Porte da escola:</strong> {school.PORTE_DA_ESCOLA}
    </StyledRow>
    <StyledRow>
      <strong>Nota média das provas objetivas:</strong>
      {school['Média da escola (provas objetivas)'].toFixed(2)}
    </StyledRow>
    <StyledRow>
      <strong>Nota média das redações:</strong>
      {school['Média (NOTA_REDACAO)'].toFixed(2)}
    </StyledRow>
  </StyledContainer>
);

export default WidgetSchool;
