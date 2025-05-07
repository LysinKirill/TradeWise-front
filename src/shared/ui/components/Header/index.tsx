// src/shared/ui/components/Header/index.tsx
import { useAuth } from '@/app/providers/AuthProvider';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import Logo from '@assets/images/Logo.png';
import { useState } from 'react';
import { Navigation } from '../Navigation';
import * as UI from './style';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <UI.Header>
      <UI.HeaderContent>
        <UI.Logo>
          <UI.LogoIcon src={Logo} />
          TradeWise
        </UI.Logo>
        
        {isAuthenticated && (
          <>
            {!isMobile && <Navigation isAuthenticated={isAuthenticated} />}
            
            <UI.HeaderRight>
              {isMobile && (
                <UI.MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <UI.HamburgerIcon />
                </UI.MenuButton>
              )}
              
              {!isMobile && (
                <>
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
                </>
              )}
            </UI.HeaderRight>
          </>
        )}
      </UI.HeaderContent>
      
      {/* Mobile Sidebar */}
      {!isMobile && (
      <UI.MobileSidebar $isOpen={isMenuOpen}>
        <UI.SidebarContent>
          <UI.SidebarHeader>
            <UI.UserInfo>
              <UI.UserIcon />
              {user?.fullName}
            </UI.UserInfo>
            <UI.CloseButton onClick={() => setIsMenuOpen(false)}>×</UI.CloseButton>
          </UI.SidebarHeader>
          
          <Navigation isAuthenticated={isAuthenticated} />
          <UI.SidebarFooter>
            <UI.HeaderButton onClick={logout}>
              <UI.LogoutIcon /> Logout
            </UI.HeaderButton>
          </UI.SidebarFooter>
        </UI.SidebarContent>
      </UI.MobileSidebar>
      )}
    </UI.Header>
  );
};

export default Header;