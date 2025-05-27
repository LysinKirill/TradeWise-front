import { useState, useEffect } from 'react';
import * as UI from './styles';
import { Execution } from '@/features/trading/liveTrading/types';
import { fetchExecutions, fetchTradingStrategies } from '@/shared/api/strategies';

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
        const strategiesResponse = await fetchTradingStrategies();
        const strategy = strategiesResponse.find(
          (s: any) => s.id === strategyId
        );

         const executions = await fetchExecutions();
        const filteredExecutions = executions.filter(
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
            <UI.Loader>Loading...</UI.Loader>
          ) : (
            <>
              <div className="section">
                <h4>Configuration</h4>
                <pre>
                  {JSON.stringify(
                    {
                      Created: new Date(details?.createdAt).toLocaleString(),
                      LastUpdated: new Date(details?.updatedAt).toLocaleString(),
                      Description: details?.description,
                    },
                    null,
                    2
                  )}
                </pre>
              </div>

              <div className="section">
                <h4>Execution History</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Started</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {executions.map((execution) => (
                      <tr key={execution.id}>
                        <td>{execution.status}</td>
                        <td>{new Date(execution.createdAt).toLocaleString()}</td>
                        <td>
                          {execution.updatedAt
                            ? `${Math.round(
                                (new Date(execution.updatedAt).getTime() -
                                  new Date(execution.createdAt).getTime()) /
                                  1000
                              )}s`
                            : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <UI.ActionButtonGroup>
                <UI.EditButton onClick={() => onEdit(strategyId)}>
                  Edit
                </UI.EditButton>
                <UI.DeleteButton onClick={() => onDelete(strategyId)}>
                  Delete
                </UI.DeleteButton>
              </UI.ActionButtonGroup>
            </>
          )}
        </UI.ModalBody>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};