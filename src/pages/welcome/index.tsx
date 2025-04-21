import { useAuth } from "@/app/providers/AuthProvider";
import { useTypedDispatch } from "@/app/store";
import { openGetStartedModal, openAuthModal } from "@/app/store/modules/modals/slice";
import { Navigation } from '@shared/ui/components/Navigation';
import { Outlet } from "react-router-dom";
import * as UI from "./styles";
import Logo from '@assets/images/Logo.png';


export const WelcomeWrapper = ({ isMobile }: { isMobile: boolean }) => {
  const dispatch = useTypedDispatch();
  const { isAuthenticated, user } = useAuth();

  const handleOpenGetStartedModal = () => {
    dispatch(openGetStartedModal());
  };

  const handleOpenAuthModal = () => {
    dispatch(openAuthModal());
  };

  return (
    <UI.Container>
      <UI.Header>
        <UI.HeaderContent>
          <UI.Logo>
            <UI.LogoIcon src={Logo} />
            TradeWise
          </UI.Logo>
          {isAuthenticated && (
            <UI.HeaderRight>
              <Navigation  isAuthenticated/>
              <UI.HeaderButton onClick={() => console.log('Profile')}>
                <UI.UserIcon />
                {user?.fullName}
              </UI.HeaderButton>
              <UI.HeaderButton onClick={() => console.log('Settings')}>
                <UI.SettingsIcon />
              </UI.HeaderButton>
            </UI.HeaderRight>
          )}
        </UI.HeaderContent>
      </UI.Header>

      <UI.ContentContainer>
        {isAuthenticated ? (
          <Outlet /> 
        ) : (
          <UI.HeroSection>
            <UI.HeroContent>
              <UI.Title>Welcome to TradeWise</UI.Title>
              <UI.Subtitle>
                A platform for algorithmic trading, with powerful tools for
                developers and traders.
              </UI.Subtitle>
              <UI.ButtonGroup>
                <UI.PrimaryButton onClick={handleOpenAuthModal}>Sign in</UI.PrimaryButton>
                <UI.SecondaryButton onClick={handleOpenGetStartedModal}>
                  Get started
                </UI.SecondaryButton>
              </UI.ButtonGroup>
            </UI.HeroContent>
          </UI.HeroSection>
        )}
      </UI.ContentContainer>
    </UI.Container>
  );
};