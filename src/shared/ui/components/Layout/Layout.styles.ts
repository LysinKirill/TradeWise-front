import styled from 'styled-components';

import { colors } from '../../../constants/colors';

import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#90caf9',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export const Layout = styled.div`
  * {
    font-family: 'DIN Pro', sans-serif;
    transition: all 0.2s ease-in-out;
  }
`;

export const Container = styled.main`
  font-family: 'dinpro', sans-serif;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 273px;
  height: 32px;
  margin-bottom: 36px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserProfileButtonscontainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 32px;
  padding: 6px 12px 8px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: ${colors.iconGrey};
  cursor: pointer;

  :hover {
    background-color: ${colors.accentGreen};

    & > svg {
      cursor: pointer;
    }
  }
`;
