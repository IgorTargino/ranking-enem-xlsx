import Form from '../../components/Form';
import { useSchoolContext } from '../../context/SchoolContext';

import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './styles';

const Home = () => {
  const { currentSchools, getSchoolData, loading, error } = useSchoolContext();

  const onSubmit = (file: File) => {
    getSchoolData(file);
  };

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
        <>
          <Form />
          {currentSchools.map((school) => (
            <div key={school['Média da escola (provas objetivas)']}>
              <h2>{school['Dependencia Administrativa']}</h2>
              <h2>{school.NO_ENTIDADE}</h2>
            </div>
          ))}
        </>
      )}
    </StyledContainer>
  );
};

export default Home;
