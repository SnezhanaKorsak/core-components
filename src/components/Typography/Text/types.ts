import { DetailedHTMLProps, HTMLAttributes } from 'react';

const data = [1, 2, 3] as const;

type DefaultDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TextProps = DefaultDivProps & {
  level: typeof data[number];
  font?: string;
  weight?: 'extrabold' | 'bold' | 'semibold' | 'medium' | 'regular';
  color?: string;
  textAlign?:
    | 'center'
    | 'end'
    | 'initial'
    | 'justify'
    | 'left'
    | 'revert'
    | 'right'
    | 'start'
    | 'unset';
};
