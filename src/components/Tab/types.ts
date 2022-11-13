import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TabProps = DefaultDivProps & {
  label: string;
  size?: 'm' | 'l';
  variant?: 'alt' | 'default';
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
};
