import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultUListProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type DefaultOListProps = DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>;

export type ListProps = (DefaultUListProps | DefaultOListProps) & {
  children: ReactNode;
  tag: 'ol' | 'ul';
  marker?: string | ReactNode;
};
