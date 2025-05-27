import { useState, useEffect } from 'react';
import { fetchInstrumentStat, fetchCandles } from '@shared/api/stocks';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as UI from '../../styles';
import { Candle, InstrumentDetailsModalProps, StatData, statTypes } from '../../types';
import { chartColors, colors } from '@/shared/constants/colors';
import { formatDateTime } from '@/shared/utils/date';

export const InstrumentDetailsModal = ({ instrument, onClose }: InstrumentDetailsModalProps) => {
  const [stats, setStats] = useState<StatData>({});
  const [candles, setCandles] = useState<Candle[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingCandles, setLoadingCandles] = useState(true);
  const [errorStats, setErrorStats] = useState<string | null>(null);
  const [errorCandles, setErrorCandles] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chart' | 'stats'>('chart');

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
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={candles}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.accent} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors.neonBlue} stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke={colors.borderColor}
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="timestamp"
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                }}
                tick={{
                  fill: colors.textSecondary,
                  angle: -20,
                  textAnchor: 'end',
                  dy: 5 
                }}
                axisLine={{ stroke: colors.borderColor }}
                interval={Math.floor(candles.length / 15)}
                height={50}
                padding={{ left: 20, right: 0 }}
                minTickGap={5} 
              />

              <YAxis
                domain={['auto', 'auto']}
                tickFormatter={value => value.toFixed(2)}
                tick={{ fill: colors.white }}
                axisLine={{ stroke: colors.borderColor }}
                width={80}
              />

              <Tooltip
                content={({ payload, label }) => (
                  <UI.TooltipContainer>
                    <UI.TooltipDate>{formatDateTime(label)}</UI.TooltipDate>
                    {payload?.map((entry, index) => (
                      <UI.TooltipItem
                        key={index}
                        color={entry.color}
                      >
                        {`${entry.name}: ${entry.value}`}
                      </UI.TooltipItem>
                    ))}
                  </UI.TooltipContainer>
                )}
                cursor={{ stroke: colors.blue }}
              />

              <Line
                type="natural"
                dataKey="close"
                stroke="url(#chartGradient)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 5,
                  fill: colors.neonPurple,
                  stroke: colors.white
                }}
                animationEasing="ease-out"
                animationDuration={400}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <UI.NoData>No price data available</UI.NoData>
        )}
      </UI.ChartSection>
    );
  };

  const renderTabs = () => (
    <UI.TabsContainer>
      <UI.TabButton 
        active={activeTab === 'chart'} 
        onClick={() => setActiveTab('chart')}
      >
        Price Chart
      </UI.TabButton>
      <UI.TabButton 
        active={activeTab === 'stats'} 
        onClick={() => setActiveTab('stats')}
      >
        Technical Indicators
      </UI.TabButton>
    </UI.TabsContainer>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'chart':
        return renderChartSection();
      case 'stats':
        return renderStatsSection();
      default:
        return null;
    }
  };

  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>{instrument.name} Details</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        </UI.ModalHeader>

        <UI.ModalBody>
          {renderTabs()}
          {renderContent()}
        </UI.ModalBody>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};