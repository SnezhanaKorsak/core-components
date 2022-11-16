import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultLinkProps = DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;

export type LinkProps = DefaultLinkProps & {
  label: string | ReactNode;
  href: string;
  isActive?: boolean;
  block?: boolean;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
  disabled?: boolean;
};
