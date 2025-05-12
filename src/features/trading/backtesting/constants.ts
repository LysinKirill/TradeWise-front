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

export const mockBacktestResult = {
  profit: 850,
  trades: 24,
  winRate: '62.5%',
  maxDrawdown: '-4.2%'
};