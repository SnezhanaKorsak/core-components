import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = DefaultButtonProps & {
  label: string;
  view?: 'primary' | 'outlined' | 'link';
  size?: 'xs' | 's' | 'm' | 'l';
  block?: boolean;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
};
