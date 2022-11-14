import { ReactNode } from 'react';

export type SelectItem = {
  id: string | number;
  content: string | number | ReactNode;
};

export type SelectProps = {
  label: string | ReactNode;
  options: SelectItem[];
  block?: boolean;
  visibleOptions?: number;
  disabled: boolean;
  changeHandler?: (value: string | number | ReactNode) => void;
};
