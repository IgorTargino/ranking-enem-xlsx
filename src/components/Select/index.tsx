import { SelectHTMLAttributes } from 'react';
import { StyledSelect, StyledLabel } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  name: string;
}

const Select = ({ name, options, ...rest }: Props) => (
  <>
    <StyledLabel htmlFor={name}>{name}</StyledLabel>
    <StyledSelect {...rest} defaultValue="Todos">
      <option value="Todos">Todos</option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  </>
);

export default Select;
