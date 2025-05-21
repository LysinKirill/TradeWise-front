import { useAuth } from '@/app/providers/AuthProvider';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import Logo from '@assets/images/Logo.png';
import { useState } from 'react';
import { Navigation } from '../Navigation';
import * as UI from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <UI.Header>
      <UI.HeaderContent>
        {isMobile ?
          <UI.Logo>
            TradeWise
          </UI.Logo> :
          <UI.Logo>
            <UI.LogoIcon src={Logo} onClick={() => { navigate('/'); closeDropdown(); }} />
            TradeWise
          </UI.Logo>
        }

        {isAuthenticated && (
          <>
            {!isMobile && <Navigation isAuthenticated={isAuthenticated} />}

            <UI.HeaderRight>
              {!isMobile && (
                <UI.ProfileWrapper
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}>
                  <UI.HeaderButton onClick={toggleDropdown}>
                    <UI.UserIcon />
                    {user?.fullName}
                  </UI.HeaderButton>

                  {isDropdownOpen && (
                    <UI.ProfileDropdown>
                      <UI.DropdownItem onClick={() => { navigate('/settings'); closeDropdown(); }}>
                        <UI.SettingsIcon />
                        Settings
                      </UI.DropdownItem>
                      <UI.DropdownItem onClick={() => { logout(); closeDropdown(); }}>
                        <UI.LogoutIcon />
                        Logout
                      </UI.DropdownItem>
                    </UI.ProfileDropdown>
                  )}
                </UI.ProfileWrapper>
              )}
            </UI.HeaderRight>
          </>
        )}
      </UI.HeaderContent>
    </UI.Header>
  );
};

export default Header;
