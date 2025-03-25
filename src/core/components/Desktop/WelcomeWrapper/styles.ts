import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
  height: 70vh;
  padding: 0px;
`;

export const Header = styled.header`
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
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;

export const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
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
  margin: 10px 0;
  opacity: 0.8;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
`;

export const PrimaryButton = styled.button`
  width: 15vw;
  padding: 12px 24px;
  background: ${colors.purpleButton};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
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