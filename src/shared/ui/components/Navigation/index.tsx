import { ROUTES } from "@/shared/constants/routes";
import { NavLink } from "react-router-dom";
import * as UI from './styles';

enum NavigationTab {
  Dashboard = 'Dashboard',
  Strategies = 'Strategies',
  Research = 'Research',
  Backtesting = 'Backtesting',
  LiveTrading = 'Live Trading',
}

interface NavigationProps {
  isAuthenticated: boolean;
}

export const Navigation = ({ isAuthenticated }: NavigationProps) => {
  const getRoute = (tab: NavigationTab) => {
    switch (tab) {
      case NavigationTab.Dashboard: return ROUTES.DASHBOARD;
      case NavigationTab.Strategies: return ROUTES.STRATEGIES;
      case NavigationTab.Research: return ROUTES.RESEARCH;
      case NavigationTab.Backtesting: return ROUTES.BACKTESTING;
      case NavigationTab.LiveTrading: return ROUTES.LIVETRADING;
      default: return ROUTES.DASHBOARD;
    }
  };

  return isAuthenticated ? (
    <UI.NavLinks>
      {Object.values(NavigationTab).map((tab) => (
        <UI.NavLink
          key={tab}
          as={NavLink}
          to={getRoute(tab)}
          style={({ isActive }: { isActive: boolean }) => ({
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          {tab}
        </UI.NavLink>
      ))}
    </UI.NavLinks>
  ) : null;
};