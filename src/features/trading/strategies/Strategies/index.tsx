import * as UI from './styles';

export const Strategies = () => {
  return (
    <UI.DashboardContainer>
      <UI.DashboardHeader>
        <UI.StrategyHeader>
          <div>
            <UI.DashboardTitle>Strategy Management</UI.DashboardTitle>
            <UI.DashboardSubtitle>Create and monitor your trading algorithms</UI.DashboardSubtitle>
          </div>
          <UI.PrimaryButton onClick={() => console.log('New Strategy')}>
            New Strategy
          </UI.PrimaryButton>
        </UI.StrategyHeader>
      </UI.DashboardHeader>

      {/* Strategy creation form */}
      <UI.Section>
        <UI.SectionTitle>Strategy Creating</UI.SectionTitle>
        <UI.FormContainer>
          <UI.InputField 
            placeholder="Enter a strategy name"
          />
          <UI.TemplateSelector>
            <UI.TemplateCard>
              <UI.TemplateTitle>Strategy Template</UI.TemplateTitle>
            </UI.TemplateCard>
          </UI.TemplateSelector>
        </UI.FormContainer>
      </UI.Section>
    </UI.DashboardContainer>
  );
};