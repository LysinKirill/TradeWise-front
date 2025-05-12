/*export const mockStats = {
  balance: 5739.40,
  dailyPL: 1129.40,
  strategies: 15
};*/

export const mockPortfolioData = [
  { name: 'Stocks', value: 4000 },
  { name: 'Crypto', value: 2500 },
  { name: 'Forex', value: 1500 },
  { name: 'Commodities', value: 1000 }
];

export const mockTrades = [
  { symbol: 'BTC/USD', quantity: 0.5, price: 30000, pl: -1129.4, plPercent: -3.76, time: '2:35 PM' },
  { symbol: 'ETH/USD', quantity: 2.1, price: 2000, pl: 210.5, plPercent: 1.2, time: '3:15 PM' },
  { symbol: 'TSLA', quantity: 5, price: 250, pl: 45.3, plPercent: 0.8, time: '4:00 PM' }
];

export const mockStats = {
  activeStrategies: 3,
  balance: 16552,
  portfolioPositions: [
    {
      instrumentId: "e6123145-9665-43e0-8413-cd61b8aa9b13",
      quantity: 10,
      ticker: "SBER",
      dailyYield: 23.2,
      currentPrice: 310.02
    },
    {
      instrumentId: "962e2a95-02a9-4171-abd7-aa198dbe643a",
      quantity: 5,
      ticker: "GAZP",
      dailyYield: 15.3,
      currentPrice: 380.56
    },
    {
      instrumentId: "509edd0c-129c-4ee2-934d-7f6246126da1",
      quantity: 8,
      ticker: "AAPL",
      dailyYield: 20.1,
      currentPrice: 145.67
    }
  ],
  todayPnl: 23.2
};

export const mockStrategies = [
  {
    id: 'strategy-1',
    name: 'Mean Reversion',
    description: 'A strategy based on price returning to average.',
    body: {
      nodes: [
        { id: 1, type: 'start' },
        { id: 2, type: 'model', model: null },
        { id: 3, type: 'condition', condition: 'price < SMA' }
      ],
      connections: [
        { source_id: 1, destination_id: 3, conditions: [] },
        { source_id: 3, destination_id: 2, conditions: [] }
      ]
    }
  },
  {
    id: 'strategy-2',
    name: 'Breakout Strategy',
    description: 'Trades when price breaks out of a range.',
    body: {
      nodes: [
        { id: 1, type: 'start' },
        { id: 2, type: 'condition', condition: 'price > resistance' },
        { id: 3, type: 'model', model: null }
      ],
      connections: [
        { source_id: 1, destination_id: 2, conditions: [] },
        { source_id: 2, destination_id: 3, conditions: [] }
      ]
    }
  },
  {
    id: 'strategy-3',
    name: 'Momentum Trading',
    description: 'Follows the trend using momentum indicators.',
    body: {
      nodes: [
        { id: 1, type: 'start' },
        { id: 2, type: 'model', model: 'MomentumModel' },
        { id: 3, type: 'condition', condition: 'momentum > threshold' }
      ],
      connections: [
        { source_id: 1, destination_id: 3, conditions: [] },
        { source_id: 3, destination_id: 2, conditions: [] }
      ]
    }
  }
];