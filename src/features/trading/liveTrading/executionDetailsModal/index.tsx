/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ExecutionOverview } from '@/features/trading/liveTrading/types';
import { fetchExecutionOverview } from '@/shared/api/strategies';
import * as UI from './styles';

interface ExecutionDetailsModalProps {
  executionId: string;
  onClose: () => void;
}

export const ExecutionDetailsModal = ({ executionId, onClose }: ExecutionDetailsModalProps) => {
  const [overview, setOverview] = useState<ExecutionOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data:any = await fetchExecutionOverview(executionId);
        setOverview(data);
      } catch (error) {
        toast.error('Failed to load execution details');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [executionId]);

  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>Execution Details</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        </UI.ModalHeader>

        <UI.ModalBody>
          {loading ? (
            <UI.Loader>Loading Execution Data...</UI.Loader>
          ) : (
            <>
              <UI.ConfigurationSection>
                <UI.SectionTitle>Overview</UI.SectionTitle>
                <UI.ConfigData>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Status:</UI.ConfigLabel>
                    <UI.ConfigValue>
                      <UI.StatusIndicator status={overview?.status || ''}>
                        {overview?.status}
                      </UI.StatusIndicator>
                    </UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Total Amount:</UI.ConfigLabel>
                    <UI.ConfigValue>${overview?.totalInputAmount}</UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Paper Trading:</UI.ConfigLabel>
                    <UI.ConfigValue>{overview?.isPaperTrade ? 'Yes' : 'No'}</UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Shares Owned:</UI.ConfigLabel>
                    <UI.ConfigValue>{overview?.sharesOwned}</UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Instruments:</UI.ConfigLabel>
                    <UI.ConfigValue>
                      {overview?.instruments.join(', ') || 'N/A'}
                    </UI.ConfigValue>
                  </UI.ConfigRow>
                </UI.ConfigData>
              </UI.ConfigurationSection>
            </>
          )}
        </UI.ModalBody>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};