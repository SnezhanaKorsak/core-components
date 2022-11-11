// colors
const primary = '#185CFF';
const secondary = '#002B4E';
const tertiary = '#F0F9FF';
const helperBlue1 = '#F0F9FF';
const helperBlue2 = '#607D94';
const helperBlue3 = '#C9DCEC';
const black = '#292D33';
const grey = '#9497A1';
const background = '#F1F6FA';
const redError = '#C14040';
const white = '#FFFFFF';
const light = 'rgba(255,255,255,0.4)';

//fonts
const fonts = ['Manrope, sans-serif', 'Open Sans, sans-serif'];

// shadows

const buttonShadows = '0 12px 30px rgba(24, 92, 255, 0.18)';
const cardShadows = [
  '0 2px 20px 17px rgba(24, 92, 255, 0.04)',
  '0 12px 30px 17px rgba(24, 92, 255, 0.04)',
  '0 4px 12px rgba(12, 68, 204, 0.1)',
];
const dropdownShadows = '0 2px 6px rgba(0, 43, 78, 0.15)';

export const theme = {
  colors: {
    primary,
    secondary,
    tertiary,
    helperBlue1,
    helperBlue2,
    helperBlue3,
    black,
    grey,
    white,
    light,
    background,
    redError,
  },
  shadows: { buttonShadows, cardShadows, dropdownShadows },
  sizes: {
    spaces: [0, 5, 10, 20, 32],
    fontSizes: [12, 14, 16, 18, 20, 22, 24, 30, 32, 38, 46],
    fontWeight: [300, 400, 500, 600, 700, 800],
  },
  borderRadius: [6, 10, 14, 18, 20],
  fonts,
};
