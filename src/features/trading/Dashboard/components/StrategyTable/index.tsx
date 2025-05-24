import * as UI from '../TradingTable/styles';
import { IStrategyTableProps } from './types';
import { formatDateLocale } from '@shared/utils/date'; 

export const StrategyTable = ({ strategies }: IStrategyTableProps) => (
  <UI.Table>
    <UI.TableHeader>
      <UI.StyledTableRow>
        <UI.TableHeaderCell>Name</UI.TableHeaderCell>
        <UI.TableHeaderCell>Status</UI.TableHeaderCell>
        <UI.TableHeaderCell>Profit</UI.TableHeaderCell>
        <UI.TableHeaderCell>Risk Level</UI.TableHeaderCell>
        <UI.TableHeaderCell>Created</UI.TableHeaderCell>
        <UI.TableHeaderCell>Description</UI.TableHeaderCell>
      </UI.StyledTableRow>
    </UI.TableHeader>
    <UI.TableBody>
      {strategies.map((strategy) => (
        <UI.StyledTableRow key={strategy.id}>
          <UI.StyledTableCell>{strategy.title}</UI.StyledTableCell>
          <UI.StyledTableCell>
            <UI.StatusIndicator status={strategy.status}>
              {strategy.status}
            </UI.StatusIndicator>
          </UI.StyledTableCell>
          <UI.StyledTableCell>
            {strategy.profit}%
          </UI.StyledTableCell>
          <UI.StyledTableCell>
            {Array(strategy.riskLevel).fill('★').join('')}
          </UI.StyledTableCell>
          <UI.StyledTableCell>
            {formatDateLocale(strategy.createdAt)}
          </UI.StyledTableCell>
          <UI.StyledTableCell>{strategy.description}</UI.StyledTableCell>
        </UI.StyledTableRow>
      ))}
    </UI.TableBody>
  </UI.Table>
);