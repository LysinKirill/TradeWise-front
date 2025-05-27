import * as UI from '../../styles';
import { ResearchTableProps } from '../../types';

export const ResearchTable = ({ data, onRowClick }: ResearchTableProps) => (
  <UI.TableWrapper>
    <UI.Table>
      <UI.TableHeader>
        <UI.StyledTableRow>
          <UI.TableHeaderCell>FIGI</UI.TableHeaderCell>
          <UI.TableHeaderCell>Name</UI.TableHeaderCell>
          <UI.TableHeaderCell>Lot Size</UI.TableHeaderCell>
          <UI.TableHeaderCell>Currency</UI.TableHeaderCell>
          <UI.TableHeaderCell>Sector</UI.TableHeaderCell>
          <UI.TableHeaderCell>Buy</UI.TableHeaderCell>
          <UI.TableHeaderCell>Sell</UI.TableHeaderCell>
        </UI.StyledTableRow>
      </UI.TableHeader>
      <UI.TableBody>
        {data.map((item) => (
          <UI.StyledTableRow 
            key={item.id} 
            onClick={() => onRowClick(item)}
          >
            <UI.StyledTableCell>{item.figi}</UI.StyledTableCell>
            <UI.StyledTableCell>{item.name}</UI.StyledTableCell>
            <UI.StyledTableCell>{item.lot}</UI.StyledTableCell>
            <UI.StyledTableCell>{item.currency.toUpperCase()}</UI.StyledTableCell>
            <UI.StyledTableCell>{item.sector}</UI.StyledTableCell>
            <UI.StyledTableCell $negative={!item.buyAvailable}>
              {item.buyAvailable ? 'Yes' : 'No'}
            </UI.StyledTableCell>
            <UI.StyledTableCell $negative={!item.sellAvailable}>
              {item.sellAvailable ? 'Yes' : 'No'}
            </UI.StyledTableCell>
          </UI.StyledTableRow>
        ))}
      </UI.TableBody>
    </UI.Table>
  </UI.TableWrapper>
);