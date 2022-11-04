const data = [1, 2, 3] as const;

export type TextProps = {
  level: typeof data[number];
  weight?: 'regular' | 'semibold' | 'bold';
};
