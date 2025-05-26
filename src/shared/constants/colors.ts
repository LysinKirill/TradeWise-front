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
  | 'secondaryText'
  | 'darkPurple'
  | 'neonPurple'
  | 'neonBlue'
  | 'backgroundDark'
  | 'textPrimary'
  | 'textSecondary'
  | 'accentGreen'
  | 'accentRed'
  | 'borderColor'
  | 'headerBg'
  | 'rowHover'
  | 'paperBackground'
  | 'inputBackground'
  | 'primaryColor'
  | 'statusPendingBg'
  | 'statusPendingText'
  | 'statusActiveBg'
  | 'statusActiveText'
  | 'statusCompletedBg'
  | 'statusCompletedText'
  | 'disabledBg'

export const colors: Record<TColors, string> = {
  inherit: 'inherit',
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
  darkPurple: '#1A1A2E',
  neonPurple: '#8A2BE2',
  neonBlue: '#00F3FF',
  backgroundDark: '#0A0A1A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0C8',
  accentGreen: '#00FF88',
  accentRed: '#FF467E',
  borderColor: '#2E2E4A',
  headerBg: '#2A1A4A',
  rowHover: '#2E2E4A',
  paperBackground: '#1A1A2E',
  inputBackground: '#2A2A4A',
  primaryColor: '#8A2BE2',
  statusPendingBg: '#FEF3C7',
  statusPendingText: '#D97706',
  statusActiveBg: '#D1FAE5',
  statusActiveText: '#059669',
  statusCompletedBg: '#DBEAFE',
  statusCompletedText: '#2563EB',
  disabledBg: '#2D2D44',
};

export const chartColors = {
  accent: '#2196f3',    // Deep blue
  positive: '#4caf50',  // Green for gains
  negative: '#f44336',  // Red for losses
  neutral: '#9e9e9e',   // Grey for neutral
  background: '#1e1e1e', // Chart background
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3',
  primary: '#271C47',
  secondary: '#5135A6',
  tertiary: '#5A0273',
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