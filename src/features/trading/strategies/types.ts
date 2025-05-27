//export type NodeType = 'start' | 'finish' | 'model' | 'condition';
export type StageType = 'input' | 'processing' | 'output';

export enum IConditionType {
  GREATER_THAN = 'greater_than',
  EQUALS = 'equals',
  LESS_THAN = 'less_than'
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IConnectionCondition {
  parameterType: string;
  instrumentId: string;
  condition: IConditionType;
  threshold: number;
}

export interface IStrategyNode {
  name: string | undefined;
  id: string;
  type: NodeType;
  label?: string;
  position: IPosition;
  parameters: {
    MaxExecutionDurationSeconds?: number;
    [key: string]: any;
  };
  preset?: string;
  color?: string;
  stage: StageType;
  modelId?: string;
}

export interface IStrategyConnection {
  id: string;
  source: string;
  target: string;
  conditions: Array<{
    transitionConditionType: any;
    type: number;
    statType: number;
    value: number;
  }>;
}

export interface IStrategy {
  id: string;
  name: string;
  description: string;
  nodes: IStrategyNode[];
  connections: IStrategyConnection[];
  stages: StageType[];
}

export interface IConnectionPreset {
  id: string;
  name: string;
  type: 'unconditional' | 'transition';
  color: string;
  parameters: {
    conditionType: string;
    [key: string]: unknown;
  };
}

export interface IModulePreset {
  id: string;
  name: string;
  type: NodeType;
  icon: string;
  color: string;
  parameters: Record<string, unknown>;
  createdAt: string;
  modelId: string;
}

export interface IStrategyBuilderProps {
  children?: React.ReactNode;
  nodes: IStrategyNode[];
  connections: IStrategyConnection[];
  onNodesChange: (nodes: IStrategyNode[]) => void;
  onConnectionsChange: (connections: IStrategyConnection[]) => void;
}

export interface ICanvasAreaProps {
  nodes: IStrategyNode[];
  connections: IStrategyConnection[];
  stages: StageType[];
  onNodesChange: (nodes: IStrategyNode[]) => void;
  onConnectionsChange: (connections: IStrategyConnection[]) => void;
}

export interface IConnectionLineProps {
  connection: IStrategyConnection;
  nodes: IStrategyNode[];
}

export interface IStrategyNodeProps {
  node: IStrategyNode;
  onConnect: (source: string, target: string) => void;
  onPositionChange: (position: IPosition) => void;
  onRemove?: (nodeId: string) => void;
  onStartConnect?: (sourceId: string) => void;
  onCompleteConnect?: (targetId: string) => void;
}

export interface IConnectionsPanelProps {
  nodes: IStrategyNode[];
  connections: IStrategyConnection[];
  onAddConnection: (connection: IStrategyConnection) => void;
  onUpdateConnection: (id: string, connection: IStrategyConnection) => void;
  onRemoveConnection: (id: string) => void;
}

export interface IConnectionCardProps {
  preset?: IConnectionPreset;
  connection?: IStrategyConnection;
  onClick?: () => void;
  onRemove?: () => void;
}

export interface IModulesPanelProps {
  presets?: IModulePreset[];
  onAddNode: (preset: IModulePreset) => void;
  onRemoveNode: (nodeId: string) => void;
}

export interface IStrategyOverviewProps {
  strategy: IStrategy;
  onNameChange: (name: string) => void;
  onDescriptionChange: (description: string) => void;
}