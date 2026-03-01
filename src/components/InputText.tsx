import type { ComponentProps } from 'react';

export interface IInputTextProps extends ComponentProps<'input'> {
  label: string;
  placeholder: string;
}

export const InputText = ({ label, placeholder, ...rest }: IInputTextProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input type="text" className="input" placeholder={placeholder} {...rest} />
    </fieldset>
  );
};
