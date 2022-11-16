import { ReactNode } from 'react';

export type SelectProps = {
  children: ReactNode;
  label: string | ReactNode;
  block?: boolean;
  visibleOptions?: number;
  disabled: boolean;
  changeHandler?: (value: string | number | ReactNode) => void;
};
