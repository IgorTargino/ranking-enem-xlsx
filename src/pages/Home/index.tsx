// import { useEffect } from 'react';
import Form from '../../components/Form';
import WidgetSchool from '../../components/WidgetSchool';
import { useSchoolContext } from '../../context/SchoolContext';

import {
  StyledContainer,
  StyledContainerInputFile,
  StyledRankList,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledWidgetList,
  StyledImage,
} from './styles';

import pathImage from '../../assets/image-home.svg';

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

  return (
    <StyledContainer>
      {loading && <span>LOADING...</span>}

      {!currentSchools ? (
        <StyledContainerInputFile>
          <StyledTitle>RANK INEP</StyledTitle>
          <StyledForm>
            <StyledLabel>Enviar o arquivo...</StyledLabel>

            <StyledInput
              type="file"
              onChange={(event: any) => onSubmit(event.target.files[0])}
            />
            <StyledImage src={pathImage} />

            {error && <span>{error}</span>}
          </StyledForm>
        </StyledContainerInputFile>
      ) : (
        <StyledRankList>
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
        </StyledRankList>
      )}
    </StyledContainer>
  );
};

export default Home;
