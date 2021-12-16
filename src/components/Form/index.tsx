/* eslint-disable no-nested-ternary */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSchoolContext } from '../../context/SchoolContext';
import School from '../../types/school';
import noRepeatPushArray from '../../utils/noRepeatPushArray';

import Select from '../Select';
import {
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledIconContainer,
  StyledRadioContainer,
  StyledRadioInput,
} from './styles';

const Form = () => {
  const isFirstRender = useRef(true);
  const { allSchools, setFilteredSchools } = useSchoolContext();
  const [UF, setUF] = useState<string>('Todos');
  const [city, setCity] = useState<string>('Todos');
  const [nameSchool, setNameSchool] = useState<string>('');
  const [depAdmin, setDepAdmin] = useState<string>('');
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
    let filteredUF: School[] = [];
    let filteredCity: School[] = [];
    let filteredNameSchool: School[] = [];
    let filteredDepAdmin: School[] = [];

    if (UF !== 'Todos') {
      filteredUF = allSchools.filter((school) => {
        if (school.SG_UF === UF) return school;
      });
    } else {
      filteredUF = [...allSchools];
    }

    if (city !== 'Todos') {
      filteredCity = filteredUF.filter((school) => {
        if (school.NO_MUNICIPIO_ESC === city) return school;
      });
    } else {
      filteredCity = [...filteredUF];
    }

    if (nameSchool !== '') {
      filteredNameSchool = filteredCity.filter((school) => {
        if (school.NO_ENTIDADE.startsWith(nameSchool.toUpperCase()))
          return school;
      });
    } else {
      filteredNameSchool = [...filteredCity];
    }

    if (depAdmin !== '') {
      filteredDepAdmin = filteredNameSchool.filter((school) => {
        if (school['Dependencia Administrativa'] === depAdmin) return school;
      });
    } else {
      filteredDepAdmin = [...filteredNameSchool];
    }

    const newFilteredSchools = [...filteredDepAdmin];

    setFilteredSchools(newFilteredSchools);
    console.log(UF, city, nameSchool, depAdmin);
  }, [UF, city, nameSchool, depAdmin]);

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

      <StyledRadioContainer>
        <StyledRadioInput
          type="radio"
          name="DependeciaAdministrativa"
          value="Federal"
          checked={depAdmin === 'Federal'}
          onChange={(event) => setDepAdmin(event.target.value)}
        />
        Federal
        <StyledRadioInput
          type="radio"
          name="DependeciaAdministrativa"
          value="Estadual"
          checked={depAdmin === 'Estadual'}
          onChange={(event) => setDepAdmin(event.target.value)}
        />
        Estadual
        <StyledRadioInput
          type="radio"
          name="DependeciaAdministrativa"
          value="Municipal"
          checked={depAdmin === 'Municipal'}
          onChange={(event) => setDepAdmin(event.target.value)}
        />
        Municipal
        <StyledRadioInput
          type="radio"
          name="DependeciaAdministrativa"
          value="Privada"
          checked={depAdmin === 'Privada'}
          onChange={(event) => setDepAdmin(event.target.value)}
        />
        Privada
      </StyledRadioContainer>
    </StyledForm>
  );
};

export default Form;
