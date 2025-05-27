import styled, { css } from 'styled-components';
import settings from '@assets/icons/settings.png';
import user from '@assets/icons/user.png';
import logoutIcon from '@assets/icons/icons-logout.png';
import { colors } from '@/shared/constants/colors';

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
    height: 4rem;
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
    height: 3rem;
    justify-content: center;
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
    font-size: 1.8rem;
    text-shadow: 0 0px 3px rgb(251, 251, 251);
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
  gap: 0.5rem;

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

export const LogoutIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url(${logoutIcon}) center/contain no-repeat;
  filter: brightness(0) invert(1);
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerIcon = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: white;
    left: 0;
  }
  
  &::before { top: -6px; }
  &::after { bottom: -6px; }
`;

export const MobileSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 80%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1100;
  transition: left 0.3s ease;
  padding: 1rem;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-width: 160px;
  z-index: 10;
  padding: 0.5rem 0;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  color: ${colors.white};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${colors.purpleButton}20;
  }
`;