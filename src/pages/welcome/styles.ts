import { colors } from '@constants/colors';
import styled from "styled-components";
import  settings  from '@assets/icons/settings.png';
import user  from '@assets/icons/user.png';

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
  height: 70vh;
  padding: 0px;
  
`;

/*export const Header = styled.header`
  max-width: 100vw;
  width: 100%;
  position: fixed; 

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
`;*/

/*export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;*/

/*export const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`;*/

// Add these to your existing styles
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

// Update existing Header styles for better spacing
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
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 16px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 100px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); 
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 25vh;
`;

export const HeroContent = styled.div`
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  opacity: 0.8;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
`;

export const PrimaryButton = styled.button`
  width: 20vw;
  padding: 12px 24px;
  background: ${colors.purpleButton};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${colors.darkPurpleButton};
  &:hover {
    box-shadow: 0 0 15px ${colors.darkPurpleButton};
  }
`;

export const FeatureCards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  width: 250px;
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;