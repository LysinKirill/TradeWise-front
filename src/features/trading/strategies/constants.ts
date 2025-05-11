import { colors } from '@/shared/constants/colors';
import { IConnectionPreset, IModulePreset } from './types';

export const MODULE_PRESETS: IModulePreset[] = [
  {
    id: 'start',
    name: 'Start Node',
    type: 'start',
    parameters: {},
    icon: '🚀',
    color: colors.purpleButton
  },
  {
    id: 'finish',
    name: 'Finish Node',
    type: 'finish',
    parameters: {},
    icon: '🏁',
    color: colors.accentGreen
  },
  {
    id: 'model-1',
    name: 'Moving Average Model',
    type: 'model',
    parameters: {
      windowSize: 14
    },
    icon: '📈',
    color: colors.blue
  },
  {
    id: 'model-2',
    name: 'Bollinger Bands',
    type: 'model',
    parameters: {
      period: 20,
      deviation: 2
    },
    icon: '📊',
    color: colors.orange
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