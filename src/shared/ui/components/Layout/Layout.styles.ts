import styled, { css } from 'styled-components';

import { colors } from '../../../constants/colors';

import { createTheme } from '@mui/material/styles';
import  settings  from '@assets/icons/settings.png';
import user  from '@assets/icons/user.png';

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

export const Header = styled.header`
  max-width: 100vw;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 1px; 
    background: #fff;
    opacity: 0.2; 
  }

  ${({ theme }) => theme.isMobile && css`
    padding: 0.3rem 0;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1440px;
  margin: 0 auto;

  ${({ theme }) => theme.isMobile && css`
    padding: 0 1rem;
  `}
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.2rem;
  `}
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 16px;

  ${({ theme }) => theme.isMobile && css`
    width: 24px;
    height: 24px;
  `}
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${({ theme }) => theme.isMobile && css`
    gap: 0.8rem;
  `}
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  ${({ theme }) => theme.isMobile && css`
    padding: 0.5rem;
    font-size: 0.9rem;
  `}
`;

export const UserIcon = styled.span`
  width: 20px;
  height: 20px;
  background: url(${user}) center/contain no-repeat;
  filter: brightness(0) invert(1);
`;

export const SettingsIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url(${settings}) center/contain no-repeat;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(180deg);
  }
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
