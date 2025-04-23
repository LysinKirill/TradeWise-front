import { ThemeProvider, useTheme } from 'styled-components';

import { useMediaQuery } from '@hooks/useMediaQuery';

export const theme = {
  isMobile: false, 
};

export type TAppTheme = typeof theme;

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <ThemeProvider theme={{ ...theme, isMobile }}>
      {children}
    </ThemeProvider>
  );
};

export const useAppTheme = () => {
  return useTheme() as TAppTheme & { isMobile: boolean };
};