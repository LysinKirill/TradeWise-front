export type TColors =
  | 'inherit'
  | 'accentGreen'
  | 'red'
  | 'lightRed'
  | 'orange'
  | 'blue'
  | 'accentBlack'
  | 'white'
  | 'mainBackgroundGrey'
  | 'lime'
  | 'lightLime'
  | 'greyText'
  | 'yellow'
  | 'darkHover'
  | 'lightHover'
  | 'transperent'
  | 'iconGrey';

export const colors: Record<TColors, string> = {
  inherit: 'inherit',
  accentGreen: '#8BC540',
  red: '#FF4D4D',
  lightRed: '#FFEEEE',
  orange: '#FF9446',
  blue: '#0085FF',
  accentBlack: '#1C1B28',
  white: '#FFFFFF',
  mainBackgroundGrey: '#F4F5F9',
  lime: '#D3F090',
  lightLime: '#F3FBE1',
  greyText: '#686A7A',
  yellow: '#FED141',
  iconGrey: '#BABCD1',
  darkHover: '#1c1b28c2',
  lightHover: '#e6e6e6',
  transperent: 'transparent',
};
