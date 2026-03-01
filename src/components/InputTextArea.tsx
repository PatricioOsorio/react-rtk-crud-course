import type { ComponentProps } from 'react';

export interface IInputTextAreaProps extends ComponentProps<'textarea'> {
  label: string;
  placeholder: string;
}

export const InputTextArea = ({ label, placeholder, ...rest }: IInputTextAreaProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <textarea className="textarea" placeholder={placeholder} {...rest} />
    </fieldset>
  );
};
