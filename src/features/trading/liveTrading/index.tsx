import { useState, useEffect } from 'react';
import * as UI from './styles';
import { toast } from 'react-toastify';
import { Footer } from '@/shared/ui/components/Footer';
import http from '@/shared/api/axios-client';
import { cancelStrategy, fetchExecutions, fetchTradingStrategies, runStrategy } from '@/shared/api/strategies';
import { FiXCircle, FiPlay, FiClock, FiZap, FiZapOff } from 'react-icons/fi';
import { Execution, Strategy } from './types';
import { mockExecutions } from './constants';


const LiveTrading = () => {
  const [amount, setAmount] = useState('');
  const [selectedStrategyId, setSelectedStrategyId] = useState('');
  const [isPaperTrading, setIsPaperTrading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [executions, setExecutions] = useState<Execution[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const strategiesData = await fetchTradingStrategies();
        setStrategies(strategiesData);

        const executionsData = await fetchExecutions();
        setExecutions(executionsData);
      } catch (error) {
        toast.error('Failed to load initial data');
      }
    };

    loadInitialData();
  }, []);

  const handleRunStrategy = async () => {
    if (!selectedStrategyId) {
      toast.error('Please select a strategy');
      return;
    }

    setLoading(true);

    try {
      await runStrategy(selectedStrategyId, isPaperTrading, amount);
      const updatedExecutions = await fetchExecutions();
      setExecutions(updatedExecutions);
      toast.success('Strategy started successfully');
    } catch (error) {
      toast.error('Failed to start strategy');
    } finally {
      setLoading(false);
      setAmount('');
      setSelectedStrategyId('');
    }
  };

  const getStrategyName = (strategyId: string) => {
    return strategies.find(s => s.id === strategyId)?.title || 'Unknown';
  };

  const handleCancelStrategy = async (executionId: string) => {
    try {
      await cancelStrategy(executionId);
      const updatedExecutions = await fetchExecutions();
      setExecutions(updatedExecutions);
      toast.success('Strategy canceled successfully');
    } catch (error: any) {
      const message = error.response?.data?.detail || 'Failed to cancel strategy';
      toast.error(message);
    }
  };

  return (
    <UI.Container>
      <UI.Title><FiZap /> Live Trading</UI.Title>

      <UI.FormCard>
        <UI.CardHeader>
          <FiPlay /> Start New Strategy
        </UI.CardHeader>
        
        <UI.InputRow>
          <UI.InputGroup>
            <label>Select Strategy</label>
            <UI.Select
              value={selectedStrategyId}
              onChange={(e) => setSelectedStrategyId(e.target.value)}
            >
              <option value="">Choose strategy...</option>
              {strategies.map((strategy) => (
                <option key={strategy.id} value={strategy.id}>
                  {strategy.title}
                </option>
              ))}
            </UI.Select>
          </UI.InputGroup>

          <UI.InputGroup>
            <label>Amount ($)</label>
            <UI.StyledInput
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="5000"
            />
          </UI.InputGroup>
        </UI.InputRow>

        <UI.ActionRow>
          <UI.CheckboxGroup>
            <input
              type="checkbox"
              checked={isPaperTrading}
              onChange={(e) => setIsPaperTrading(e.target.checked)}
            />
            <label>Paper Trading</label>
          </UI.CheckboxGroup>

          <UI.PrimaryButton 
            onClick={handleRunStrategy} 
            disabled={loading || !selectedStrategyId}
          >
            {loading ? <FiClock /> : <FiZap />}
            {loading ? ' Starting...' : ' Run Strategy'}
          </UI.PrimaryButton>
        </UI.ActionRow>
      </UI.FormCard>

      <UI.HistoryCard>
        <UI.CardHeader>
          <FiZapOff /> Active Executions
        </UI.CardHeader>

        {executions.length === 0 ? (
          <UI.EmptyState>
            <FiXCircle />
            No active executions
          </UI.EmptyState>
        ) : (
          <UI.ResponsiveTable>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Status</th>
                <th>Started</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {executions.map((execution) => (
                <tr key={execution.id}>
                  <td>{getStrategyName(execution.strategyId)}</td>
                  <td>
                    <UI.StatusIndicator status={execution.status}>
                      {execution.status}
                    </UI.StatusIndicator>
                  </td>
                  <td>
                    <UI.TimeGroup>
                      <div>{new Date(execution.createdAt).toLocaleDateString()}</div>
                      <div>{new Date(execution.createdAt).toLocaleTimeString()}</div>
                    </UI.TimeGroup>
                  </td>
                  <td>
                    {execution.status === 'Active' || execution.status === 'Pending' && (
                      <UI.CancelButton 
                        onClick={() => handleCancelStrategy(execution.id)}
                      >
                        Cancel
                      </UI.CancelButton>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </UI.ResponsiveTable>
        )}
      </UI.HistoryCard>

      <Footer />
    </UI.Container>
  );
};

export default LiveTrading;