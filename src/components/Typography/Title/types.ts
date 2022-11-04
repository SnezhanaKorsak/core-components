const data = [1, 2, 3, 4, 5, 6, 7] as const;

export type TitleProps = {
  level: typeof data[number];
  weight?: 'medium' | 'semibold' | 'bold' | 'extrabold';
};
