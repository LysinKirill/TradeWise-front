import { useState, useEffect } from 'react';
import { fetchInstrumentStat, fetchCandles } from '@shared/api/stocks';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as UI from '../styles';
import { IResearchData, Candle } from '../types';
import { chartColors } from '@/shared/constants/colors';

const formatDateTime = (dateString: string | Date) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

type StatType = 
  | 'Unknown'
  | 'BollingerBandLower'
  | 'BollingerBandMiddle'
  | 'BollingerBandUpper'
  | 'ExponentialMovingAverage'
  | 'RelativeStrengthIndex'
  | 'MovingAverageConvergenceDivergence'
  | 'MovingAverage';

const statTypes: StatType[] = [
  'BollingerBandLower',
  'BollingerBandMiddle',
  'BollingerBandUpper',
  'ExponentialMovingAverage',
  'RelativeStrengthIndex',
  'MovingAverageConvergenceDivergence',
  //'MovingAverage'
];

type StatData = {
  [key in StatType]?: number;
};

type InstrumentDetailsModalProps = {
  instrument: IResearchData;
  onClose: () => void;
};

export const InstrumentDetailsModal = ({ instrument, onClose }: InstrumentDetailsModalProps) => {
  const [stats, setStats] = useState<StatData>({});
  const [candles, setCandles] = useState<Candle[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingCandles, setLoadingCandles] = useState(true);
  const [errorStats, setErrorStats] = useState<string | null>(null);
  const [errorCandles, setErrorCandles] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const now = new Date();
        const from = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
        const to = new Date().toISOString();

        const statsRequests = statTypes.map(type => 
          fetchInstrumentStat(instrument.id, type, from, to)
        );

        const statsResults = await Promise.all(statsRequests);
        
        const statsData = statsResults.reduce((acc, result, index) => ({
          ...acc,
          [statTypes[index]]: result.statValue
        }), {});

        setStats(statsData);
      } catch (error) {
        console.error('Failed to load stats:', error);
        setErrorStats('Failed to load technical indicators');
      } finally {
        setLoadingStats(false);
      }
    };

    const loadCandles = async () => {
      try {
        const now = new Date();
        const to = new Date().toISOString();
        const from = new Date(now.setHours(now.getHours() - 40)).toISOString();
  
        const candleData = await fetchCandles(instrument.id, from, to);
        setCandles(candleData);
      } catch (error) {
        console.error('Failed to load candles:', error);
        setErrorCandles('Failed to load price history');
      } finally {
        setLoadingCandles(false);
      }
    };

    loadStats();
    loadCandles();
  }, [instrument.id]);

  const renderStatsSection = () => {
    if (loadingStats) return <UI.Loader>Loading indicators...</UI.Loader>;
    
    return (
      <UI.StatsTableSection>
        <UI.ChartTitle>Technical Indicators</UI.ChartTitle>
        {errorStats && <UI.ErrorMessage>{errorStats}</UI.ErrorMessage>}
        <UI.TableWrapper>
          <UI.Table>
            <UI.TableHeader>
              <UI.StyledTableRow>
                <UI.TableHeaderCell>Indicator</UI.TableHeaderCell>
                <UI.TableHeaderCell>Value</UI.TableHeaderCell>
              </UI.StyledTableRow>
            </UI.TableHeader>
            <UI.TableBody>
              {statTypes.map(type => (
                <UI.StyledTableRow key={type}>
                  <UI.StyledTableCell>
                    {type.replace(/([A-Z])/g, ' $1').trim()}
                  </UI.StyledTableCell>
                  <UI.StyledTableCell>
                    {stats[type]?.toFixed(2) || 'N/A'}
                  </UI.StyledTableCell>
                </UI.StyledTableRow>
              ))}
            </UI.TableBody>
          </UI.Table>
        </UI.TableWrapper>
      </UI.StatsTableSection>
    );
  };

  const renderChartSection = () => {
    if (loadingCandles) return <UI.Loader>Loading chart...</UI.Loader>;
    
    return (
      <UI.ChartSection>
        <UI.ChartTitle>Price History (Last 40 hours)</UI.ChartTitle>
        {errorCandles && <UI.ErrorMessage>{errorCandles}</UI.ErrorMessage>}
        {candles.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
          <LineChart data={candles}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={formatDateTime}
              tick={{ fill: chartColors.text }}
            />
            <YAxis />
            <Tooltip 
              content={({ payload, label }) => (
                <UI.TooltipContainer>
                  <UI.TooltipDate>{formatDateTime(label)}</UI.TooltipDate>
                  {payload?.map((entry, index) => (
                    <UI.TooltipItem key={index} color={entry.color}>
                      {`${entry.name}: ${entry.value}`}
                    </UI.TooltipItem>
                  ))}
                </UI.TooltipContainer>
              )}
            />
            <Line 
              type="monotone" 
              dataKey="close" 
              stroke={chartColors.primary}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        ) : (
          <UI.NoData>No price data available</UI.NoData>
        )}
      </UI.ChartSection>
    );
  };

  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>{instrument.name} Details</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        </UI.ModalHeader>

        <UI.ModalBody>
          {renderChartSection()}
          {renderStatsSection()}
        </UI.ModalBody>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};