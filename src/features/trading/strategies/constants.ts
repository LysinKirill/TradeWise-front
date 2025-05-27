import { colors } from '@/shared/constants/colors';
import { IConnectionPreset, IModulePreset } from './types';

export const MODULE_PRESETS: IModulePreset[] = [
  /*{
    id: 'finish',
    name: 'Finish Node',
    type: 'finish',
    parameters: {},
    icon: '', 
    color: colors.accentGreen
  },*/
  {
    id: 'model-1',
    name: 'Moving Average Model',
    type: 'technical',
    parameters: { 
      windowSize: 14,
      maType: 'EMA'
    },
    icon: '📈',
    color: colors.blue,
    createdAt: '2024-03-15T09:30:00Z'
  },
  {
    id: 'model-2',
    name: 'Bollinger Bands',
    type: 'technical',
    parameters: { 
      period: 20,
      deviation: 2,
      priceSource: 'close'
    },
    icon: '📊', 
    color: colors.orange,
    createdAt: '2024-02-28T14:20:00Z'
  },
  {
    id: 'model-3',
    name: 'RSI Indicator',
    type: 'oscillator',
    parameters: {
      period: 14,
      overbought: 70,
      oversold: 30
    },
    icon: '📉',
    color: colors.purpleButton,
    createdAt: '2024-04-01T11:15:00Z'
  },
  {
    id: 'model-4',
    name: 'MACD Cross',
    type: 'momentum',
    parameters: {
      fastPeriod: 12,
      slowPeriod: 26,
      signalPeriod: 9
    },
    icon: '⚡',
    color: colors.accentGreen,
    createdAt: '2024-03-22T16:45:00Z'
  },
  {
    id: 'order-1',
    name: 'Market Buy Order',
    type: 'execution',
    parameters: { 
      orderType: 'market',
      quantity: 100
    },
    icon: '🟢',
    color: '#4CAF50',
    createdAt: '2024-01-10T08:00:00Z'
  },
  {
    id: 'order-2',
    name: 'Limit Sell Order',
    type: 'execution',
    parameters: {
      orderType: 'limit',
      limitPrice: 150.50,
      quantity: 50
    },
    icon: '🔴',
    color: '#F44336',
    createdAt: '2024-02-05T13:20:00Z'
  },
  {
    id: 'risk-1',
    name: 'Stop-Loss Strategy',
    type: 'risk-management',
    parameters: {
      stopPercent: 5,
      trailing: true
    },
    icon: '🛡️',
    color: colors.red,
    createdAt: '2024-03-10T10:00:00Z'
  },
  {
    id: 'model-5',
    name: 'Fibonacci Retracement',
    type: 'technical',
    parameters: {
      swingHigh: 200,
      swingLow: 180,
      levels: [23.6, 38.2, 50, 61.8]
    },
    icon: '📐',
    color: colors.gold,
    createdAt: '2024-04-10T09:45:00Z'
  }
];

export const CONNECTION_PRESETS: IConnectionPreset[] = [
  {
    id: 'unconditional',
    name: 'Unconditional',
    type: 'unconditional',
    color: colors.greyText,
    parameters: { conditionType: 'always' }
  },
  {
    id: 'transition-1',
    name: 'Price Cross',
    type: 'transition',
    color: colors.purpleButton,
    parameters: { conditionType: 'price_cross', threshold: 100 }
  },
  {
    id: 'transition-2',
    name: 'Volume Spike',
    type: 'transition',
    color: colors.blue,
    parameters: { conditionType: 'volume_spike', multiplier: 2 }
  }
];

export const VALIDATION_ERRORS = {
  NO_START_NODE: 'Strategy must have exactly one start node',
  NO_FINISH_NODE: 'Strategy must have at least one finish node',
  DISCONNECTED_NODES: 'All nodes must be connected',
  INVALID_CONDITIONS: 'Connection conditions not met',
  DUPLICATE_CONNECTIONS: 'Duplicate connections between nodes',
  MISSING_PARAMETERS: 'Required parameters missing in nodes'
};

export const DEFAULT_NODE = {
  position: { x: 100, y: 100 },
  parameters: {},
  color: colors.purpleButton
};

export const NODE_DIMENSIONS = {
  width: 180,
  height: 80,
  padding: 40
};

export const NODE_TYPES = {
  start: {
    label: 'Start',
    icon: '⚡',
    color: colors.purpleButton
  },
  finish: {
    label: 'Finish',
    icon: '✅',
    color: colors.accentGreen
  },
  model: {
    label: 'Model',
    icon: '🧠',
    color: colors.blue
  },
  condition: {
    label: 'Condition',
    icon: '⚖️',
    color: colors.orange
  }
};

export const DEFAULT_CONNECTION: IConnection = {
  id: 'new-connection',
  source: '',
  target: '',
  conditions: [],
  color: '#801AE5'
};

export const DEFAULT_NODE_POSITION = { x: 100, y: 100 };
export const CANVAS_PADDING = 40;
export const NODE_WIDTH = 180;
export const NODE_HEIGHT = 80;

export const PRESETS = {
  STRATEGY_TYPES: [
    'Mean Reversion',
    'Momentum Trading',
    'Arbitrage',
    'Trend Following',
    'Scalping'
  ],
  DEFAULT_STRATEGY: {
    name: '',
    description: '',
    nodes: [],
    connections: []
  },
  VALIDATION_TIMEOUT: 5000 // 5 seconds
};