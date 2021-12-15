import { createContext, ReactNode, useContext, useState } from 'react';
import School from '../types/school';

interface SchoolContextProvideProps {
  children: ReactNode;
}

interface SchoolContextData {
  allSchoolList: School[];
  setAllSchoolList: (value: School[]) => void;
}

const SchoolContext = createContext({} as SchoolContextData);

const SchoolContextProvider = ({ children }: SchoolContextProvideProps) => {
  const [allSchoolList, setAllSchoolList] = useState<School[]>([]);

  return (
    <SchoolContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        allSchoolList,
        setAllSchoolList,
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
