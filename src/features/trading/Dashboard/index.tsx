import { useAuth } from "@app/providers/AuthProvider";
import * as UI from './styles';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <UI.DashboardContainer>
      <UI.DashboardHeader>
        <UI.DashboardTitle>Welcome back, {user?.fullName}</UI.DashboardTitle>
        <UI.DashboardSubtitle>Let's check in on your trading</UI.DashboardSubtitle>
      </UI.DashboardHeader>

      <UI.StatsContainer>
        <UI.StatCard>
          <UI.StatLabel>Total balance</UI.StatLabel>
          <UI.StatValue>$5,739.40</UI.StatValue>
        </UI.StatCard>
        <UI.StatCard>
          <UI.StatLabel>Today's P/L</UI.StatLabel>
          <UI.StatValue >+$1,129.40</UI.StatValue>
        </UI.StatCard>
        <UI.StatCard>
          <UI.StatLabel>Active strategies</UI.StatLabel>
          <UI.StatValue>15</UI.StatValue>
        </UI.StatCard>
      </UI.StatsContainer>

      <UI.MainContent>
        <UI.LeftPanel>
          <UI.SearchInput placeholder="Search for algo by name" />
          <UI.Section>
            <UI.SectionTitle>Portfolio distribution</UI.SectionTitle>
            {/* Add chart component here */}
          </UI.Section>
          <UI.Section>
            <UI.SectionTitle>Strategy</UI.SectionTitle>
            {/* Add strategy components here */}
          </UI.Section>
        </UI.LeftPanel>

        <UI.RightPanel>
          <UI.Section>
            <UI.SectionTitle>Long Trade performance</UI.SectionTitle>
            <UI.Table>
              <UI.TableHeader>
                <UI.StyledTableRow>
                  <UI.TableHeaderCell>Symbol</UI.TableHeaderCell>
                  <UI.TableHeaderCell>Quantity</UI.TableHeaderCell>
                  <UI.TableHeaderCell>Price</UI.TableHeaderCell>
                  <UI.TableHeaderCell>P/L</UI.TableHeaderCell>
                  <UI.TableHeaderCell>P/L %</UI.TableHeaderCell>
                  <UI.TableHeaderCell>Time</UI.TableHeaderCell>
                </UI.StyledTableRow>
              </UI.TableHeader>
              <UI.TableBody>
                {/* Map through trades data */}
                <UI.StyledTableRow>
                  <UI.StyledTableCell>BTC/USD</UI.StyledTableCell>
                  <UI.StyledTableCell>0.5</UI.StyledTableCell>
                  <UI.StyledTableCell>$30,000</UI.StyledTableCell>
                  <UI.StyledTableCell >-$1,129.40</UI.StyledTableCell>
                  <UI.StyledTableCell >-3.76%</UI.StyledTableCell>
                  <UI.StyledTableCell>2:35 PM</UI.StyledTableCell>
                </UI.StyledTableRow>
                {/* Add other rows similarly */}
              </UI.TableBody>
            </UI.Table>
          </UI.Section>
        </UI.RightPanel>
      </UI.MainContent>

      <UI.Footer>
        <UI.FooterLink>New algo</UI.FooterLink>
        <UI.FooterLink>Help</UI.FooterLink>
        <UI.FooterLink>Feedback</UI.FooterLink>
        <UI.FooterLink>About</UI.FooterLink>
        <UI.FooterLink>Changelog</UI.FooterLink>
      </UI.Footer>
    </UI.DashboardContainer>
  );
};