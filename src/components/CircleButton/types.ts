import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CircleButtonProps = DefaultButtonProps & {
  label: string | ReactNode;
  view?: 'primary' | 'outlined';
  size?: 'small' | 'large';
};
