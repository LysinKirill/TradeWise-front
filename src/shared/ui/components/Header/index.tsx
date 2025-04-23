// src/shared/ui/components/Header/index.tsx
import { useAuth } from '@/app/providers/AuthProvider';
import Logo from '@assets/images/Logo.png';
import * as UI from './style';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <UI.Header>
      <UI.HeaderContent>
        <UI.Logo>
          <UI.LogoIcon src={Logo} />
          TradeWise
        </UI.Logo>
        {isAuthenticated && (
          <UI.HeaderRight>
            <UI.HeaderButton onClick={() => console.log('Profile')}>
              <UI.UserIcon />
              {user?.fullName}
            </UI.HeaderButton>
            <UI.HeaderButton onClick={() => console.log('Settings')}>
              <UI.SettingsIcon />
            </UI.HeaderButton>
            <UI.HeaderButton onClick={logout}>
              <UI.LogoutIcon /> Logout
            </UI.HeaderButton>
          </UI.HeaderRight>
        )}
      </UI.HeaderContent>
    </UI.Header>
  );
};

export default Header;