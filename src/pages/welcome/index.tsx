import { useTypedDispatch } from "@/app/store";
import { openGetStartedModal, openAuthModal } from "@/app/store/modules/modals/slice";
import * as UI from "./styles";

export const WelcomeWrapper = () => {
  const dispatch = useTypedDispatch();

  const handleOpenGetStartedModal = () => {
    dispatch(openGetStartedModal());
  };

  const handleOpenAuthModal = () => {
    dispatch(openAuthModal());
  };

  return (
    <UI.Container>
      <UI.ContentContainer>
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
      </UI.ContentContainer>
    </UI.Container>
  );
};