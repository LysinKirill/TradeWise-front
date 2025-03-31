import * as UI from "./styles";

export const MobileWelcome = () => {
  
  return (
    <UI.Container>
      <UI.Title>Welcome to TradeWise</UI.Title>
      <UI.Description>
        Your one-stop solution for all trading needs.
      </UI.Description>
      <UI.Features>
        <UI.FeatureItem>Real-time market data</UI.FeatureItem>
        <UI.FeatureItem>Advanced charting tools</UI.FeatureItem>
        <UI.FeatureItem>Customizable alerts</UI.FeatureItem>
      </UI.Features>
      <UI.GetStartedButton>Get Started</UI.GetStartedButton>
    </UI.Container>
  );
};

export default MobileWelcome;