/* eslint-disable no-nested-ternary */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSchoolContext } from '../../context/SchoolContext';
import noRepeatPushArray from '../../utils/noRepeatPushArray';

import Select from '../Select';
import School from '../../types/school';
import {
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledIconContainer,
} from './styles';

const Form = () => {
  const isFirstRender = useRef(true);
  const { allSchools, setFilteredSchools } = useSchoolContext();
  const [UF, setUF] = useState<string>('Todos');
  const [city, setCity] = useState<string>('Todos');
  const [nameSchool, setNameSchool] = useState<string>('');
  const [optionsUF, setOptionsUF] = useState<string[]>([]);
  const [optionsCity, setOptionsCity] = useState<string[]>([]);

  useLayoutEffect(() => {
    const newOptionsUF = [...optionsUF];
    const newOptionsCity = [...optionsCity];

    allSchools?.forEach((school) => {
      noRepeatPushArray(newOptionsUF, school.SG_UF);
      noRepeatPushArray(newOptionsCity, school.NO_MUNICIPIO_ESC);
    });

    setOptionsUF(newOptionsUF.sort());
    setOptionsCity(newOptionsCity.sort());
  }, []);

  useEffect(() => {
    const newOptionsCity: string[] = [];

    if (!isFirstRender.current) {
      if (UF !== 'Todos') {
        allSchools?.forEach((school) => {
          if (school.SG_UF === UF)
            noRepeatPushArray(newOptionsCity, school.NO_MUNICIPIO_ESC);
        });
      } else {
        allSchools?.forEach((school) => {
          noRepeatPushArray(newOptionsCity, school.NO_MUNICIPIO_ESC);
        });
      }

      setOptionsCity(newOptionsCity.sort());
    }
    isFirstRender.current = false;
  }, [UF]);

  useEffect(() => {
    const newFilteredSchools: School[] | undefined = [];

    if (UF === 'Todos' && nameSchool === '') setFilteredSchools(allSchools);
    else {
      allSchools?.forEach((school) => {
        if (school.NO_ENTIDADE.startsWith(nameSchool.toUpperCase())) {
          console.log('1');
          newFilteredSchools.push(school);
        } else if (city === 'Todos') {
          if (school.SG_UF === UF) {
            console.log('2');
            newFilteredSchools.push(school);
          }
        } else if (school.NO_MUNICIPIO_ESC === city && school.SG_UF === UF) {
          console.log('3');
          newFilteredSchools.push(school);
        }
      });
      setFilteredSchools(newFilteredSchools);
    }

    console.log(nameSchool, newFilteredSchools);
  }, [UF, city, nameSchool]);

  return (
    <StyledForm>
      <Select
        options={optionsUF}
        name="UF"
        onChange={(event) => setUF(event.target.value)}
      />
      <Select
        options={optionsCity}
        name="Cidade"
        onChange={(event) => setCity(event.target.value)}
      />
      <StyledInputContainer>
        <StyledIconContainer>
          <BsSearch size={15} />
        </StyledIconContainer>
        <StyledInput
          name="Escola"
          type="search"
          placeholder="Busque pelo nome"
          onChange={(event) => setNameSchool(event.target.value)}
          value={nameSchool}
        />
      </StyledInputContainer>
    </StyledForm>
  );
};

export default Form;
