import * as UI from "./styles";
import Logo from "../../../assets/images/Logo.png";


interface DesktopWelcomeProps {
  onGetStartedClick: () => void;
}

export const DesktopWelcome = ({ onGetStartedClick }: DesktopWelcomeProps) => {
  return (
    <UI.Container>
      <UI.Header>
        <UI.HeaderContent>
          <UI.Logo>
            <UI.LogoIcon src={Logo} />
            TradeWise
          </UI.Logo>
        </UI.HeaderContent>
      </UI.Header>
      
      <UI.ContentContainer>
        <UI.HeroSection>
          <UI.HeroContent>
            <UI.Title>Welcome to TradeWise</UI.Title>
            <UI.Subtitle>
              A platform for algorithmic trading, with powerful tools for
              developers and traders.
            </UI.Subtitle>
            <UI.ButtonGroup>
              <UI.PrimaryButton>Sign in</UI.PrimaryButton>
              <UI.SecondaryButton onClick={onGetStartedClick}>
                Get started
              </UI.SecondaryButton>
            </UI.ButtonGroup>
          </UI.HeroContent>
        </UI.HeroSection>
      </UI.ContentContainer>
    </UI.Container>
  );
};
