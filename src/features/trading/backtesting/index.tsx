import { useState, useEffect } from 'react';
import * as UI from './styles';
import { toast } from 'react-toastify';
import { Footer } from '@/shared/ui/components/Footer';
import { 
  startBacktest,
  getBacktestStatus,
  getBacktestResults,
  cancelBacktest 
} from '@/shared/api/backtest';
import { FiXCircle, FiPlay, FiClock, FiBarChart2, FiSlash } from 'react-icons/fi';
import { mockStrategies } from './constants';

interface BacktestResult {
  id: string;
  profit: number;
  trades: number;
  winRate: number;
  maxDrawdown: number;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'canceled';
  createdAt: string;
  strategyId: string;
}

const Backtesting = () => {
  const [amount, setAmount] = useState('');
  const [selectedStrategyId, setSelectedStrategyId] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTests, setActiveTests] = useState<BacktestResult[]>([]);
  const [history, setHistory] = useState<BacktestResult[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [tests, history] = await Promise.all([
          getBacktestStatus(),
          getBacktestResults()
        ]);
        setActiveTests(tests);
        setHistory(history);
      } catch (error) {
        toast.error('Failed to load backtest data');
      }
    };
    loadInitialData();
  }, []);

  const handleRunBacktest = async () => {
    if (!selectedStrategyId || !amount) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const newTest = await startBacktest({
        strategyId: selectedStrategyId,
        amount: parseFloat(amount)
      });
      setActiveTests(prev => [...prev, newTest]);
      toast.success('Backtest started successfully');
    } catch (error) {
      toast.error('Failed to start backtest');
    } finally {
      setLoading(false);
      setAmount('');
      setSelectedStrategyId('');
    }
  };

  const handleCancelBacktest = async (testId: string) => {
    try {
      await cancelBacktest(testId);
      setActiveTests(prev => prev.filter(t => t.id !== testId));
      toast.success('Backtest canceled');
    } catch (error: any) {
      const message = error.response?.data?.detail || 'Cancel failed';
      toast.error(message);
    }
  };

  const getStrategyName = (strategyId: string) => {
    return mockStrategies.find(s => s.id === strategyId)?.name || 'Unknown';
  };

  return (
    <UI.Container>
      <UI.Title><FiBarChart2 /> Backtesting</UI.Title>

      <UI.FormCard>
        <UI.CardHeader>
          <FiPlay /> New Backtest
        </UI.CardHeader>

        <UI.InputRow>
          <UI.InputGroup>
            <label>Strategy</label>
            <UI.Select
              value={selectedStrategyId}
              onChange={(e) => setSelectedStrategyId(e.target.value)}
            >
              <option value="">Select strategy...</option>
              {mockStrategies.map((strategy) => (
                <option key={strategy.id} value={strategy.id}>
                  {strategy.name}
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
              placeholder="10000"
              min="100"
            />
          </UI.InputGroup>
        </UI.InputRow>

        <UI.ActionRow>
          <UI.PrimaryButton 
            onClick={handleRunBacktest} 
            disabled={loading || !selectedStrategyId}
          >
            {loading ? <FiClock /> : <FiPlay />}
            {loading ? ' Starting...' : ' Run Backtest'}
          </UI.PrimaryButton>
        </UI.ActionRow>
      </UI.FormCard>

      <UI.HistoryCard>
        <UI.CardHeader>
          <FiSlash /> Active Backtests
        </UI.CardHeader>

        {activeTests.length === 0 ? (
          <UI.EmptyState>
            <FiXCircle />
            No active backtests
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
              {activeTests.map((test) => (
                <tr key={test.id}>
                  <td>{getStrategyName(test.strategyId)}</td>
                  <td>
                    <UI.StatusIndicator status={test.status}>
                      {test.status}
                    </UI.StatusIndicator>
                  </td>
                  <td>
                    <UI.TimeGroup>
                      <div>{new Date(test.createdAt).toLocaleDateString()}</div>
                      <div>{new Date(test.createdAt).toLocaleTimeString()}</div>
                    </UI.TimeGroup>
                  </td>
                  <td>
                    {['pending', 'running'].includes(test.status) && (
                      <UI.CancelButton 
                        onClick={() => handleCancelBacktest(test.id)}
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

      <UI.HistoryCard>
        <UI.CardHeader>
          <FiBarChart2 /> Historical Results
        </UI.CardHeader>

        {history.length === 0 ? (
          <UI.EmptyState>
            <FiXCircle />
            No completed backtests
          </UI.EmptyState>
        ) : (
          <UI.ResponsiveTable>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Profit</th>
                <th>Trades</th>
                <th>Win Rate</th>
                <th>Drawdown</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((test) => (
                <tr key={test.id}>
                  <td>{getStrategyName(test.strategyId)}</td>
                  <td>${test.profit.toFixed(2)}</td>
                  <td>{test.trades}</td>
                  <td>{(test.winRate * 100).toFixed(1)}%</td>
                  <td>{(test.maxDrawdown * 100).toFixed(1)}%</td>
                  <td>
                    <UI.TimeGroup>
                      <div>{new Date(test.createdAt).toLocaleDateString()}</div>
                      <div>{new Date(test.createdAt).toLocaleTimeString()}</div>
                    </UI.TimeGroup>
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

export default Backtesting;