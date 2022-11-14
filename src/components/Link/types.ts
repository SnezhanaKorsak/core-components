import { ReactNode } from 'react';

export type LinkProps = {
  label: string | ReactNode;
  href: string;
  isActive?: boolean;
  block?: boolean;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
  disabled?: boolean;
};
