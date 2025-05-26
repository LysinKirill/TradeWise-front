import { useState, useEffect } from 'react';
import * as UI from './styles';
import { toast } from 'react-toastify';
import { Footer } from '@/shared/ui/components/Footer';
import http from '@/shared/api/axios-client';
import { fetchExecutions, fetchTradingStrategies, runStrategy } from '@/shared/api/strategies';

interface Strategy {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Execution {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  strategyId: string;
}

const mockExecutions: Execution[] = [
  {
    id: "1",
    createdAt: "2025-05-24T10:00:00.000Z",
    updatedAt: "2025-05-24T10:05:00.000Z",
    status: "Active",
    strategyId: "aa9b070e-ff4b-4709-acf7-da655ea05c66"
  },
  {
    id: "2",
    createdAt: "2025-05-24T09:30:00.000Z",
    updatedAt: "2025-05-24T09:45:00.000Z",
    status: "Completed",
    strategyId: "16cd084f-198e-445c-a07c-6f7772196dcf"
  }
];

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
      await runStrategy(selectedStrategyId);
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

  return (
    <UI.Container>
      <UI.Title>Live Trading</UI.Title>

      <UI.InputGroup>
        <label>Strategy</label>
        <UI.Select
          value={selectedStrategyId}
          onChange={(e) => setSelectedStrategyId(e.target.value)}
        >
          <option value="">Choose strategy</option>
          {strategies.map((strategy) => (
            <option key={strategy.id} value={strategy.id}>
              {strategy.title} - {strategy.description}
            </option>
          ))}
        </UI.Select>
      </UI.InputGroup>

      <UI.InputGroup>
        <label>Investment Amount</label>
        <UI.StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </UI.InputGroup>

      <UI.CheckboxGroup>
        <input
          type="checkbox"
          checked={isPaperTrading}
          onChange={(e) => setIsPaperTrading(e.target.checked)}
        />
        <label>Paper Trading</label>
      </UI.CheckboxGroup>

      <UI.ButtonWrapper>
        <UI.PrimaryButton onClick={handleRunStrategy} disabled={loading}>
          {loading ? 'Starting...' : 'Run Strategy'}
        </UI.PrimaryButton>
      </UI.ButtonWrapper>

      {/*executions.length > 0 &&*/ (
        <UI.HistoryBlock>
          <h3>Execution History</h3>
          <UI.Table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Status</th>
                <th>Started At</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {executions.length > 0 ? (
                executions.map((execution) => (
                  <tr key={execution.id}>
                    <td>{getStrategyName(execution.strategyId)}</td>
                    <td>{execution.status}</td>
                    <td>{new Date(execution.createdAt).toLocaleString()}</td>
                    <td>{new Date(execution.updatedAt).toLocaleString()}</td>
                  </tr>
                ))) : (
                <UI.EmptyStateRow>
                  <td colSpan={4}>No executions found</td>
                </UI.EmptyStateRow>
              )}
            </tbody>
          </UI.Table>
        </UI.HistoryBlock>
      )}


      <Footer />
    </UI.Container>
  );
};

export default LiveTrading;