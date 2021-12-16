import { useEffect } from 'react';
import Form from '../../components/Form';
import WidgetSchool from '../../components/WidgetSchool';
import { useSchoolContext } from '../../context/SchoolContext';

import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledWidgetList,
  StyledSecondaryContainer,
} from './styles';

const Home = () => {
  const {
    currentSchools,
    getSchoolData,
    updateNumberLoadedSchool,
    loading,
    error,
  } = useSchoolContext();

  const onSubmit = (file: File) => {
    getSchoolData(file);
  };

  useEffect(() => {
    console.log(currentSchools);
  }, [currentSchools]);

  return (
    <StyledContainer>
      {loading && <span>LOADING...</span>}

      {!currentSchools ? (
        <StyledForm>
          <StyledLabel>Enviar o arquivo...</StyledLabel>
          <StyledInput
            type="file"
            onChange={(event: any) => onSubmit(event.target.files[0])}
          />
          {error && <span>{error}</span>}
        </StyledForm>
      ) : (
        <StyledSecondaryContainer>
          <Form />
          <StyledWidgetList>
            {currentSchools.map((school) => (
              <WidgetSchool
                school={school}
                key={school['Média da escola (provas objetivas)']}
              />
            ))}
          </StyledWidgetList>

          <StyledButton onClick={() => updateNumberLoadedSchool()}>
            Carregar mais
          </StyledButton>
        </StyledSecondaryContainer>
      )}
    </StyledContainer>
  );
};

export default Home;
