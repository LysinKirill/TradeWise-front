import { IResearchData } from '../types';
import * as UI from '../styles';

export const ResearchTable = ({ data }: { data: IResearchData[] }) => (
  <UI.Table>
    <UI.TableHeader>
      <UI.StyledTableRow>
        <UI.TableHeaderCell>FIGI</UI.TableHeaderCell>
        <UI.TableHeaderCell>Name</UI.TableHeaderCell>
        <UI.TableHeaderCell>Lot Size</UI.TableHeaderCell>
        <UI.TableHeaderCell>Currency</UI.TableHeaderCell>
        <UI.TableHeaderCell>Sector</UI.TableHeaderCell>
        <UI.TableHeaderCell>Buy Available</UI.TableHeaderCell>
        <UI.TableHeaderCell>Sell Available</UI.TableHeaderCell>
      </UI.StyledTableRow>
    </UI.TableHeader>
    <UI.TableBody>
      {data.map((item, index) => (
        <UI.StyledTableRow key={item.id}>
          <UI.StyledTableCell>{item.figi}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.name}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.lot}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.currency.toUpperCase()}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.sector}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.buyAvailable ? 'Yes' : 'No'}</UI.StyledTableCell>
          <UI.StyledTableCell>{item.sellAvailable ? 'Yes' : 'No'}</UI.StyledTableCell>
        </UI.StyledTableRow>
      ))}
    </UI.TableBody>
  </UI.Table>
);


