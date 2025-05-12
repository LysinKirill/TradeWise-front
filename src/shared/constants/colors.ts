export type TColors =
  | 'darkPurpleButton'
  | 'purpleButton'
  | 'backgroundBlack'
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
  | 'iconGrey'
  | 'inputBg'
  | 'cardBg'
  | 'primaryText'
  | 'secondaryText';

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
  backgroundBlack: '#141217',
  purpleButton: '#801AE5',
  darkPurpleButton: '#302938',
  inputBg: '#1E1E1E',
  cardBg: '#2B2B2B',
  primaryText: '#FFFFFF',
  secondaryText: '#CCCCCC',
};

export const chartColors = {
  primary: '#90caf9',  // Light blue
  secondary: '#64b5f6', // Medium blue
  tertiary: '#42a5f5',  // Darker blue
  accent: '#2196f3',    // Deep blue
  positive: '#4caf50',  // Green for gains
  negative: '#f44336',  // Red for losses
  neutral: '#9e9e9e',   // Grey for neutral
  background: '#1e1e1e', // Chart background
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3'
};

export const COLORS = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.tertiary,
  chartColors.accent,
  '#7e57c2',  // Purple
  '#ffa726',  // Orange
  '#26a69a',  // Teal
  '#ec407a'   // Pink
];

export const centerLabelGradient = `linear-gradient(
  135deg,
  ${chartColors.primary} 0%,
  ${chartColors.secondary} 100%
)`;

export const statusColors = {
  positive: chartColors.positive,
  negative: chartColors.negative,
  neutral: chartColors.neutral
};