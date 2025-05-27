import { useState } from 'react';
import * as UI from './styles';
import { IPortfolioData } from './types';
import { InstrumentDetailsModal } from '@/features/research/components/InstrumentDetailsModal';

export const TradingTable = ({ data }: { data: IPortfolioData[] }) => {
  const [selectedInstrument, setSelectedInstrument] = useState<IPortfolioData | null>(null);

  const handleRowClick = (instrument: IPortfolioData) => {
    setSelectedInstrument(instrument);
  };

  return (
    <>
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
            <UI.StyledTableRow 
              key={index}
              onClick={() => handleRowClick(position)}
              clickable
            >
              <UI.StyledTableCell>{position.ticker}</UI.StyledTableCell>
              <UI.StyledTableCell>{position.quantity}</UI.StyledTableCell>
              <UI.StyledTableCell>{position.currentPrice.toLocaleString()}</UI.StyledTableCell>
              <UI.StyledTableCell>{position.dailyYield}</UI.StyledTableCell>
            </UI.StyledTableRow>
          ))}
        </UI.TableBody>
      </UI.Table>

      {selectedInstrument && (
        <InstrumentDetailsModal
          instrument={{
            ...selectedInstrument,
            id: selectedInstrument.instrumentId, 
          }}
          onClose={() => setSelectedInstrument(null)}
        />
      )}
    </>
  );
};