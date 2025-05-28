/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { ResearchTable } from './components/ResearchTable';
import { fetchSupportedInstruments } from '@/shared/api/stocks';
import * as UI from './styles';
import { InstrumentDetailsModal } from './components/InstrumentDetailsModal';
import { Instrument } from '../trading/strategies/components/ConnectionModal/types';

export const Research = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadInstruments = async () => {
      try {
        const data:any = await fetchSupportedInstruments();
        setInstruments(data);
        setError('');
      } catch (err) {
        setError('Failed to load instruments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadInstruments();
  }, []);

  const handleRowClick = (instrument: Instrument) => {
    setSelectedInstrument(instrument);
  };

  return (
    <UI.PageResearch>
      
      <UI.ResearchSection>
        {loading ? (
          <UI.Loader>Loading instruments...</UI.Loader>
        ) : (
          <ResearchTable 
            data={instruments} 
            onRowClick={handleRowClick}
          />
        )}
      </UI.ResearchSection>
      {error && <UI.ErrorMessage>{error}</UI.ErrorMessage>}

      {selectedInstrument && (
        <InstrumentDetailsModal
          instrument={selectedInstrument}
          onClose={() => setSelectedInstrument(null)}
        />
      )}
    </UI.PageResearch>
  );
};

export default Research;