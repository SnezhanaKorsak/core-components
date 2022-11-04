import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = DefaultButtonProps & {
  children: ReactNode;
  view?: 'primary' | 'outlined' | 'link';
  size?: 'xs' | 's' | 'm' | 'l';
  block?: boolean;
};
