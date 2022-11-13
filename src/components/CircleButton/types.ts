import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CircleButtonProps = DefaultButtonProps & {
  label: string;
  view?: 'primary' | 'outlined';
  size?: 'small' | 'large';
};
