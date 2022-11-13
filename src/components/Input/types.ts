import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputProps = DefaultInputProps & {
  view?: 'primary' | 'secondary' | 'tertiary';
  label?: string;
  buttonAddons?: ReactNode;
  error?: boolean;
  disabled?: boolean;
};
