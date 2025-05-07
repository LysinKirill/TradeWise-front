import * as UI from './styles';

interface TradeData {
  symbol: string;
  quantity: number;
  price: number;
  pl: number;
  plPercent: number;
  time: string;
}

export const TradingTable = ({ data }: { data: TradeData[] }) => (
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
      {data.map((trade, index) => (
        <UI.StyledTableRow key={index}>
          <UI.StyledTableCell>{trade.symbol}</UI.StyledTableCell>
          <UI.StyledTableCell>{trade.quantity}</UI.StyledTableCell>
          <UI.StyledTableCell>${trade.price.toLocaleString()}</UI.StyledTableCell>
          <UI.StyledTableCell $negative={trade.pl < 0}>
            {trade.pl >= 0 ? '+' : ''}${trade.pl.toFixed(2)}
          </UI.StyledTableCell>
          <UI.StyledTableCell $negative={trade.pl < 0}>
            {trade.plPercent >= 0 ? '+' : ''}{trade.plPercent.toFixed(2)}%
          </UI.StyledTableCell>
          <UI.StyledTableCell>{trade.time}</UI.StyledTableCell>
        </UI.StyledTableRow>
      ))}
    </UI.TableBody>
  </UI.Table>
);