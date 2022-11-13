import { ReactNode } from 'react';

export type LinkProps = {
  label: string;
  href: string;
  isActive?: boolean;
  block?: boolean;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
  disabled?: boolean;
};
