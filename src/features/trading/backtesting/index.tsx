import { useState, useEffect } from 'react';
import * as UI from './styles';
import { mockBacktestResult, mockStrategies } from './constants';
import { toast } from 'react-toastify';

const Backtesting = () => {
  const [amount, setAmount] = useState('');
  const [selectedStrategyId, setSelectedStrategyId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | typeof mockBacktestResult>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('backtestHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('backtestHistory', JSON.stringify(history));
    }
  }, [history]);

  const handleRunBacktest = () => {
    const parsed = parseFloat(amount);
    const selectedStrategy = mockStrategies.find(s => s.id === selectedStrategyId);

    if (!selectedStrategyId || !selectedStrategy) {
      toast.error('Please choose a strategy');
      return;
    }
    if (isNaN(parsed) || parsed <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult(mockBacktestResult);
      toast.success(`Backtest completed: "${selectedStrategy.name}"`);

      const newHistory = [
        ...history,
        {
          strategy: selectedStrategy.name,
          profit: mockBacktestResult.profit,
          trades: mockBacktestResult.trades,
          winRate: mockBacktestResult.winRate,
          maxDrawdown: mockBacktestResult.maxDrawdown,
          date: new Date().toLocaleString(),
        }
      ];
      setHistory(newHistory);

      setAmount('');
      setSelectedStrategyId('');
    }, 2000);
  };

  return (
    <UI.Container>
      <UI.Title>Backtesting</UI.Title>
      
      <UI.InputGroup>
        <label>Strategy</label>
        <UI.Select
          value={selectedStrategyId}
          onChange={(e) => setSelectedStrategyId(e.target.value)}
        >
          <option value="">Choose strategy</option>
          {mockStrategies.map((strategy) => (
            <option key={strategy.id} value={strategy.id}>
              {strategy.name} — {strategy.description}
            </option>
          ))}
        </UI.Select>
      </UI.InputGroup>

      <UI.InputGroup>
        <label>Amount of money</label>
        <UI.StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </UI.InputGroup>

      <UI.ButtonWrapper>
        <UI.PrimaryButton onClick={handleRunBacktest} disabled={loading}>
          {loading ? 'Running...' : 'Run Backtest'}
        </UI.PrimaryButton>
      </UI.ButtonWrapper>

      {result && (
        <UI.ResultBlock>
          <h3>Backtest Results</h3>
          <p><strong>Profit:</strong> ${result.profit}</p>
          <p><strong>Number of Trades:</strong> {result.trades}</p>
          <p><strong>Win Rate:</strong> {result.winRate}</p>
          <p><strong>Max Drawdown:</strong> {result.maxDrawdown}</p>
        </UI.ResultBlock>
      )}

      {history.length > 0 && (
        <UI.HistoryBlock>
          <h3>Previous Runs</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <strong>{item.strategy}</strong> - Profit: ${item.profit}, Trades: {item.trades}, Win Rate: {item.winRate}, Max Drawdown: {item.maxDrawdown} ({item.date})
              </li>
            ))}
          </ul>
        </UI.HistoryBlock>
      )}
    </UI.Container>
  );
};

export default Backtesting;
