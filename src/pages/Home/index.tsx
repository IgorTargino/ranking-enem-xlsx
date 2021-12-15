import { useEffect } from 'react';
import { useSchoolContext } from '../../context/SchoolContext';
import readExcel from '../../utils/readExcel';

export default function Home() {
  const { allSchoolList, setAllSchoolList } = useSchoolContext();

  const handleInput = async (file: File) => {
    const data = await readExcel(file);
    setAllSchoolList(data);
  };

  useEffect(() => {
    console.log(allSchoolList);
  }, [allSchoolList]);

  return (
    <div>
      <input
        type="file"
        onChange={(event: any) => handleInput(event.target.files[0])}
      />
    </div>
  );
}
