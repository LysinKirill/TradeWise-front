import styled from "styled-components";

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
      color: #90caf9;
    }
  }
`;

export const DashboardIcon = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.8);
  //mask: url('/icons/dashboard.svg') center/contain no-repeat;
  transition: all 0.2s ease;

  .active & {
    background: #90caf9;
    transform: scale(1.1);
  }
`;

export const StrategiesIcon = styled(DashboardIcon)`
  //mask-image: url('/icons/strategies.svg');
`;

export const ResearchIcon = styled(DashboardIcon)`
  //mask-image: url('/icons/research.svg');
`;
