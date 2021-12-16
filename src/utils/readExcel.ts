import * as XLSX from 'xlsx';
import School from '../types/school';

const readExcel = (file: File) =>
  new Promise((resolve: (value: School[]) => void, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = () => {
      const bufferArray = fileReader.result;

      const wb = XLSX.read(bufferArray, { type: 'buffer' });

      const wsname = wb.SheetNames[0];

      const ws = wb.Sheets[wsname];

      const data: School[] = XLSX.utils.sheet_to_json(ws);

      resolve(data);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

export default readExcel;
