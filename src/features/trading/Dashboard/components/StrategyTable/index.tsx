import * as UI from '../TradingTable/styles';
import { IStrategyTableProps } from './types';


export const StrategyTable = ({ strategies }: IStrategyTableProps) => (
  <UI.Table>
    <UI.TableHeader>
      <UI.StyledTableRow>
        <UI.TableHeaderCell>Name</UI.TableHeaderCell>
        <UI.TableHeaderCell>Description</UI.TableHeaderCell>
      </UI.StyledTableRow>
    </UI.TableHeader>
    <UI.TableBody>
      {strategies.map((strategy) => (
        <UI.StyledTableRow key={strategy.id}>
          <UI.StyledTableCell>{strategy.name}</UI.StyledTableCell>
          <UI.StyledTableCell>{strategy.description}</UI.StyledTableCell>
        </UI.StyledTableRow>
      ))}
    </UI.TableBody>
  </UI.Table>
);