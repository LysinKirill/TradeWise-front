import { colors } from '@/shared/constants/colors';
import { styled } from "styled-components";

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: space-between;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    background: ${colors.darkPurpleButton};
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }

  &.active {
    background: ${colors.purpleButton};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); 
    box-shadow: 0 0 15px ${colors.purpleButton};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 15px;
`;