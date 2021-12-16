import React from 'react';
import School from '../../types/school';

import { StyledContainer } from './styles';

interface Props {
  school: School;
}
const WidgetSchool = ({ school }: Props) => (
  <StyledContainer>
    <span>
      {school.NO_MUNICIPIO_ESC} - {school.SG_UF}
    </span>
    <span>Escola: {school.NO_ENTIDADE}</span>
    <span>
      Posição no Brasil: {school['Posição (média provas objetivas) Brasil']}
    </span>
    <span>
      Posição no Estado: {school['Posição (média provas objetivas) UF']}
    </span>
    <span>Porte da escola: {school.PORTE_DA_ESCOLA}</span>
    <span>
      Nota média das provas objetivas:
      {school['Média da escola (provas objetivas)'].toFixed(2)}
    </span>
    <span>
      Nota média das redações: {school['Média (NOTA_REDACAO)'].toFixed(2)}
    </span>
  </StyledContainer>
);

export default WidgetSchool;
