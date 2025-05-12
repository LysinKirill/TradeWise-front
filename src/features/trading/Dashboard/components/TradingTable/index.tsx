import * as UI from './styles';
import { IPortfolioData } from './types';

export const TradingTable = ({ data }: { data: IPortfolioData[] }) => (
  <UI.Table>
    <UI.TableHeader>
      <UI.StyledTableRow>
        <UI.TableHeaderCell>Ticker</UI.TableHeaderCell>
        <UI.TableHeaderCell>Quantity</UI.TableHeaderCell>
        <UI.TableHeaderCell>Current Price</UI.TableHeaderCell>
        <UI.TableHeaderCell>Daily Yield</UI.TableHeaderCell>
      </UI.StyledTableRow>
    </UI.TableHeader>
    <UI.TableBody>
      {data.map((position, index) => (
        <UI.StyledTableRow key={index}>
          <UI.StyledTableCell>{position.ticker}</UI.StyledTableCell>
          <UI.StyledTableCell>{position.quantity}</UI.StyledTableCell>
          <UI.StyledTableCell>${position.currentPrice.toLocaleString()}</UI.StyledTableCell>
          <UI.StyledTableCell>{position.dailyYield}%</UI.StyledTableCell>
        </UI.StyledTableRow>
      ))}
    </UI.TableBody>
  </UI.Table>
);
