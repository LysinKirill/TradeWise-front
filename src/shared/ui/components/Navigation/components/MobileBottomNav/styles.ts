import styled from "styled-components";
import dashBoard from '@assets/icons/icon-dashboard.png';
import strategies from '@assets/icons/icon-strategy.png';
import research from '@assets/icons/icons-research.png';
import { colors } from "@/shared/constants/colors";


export const BottomNavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BottomNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  margin: 0;
`;

export const BottomNavItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    gap: 4px;
    
    &.active {
      //color: ${colors.purpleButton};
      transform: scale(1.1);
      margin-bottom: 0.5rem;
    }

    &:hover {
    transform: scale(1.05);
    
  }
  }
`;

export const DashboardIcon = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.8);
  background: url(${dashBoard}) center/contain no-repeat;
  transition: all 0.2s ease;

  .active & {
    color: ${colors.purpleButton};
    box-shadow: 0 8px 30px rgb(128, 26, 229);
    transform: scale(1.1);
  }
`;

export const StrategiesIcon = styled(DashboardIcon)`
  background: url(${strategies}) center/contain no-repeat;
`;

export const ResearchIcon = styled(DashboardIcon)`
  background: url(${research}) center/contain no-repeat;
`;
