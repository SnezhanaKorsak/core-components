import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultDivProps = DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export type SwitchProps = DefaultDivProps & {
  checked?: boolean;
  clickHandler?: () => void;
  options: string[];
  size?: 'm' | 'l';
  variant?: 'alt' | 'default';
};
