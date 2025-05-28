/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Execution } from '@/features/trading/liveTrading/types';
import { fetchExecutions, fetchTradingStrategies } from '@/shared/api/strategies';
import * as UI from './styles';

interface StrategyDetailsModalProps {
  strategyId: string;
  onClose: () => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export const StrategyDetailsModal = ({
  strategyId,
  onClose,
  onDelete,
  onEdit,
}: StrategyDetailsModalProps) => {
  const [details, setDetails] = useState<any>(null);
  const [executions, setExecutions] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [strategiesResponse, executionsResponse]:any = await Promise.all([
          fetchTradingStrategies(),
          fetchExecutions()
        ]);

        const strategy = strategiesResponse.find((s: any) => s.id === strategyId);
        const filteredExecutions = executionsResponse.filter(
          (e: Execution) => e.strategyId === strategyId
        );

        setDetails(strategy);
        setExecutions(filteredExecutions);
      } catch (error) {
        console.error('Failed to load strategy details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [strategyId]);

  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>{details?.title || 'Strategy Details'}</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        </UI.ModalHeader>

        <UI.ModalBody>
          {loading ? (
            <UI.Loader>Loading Strategy Data...</UI.Loader>
          ) : (
            <>
              <UI.ConfigurationSection>
                <UI.SectionTitle>Configuration</UI.SectionTitle>
                <UI.ConfigData>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Created:</UI.ConfigLabel>
                    <UI.ConfigValue>
                      {new Date(details?.createdAt).toLocaleString()}
                    </UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Last Updated:</UI.ConfigLabel>
                    <UI.ConfigValue>
                      {new Date(details?.updatedAt).toLocaleString()}
                    </UI.ConfigValue>
                  </UI.ConfigRow>
                  <UI.ConfigRow>
                    <UI.ConfigLabel>Description:</UI.ConfigLabel>
                    <UI.ConfigValue>{details?.description || 'N/A'}</UI.ConfigValue>
                  </UI.ConfigRow>
                </UI.ConfigData>
              </UI.ConfigurationSection>

              <UI.ExecutionSection>
                <UI.SectionTitle>Execution History</UI.SectionTitle>
                <UI.ExecutionTable>
                  <UI.TableHeader>
                    <UI.TableRow>
                      <UI.TableHeaderCell>Status</UI.TableHeaderCell>
                      <UI.TableHeaderCell>Started</UI.TableHeaderCell>
                      <UI.TableHeaderCell>Duration</UI.TableHeaderCell>
                    </UI.TableRow>
                  </UI.TableHeader>
                  <UI.TableBody>
                    {executions.map((execution) => (
                      <UI.TableRow key={execution.id}>
                        <UI.TableCell>
                          <UI.StatusIndicator status={execution.status}>{execution.status}</UI.StatusIndicator>
                        </UI.TableCell>
                        <UI.TableCell>
                          {new Date(execution.createdAt).toLocaleString()}
                        </UI.TableCell>
                        <UI.TableCell>
                          {execution.updatedAt
                            ? `${Math.round(
                                (new Date(execution.updatedAt).getTime() -
                                new Date(execution.createdAt).getTime()
                              ) / 1000)}s`
                            : 'N/A'}
                        </UI.TableCell>
                      </UI.TableRow>
                    ))}
                  </UI.TableBody>
                </UI.ExecutionTable>
              </UI.ExecutionSection>
              {executions.length === 0 &&  <UI.EmptyState>No executions found</UI.EmptyState>}
              <UI.ActionButtonGroup>
                <UI.EditButton onClick={() => onEdit(strategyId)}>
                  Edit Configuration
                </UI.EditButton>
                <UI.DeleteButton onClick={() => onDelete(strategyId)}>
                  Delete Strategy
                </UI.DeleteButton>
              </UI.ActionButtonGroup>
            </>
          )}
        </UI.ModalBody>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};


