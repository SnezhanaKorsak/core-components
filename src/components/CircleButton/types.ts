import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type CircleButtonProps = DefaultButtonProps & {
  children: ReactNode;
  view?: 'primary' | 'outlined';
  size?: 'small' | 'large';
};
