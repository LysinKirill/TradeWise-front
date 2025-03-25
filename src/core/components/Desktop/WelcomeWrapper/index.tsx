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
          
          <UI.NavIcons>
            <UI.IconButton></UI.IconButton>
            <UI.IconButton>🌍</UI.IconButton>
            <UI.IconButton>⚙️</UI.IconButton>
          </UI.NavIcons>
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

        <UI.FeatureCards>
          <UI.Card>
            <UI.CardIcon>⚡</UI.CardIcon>
            <UI.CardTitle>Developers</UI.CardTitle>
            <UI.CardDescription>
              Build and trade using our powerful APIs
            </UI.CardDescription>
          </UI.Card>
          <UI.Card>
            <UI.CardIcon>📊</UI.CardIcon>
            <UI.CardTitle>Traders</UI.CardTitle>
            <UI.CardDescription>
              Trade using our beautiful web interface
            </UI.CardDescription>
          </UI.Card>
        </UI.FeatureCards>
      </UI.ContentContainer>
    </UI.Container>
  );
};
