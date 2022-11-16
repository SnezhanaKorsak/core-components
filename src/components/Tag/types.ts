import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TagProps = DefaultDivProps & {
  label: string | ReactNode;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  setChecked?: (checked: boolean) => void;
};
