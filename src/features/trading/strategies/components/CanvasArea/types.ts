import { StageType, IStrategyNode, IStrategyConnection } from "../../types";

export interface CanvasAreaProps {
  stages: StageType[];
  nodes?: IStrategyNode[];
  connections?: IStrategyConnection[];
  onNodesChange: (nodes: IStrategyNode[]) => void;
  onConnectionsChange: (connections: IStrategyConnection[]) => void;
}