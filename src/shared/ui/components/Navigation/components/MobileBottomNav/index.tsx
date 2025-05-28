import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import * as UI from './styles';

const MobileBottomNav = () => (
  <UI.BottomNavContainer>
    <UI.BottomNavList>
      <UI.BottomNavItem>
        <NavLink to={ROUTES.DASHBOARD}>
          <UI.DashboardIcon />
          <span>Dashboard</span>
        </NavLink>
      </UI.BottomNavItem>
      <UI.BottomNavItem>
        <NavLink to={ROUTES.STRATEGIES}>
          <UI.StrategiesIcon />
          <span>Strategies</span>
        </NavLink>
      </UI.BottomNavItem>
      <UI.BottomNavItem>
        <NavLink to={ROUTES.RESEARCH}>
          <UI.ResearchIcon />
          <span>Research</span>
        </NavLink>
      </UI.BottomNavItem>
      <UI.BottomNavItem>
        <NavLink to={ROUTES.LIVETRADING}>
          <UI.StrategiesIcon />
          <span>Live Trading</span>
        </NavLink>
      </UI.BottomNavItem>
      <UI.BottomNavItem>
        <NavLink to={ROUTES.BACKTESTING}>
          <UI.StrategiesIcon />
          <span>Backtesting</span>
        </NavLink>
      </UI.BottomNavItem>
    </UI.BottomNavList>
  </UI.BottomNavContainer>
);

export default MobileBottomNav;