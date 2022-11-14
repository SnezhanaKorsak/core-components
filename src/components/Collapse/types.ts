import { ReactNode } from 'react';

export type CollapseProps = {
  children?: ReactNode;
  expanded?: boolean;
  collapsedLabel: string;
  expandedLabel?: string;
  openIcon?: string | ReactNode;
  closeIcon?: string | ReactNode;
  clickHandler?: () => void;
};
