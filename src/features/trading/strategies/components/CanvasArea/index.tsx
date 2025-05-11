/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react';
import * as UI from './styles';
import { StrategyNode } from './StrategyNode';
import { ConnectionLine } from './ConnectionLine';
import { IStrategyNode, IStrategyConnection, StageType, NodeType } from '../../types';

interface CanvasAreaProps {
  stages: StageType[];
  nodes?: IStrategyNode[]; // Делаем опциональным
  connections?: IStrategyConnection[]; // Делаем опциональным
  onNodesChange: (nodes: IStrategyNode[]) => void;
  onConnectionsChange: (connections: IStrategyConnection[]) => void;
}

export const CanvasArea = ({
  stages,
  nodes = [],
  connections = [],
  onNodesChange,
  onConnectionsChange
}: CanvasAreaProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [dropZoneActive, setDropZoneActive] = useState(false);


  const nodesSafe = Array.isArray(nodes) ? nodes : [];
  const connectionsSafe = Array.isArray(connections) ? connections : [];
  const stagesSafe = Array.isArray(stages) ? stages : [];

  const calculateStagePositions = () => {
    if (!canvasRef.current) return [];
    const width = canvasRef.current.offsetWidth;
    return stagesSafe.map((_, i) => (width / stagesSafe.length) * i);
  };

  const organizeNodesInStage = (stageIndex: number, nodes: IStrategyNode[]) => {
    return nodes
      .filter(node => node.stage === stages[stageIndex])
      .sort((a, b) => a.position.y - b.position.y);
  };

  const getStageIndex = (x: number) => {
    const stagePositions = calculateStagePositions();
    return stagePositions.findIndex(pos => x < pos) - 1;
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!canvasRef.current || !draggingNode) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;

    // Запрещаем перемещение стартовой ноды
    const draggedNode = nodesSafe.find(n => n.id === draggingNode);
    if (draggedNode?.type === 'start') return;

    onNodesChange(nodesSafe.map(node =>
      node.id === draggingNode ? { ...node, position: { x, y } } : node
    ));
  }, [draggingNode, nodesSafe]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type') as NodeType;
    if (type === 'start') return;
    const stagePositions = calculateStagePositions();
    const rect = canvasRef.current?.getBoundingClientRect();



    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const stageIndex = getStageIndex(x);

      if (stageIndex === 0) return;

      const existingNodesInStage = organizeNodesInStage(stageIndex, nodesSafe);
      const newPosition = {
        x: stagePositions[stageIndex] + 20,
        y: existingNodesInStage.length * 80 + 20
      };

      const newNode: IStrategyNode = {
        id: `node-${Date.now()}`,
        type,
        position: newPosition,
        stage: stages[stageIndex],
        label: type === 'start' ? 'Start' : undefined
      };

      onNodesChange([...nodes, newNode]);
    }
    setDraggingNode(null);
  }, [nodes, stages]);

  const handleConnect = useCallback((sourceId: string, targetId: string) => {
    const newConnection: IStrategyConnection = {
      id: `${sourceId}-${targetId}-${Date.now()}`,
      source: sourceId,
      target: targetId,
      conditions: []
    };
    onConnectionsChange([...connectionsSafe, newConnection]);
  }, [connectionsSafe]);

  return (
    <UI.CanvasContainer
      ref={canvasRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >

      {calculateStagePositions().map((pos, i) => (
        <UI.StageDivider
          key={stagesSafe[i] || `stage-${i}`}
          style={{ left: `${pos}px` }}
        />
      ))}

      {nodesSafe.map(node => (
        <StrategyNode
          key={node.id}
          node={node}
          onDragStart={() => setDraggingNode(node.id)}
          onConnect={handleConnect}
        />
      ))}

      {connectionsSafe.map(connection => (
        <ConnectionLine
          key={connection.id}
          connection={connection}
          nodes={nodesSafe}
        />
      ))}
    </UI.CanvasContainer>
  );
};