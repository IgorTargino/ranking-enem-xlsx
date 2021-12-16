/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import School from '../types/school';
import readExcel from '../utils/readExcel';

interface SchoolContextProvideProps {
  children: ReactNode;
}

interface SchoolContextData {
  loading: boolean;
  error: Error | undefined;
  allSchools: School[];
  currentSchools: School[] | undefined;
  filteredSchools: School[] | undefined;
  getSchoolData: (value: File) => void;
  setFilteredSchools: (value: School[] | undefined) => void;
  setLoading: (value: boolean) => void;
  updateNumberLoadedSchool: () => void;
}

const SchoolContext = createContext({} as SchoolContextData);

const SchoolContextProvider = ({ children }: SchoolContextProvideProps) => {
  const isFirstRender = useRef(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [allSchools, setAllSchools] = useState<School[]>([]);
  const [currentSchools, setCurrentSchools] = useState<School[]>();
  const [filteredSchools, setFilteredSchools] = useState<School[]>();
  const [numberLoadedSchool, setNumberLoadedSchool] = useState(5);

  const getSchoolData = async (file: File) => {
    try {
      setLoading(true);
      if (!file) throw new Error('Arquivo não encontrado!');
      const data = await readExcel(file);
      setAllSchools(data);
      setFilteredSchools(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateNumberLoadedSchool = () => {
    setNumberLoadedSchool(numberLoadedSchool + 5);
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      setCurrentSchools(filteredSchools?.slice(0, numberLoadedSchool));
    }

    isFirstRender.current = false;
  }, [filteredSchools, numberLoadedSchool]);

  return (
    <SchoolContext.Provider
      value={{
        loading,
        error,
        allSchools,
        currentSchools,
        filteredSchools,
        getSchoolData,
        setFilteredSchools,
        setLoading,
        updateNumberLoadedSchool,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

const useSchoolContext = () => {
  const context = useContext(SchoolContext);

  return context;
};

export { SchoolContextProvider, useSchoolContext };
