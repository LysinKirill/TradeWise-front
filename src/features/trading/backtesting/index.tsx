/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import * as UI from './styles';
import { toast } from 'react-toastify';
import { Footer } from '@/shared/ui/components/Footer';
import {
  startBacktest,
  cancelBacktest,
  getAllBacktests,
} from '@/shared/api/backtest';
import { FiXCircle, FiPlay, FiClock, FiBarChart2, FiSlash } from 'react-icons/fi';
import { fetchSupportedModels } from '@/shared/api/models';
import { CustomDatePicker } from '@/shared/ui/components/DatePicker';
import { BacktestInfo, Model } from './types';

const Backtesting = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModelId, setSelectedModelId] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [backtests, setBacktests] = useState<BacktestInfo[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const modelsData:any = await fetchSupportedModels();
        setModels(modelsData);
        const backtestsData:any = await getAllBacktests();
        setBacktests(backtestsData.backtests);
      } catch (error) {
        toast.error('Failed to load initial data');
      }
    };
    loadInitialData();
  }, []);

  const handleRunBacktest = async () => {
    if (!selectedModelId || !initialBalance || !fromDate || !toDate) {
      toast.error('Please fill all required fields');
      return;
    }

    setLoading(true);
    try {
      const newTest:any = await startBacktest({
        modelId: selectedModelId,
        initialBalance: initialBalance,
        from: fromDate.toISOString(),
        to: toDate.toISOString()
      });

      setBacktests(prev => [...prev, newTest]);
      toast.success('Backtest started successfully');
    } catch (error) {
      toast.error('Failed to start backtest');
    } finally {
      setLoading(false);
      setInitialBalance('');
      setSelectedModelId('');
    }
  };

  const handleCancelBacktest = async (backtestId: string) => {
    try {
      await cancelBacktest(  backtestId );
      setBacktests(prev =>
        prev.map(b => b.backtestId === backtestId
          ? { ...b, status: 'Cancelled' }
          : b
        )
      );
      toast.success('Backtest canceled');
    } catch (error: any) {
      const message = error.response?.data?.detail || 'Cancel failed';
      toast.error(message);
    }
  };

  const getModelName = (modelId: string) => {
    return models.find(m => m.id === modelId)?.name || 'Unknown Model';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
            <label>Model</label>
            <UI.Select
              value={selectedModelId}
              onChange={(e) => setSelectedModelId(e.target.value)}
            >
              <option value="">Select model...</option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} ({model.type})
                </option>
              ))}
            </UI.Select>
          </UI.InputGroup>

          <UI.InputGroup>
            <label>Initial Balance ($)</label>
            <UI.StyledInput
              type="number"
              value={initialBalance}
              onChange={(e) => setInitialBalance(e.target.value)}
              placeholder="10000"
              min="100"
            />
          </UI.InputGroup>
        </UI.InputRow>

        <UI.InputRow>
          <CustomDatePicker
            selected={fromDate}
            onChange={setFromDate}
            label="From Date"
          />

          <CustomDatePicker
            selected={toDate}
            onChange={setToDate}
            label="To Date"
            minDate={fromDate || undefined}
            maxDate={new Date()}
          />

        </UI.InputRow>

        <UI.ActionRow>
          <UI.PrimaryButton
            onClick={handleRunBacktest}
            disabled={loading || !selectedModelId}
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

        {backtests.filter(b => ['Pending', 'Running'].includes(b.status)).length === 0 ? (
          <UI.EmptyState>
            <FiXCircle />
            No active backtests
          </UI.EmptyState>
        ) : (
          <UI.ResponsiveTable>
            <thead>
              <tr>
                <th>Model</th>
                <th>Status</th>
                <th>Period</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
           
              {backtests
                .filter(b => ['Pending', 'Running'].includes(b.status))
                .map((test) => (
                  <tr key={test.backtestId}>
                    <td>{getModelName(test.modelId)}</td> 
                    <td>
                      <UI.StatusIndicator status={test.status}>
                        {test.status}
                      </UI.StatusIndicator>
                    </td>
                    <td>
                      {formatDate(test.testPeriodStart)} - {formatDate(test.testPeriodEnd)}
                    </td>
                    <td>
                      {test.status === 'Running' && (
                        <UI.CancelButton
                          onClick={() => handleCancelBacktest(test.backtestId)}
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

        {backtests.filter(b => ['Completed', 'Failed', 'Cancelled'].includes(b.status)).length === 0 ? (
          <UI.EmptyState>
            <FiXCircle />
            No completed backtests
          </UI.EmptyState>
        ) : (
          <UI.ResponsiveTable>
            <thead>
              <tr>
                <th>Model</th>
                <th>Profit</th>
                <th>Trades</th>
                <th>Result</th>
                <th>Period</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {backtests
                .filter(b => ['Completed', 'Failed', 'Cancelled'].includes(b.status))
                .map((test) => (
                  <tr key={test.backtestId}>
                    <td>{getModelName(test.modelId)}</td>
                    <td>{test.profit.toFixed(2)}</td>
                    <td>{test.tradesCount}</td>
                    <td>
                      {test.status === 'Completed' ? (
                        <span style={{ color: '#4CAF50' }}>
                         +{(test.profit / test.initialBalance * 100).toFixed(2)}%
                        </span>
                      ) : test.status}
                    </td>
                    <td>
                      {formatDate(test.testPeriodStart)} - {formatDate(test.testPeriodEnd)}
                    </td>
                    <td>
                      <UI.StatusIndicator status={test.status}>
                        {test.status}
                      </UI.StatusIndicator>
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