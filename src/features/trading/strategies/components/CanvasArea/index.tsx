/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react';
import * as UI from './styles';
import { StrategyNode } from '../StrategyNode';
import { ConnectionLine } from '../ConnectionLine';
import { IStrategyNode, IStrategyConnection, NodeType } from '../../types';
import { MODULE_PRESETS } from '../../constants';
import { ConnectionModal } from '../ConnectionModal';
import { CanvasAreaProps } from './types';

export const CanvasArea = ({
  stages,
  nodes = [],
  connections = [],
  onNodesChange,
  onConnectionsChange
}: CanvasAreaProps) => {
  const [editingConnection, setEditingConnection] = useState<IStrategyConnection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [duration, setDuration] = useState('');

  const nodesSafe = Array.isArray(nodes) ? nodes : [];
  const connectionsSafe = Array.isArray(connections) ? connections : [];
  const stagesSafe = Array.isArray(stages) ? stages : [];
  const [isConnecting, setIsConnecting] = useState(false);

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
    const index = stagePositions.findIndex(pos => x < pos);
    return index === -1 ? stagePositions.length - 1 : Math.max(0, index - 1);
  };

  const handleDragStart = (nodeId: string, e: React.DragEvent) => {
    const node = nodesSafe.find(n => n.id === nodeId);
    if (node) {
      dragOffset.current = {
        x: e.clientX - node.position.x,
        y: e.clientY - node.position.y
      };
    }
    setDraggingNode(nodeId);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    //if (e.dataTransfer.types.includes('nodeId')) return;
    if (!canvasRef.current || !draggingNode) return;

    const nodeId = e.dataTransfer.getData('nodeId');
    if (nodeId) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        onNodesChange(nodesSafe.map(node => 
          node.id === nodeId ? { ...node, position: { x, y } } : node
        ));
      }
      setDraggingNode(null);
      return;
    }

    const type = e.dataTransfer.getData('type') as NodeType;
    if (type === 'start') return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;

    const draggedNode = nodesSafe.find(n => n.id === draggingNode);
    if (draggedNode?.type === 'start') return;

    onNodesChange(nodesSafe.map(node =>
      node.id === draggingNode ? { ...node, position: { x, y } } : node
    ));
  }, [draggingNode, nodesSafe]);

  const generateUniqueName = (baseName: string, existingNodes: IStrategyNode[]) => {
    let counter = 2;
    let newName = baseName;

    while (existingNodes.some(n => n.name === newName)) {
      newName = `${baseName}-${counter}`;
      counter++;
    }

    return newName;
  };

  const truncateName = (name: string) => {
    const [shortName] = name.split('_');
    return shortName || name;
  };

  const [pendingNode, setPendingNode] = useState<{
    type: NodeType;
    position: { x: number; y: number };
    stage: string;
    preset?: typeof MODULE_PRESETS[number];
  } | null>(null);

  const handleAddNodeWithDuration = (duration: string) => {
    if (!pendingNode || !duration) return;
    setDraggingNode(null);

    const baseName = pendingNode.preset?.name
      ? truncateName(pendingNode.preset.name)
      : `New ${pendingNode.type}`;

    const uniqueName = generateUniqueName(baseName, nodesSafe);

    const newNode: IStrategyNode = {
      id: `node-${Date.now()}`,
      type: pendingNode.type,
      name: uniqueName,
      position: pendingNode.position,
      stage: pendingNode.stage,
      parameters: {
        ...pendingNode.preset?.parameters,
        MaxExecutionDurationSeconds: parseInt(duration),
      },
      color: pendingNode.preset?.color || '#7F56D9',
      modelId: pendingNode.preset?.id
    };

    onNodesChange([...nodesSafe, newNode]);
    setPendingNode(null);
    setDuration('');
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDraggingNode(null); 
    if (isConnecting) return;

    // Handle existing node movement
    const nodeId = e.dataTransfer.getData('nodeId');
    if (nodeId) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - 20;
        const y = e.clientY - rect.top - 20;
        
        onNodesChange(nodesSafe.map(node => 
          node.id === nodeId ? { ...node, position: { x, y } } : node
        ));
      }
      return;
    }

    // Handle new node creation
    const type = e.dataTransfer.getData('type') as NodeType;
    if (type === 'start') return;

    const stagePositions = calculateStagePositions();
    const rect = canvasRef.current?.getBoundingClientRect();

    if (rect) {
      const x = e.clientX - rect.left - 20;
      const y = e.clientY - rect.top - 20;
      const stageIndex = getStageIndex(x);

      if (stageIndex === 0) return;

      const existingNodesInStage = organizeNodesInStage(stageIndex, nodesSafe);
      const newPosition = {
        x: stagePositions[stageIndex] ,
        y: existingNodesInStage.length 
      };

      const presetData = e.dataTransfer.getData('application/json');
      let preset: typeof MODULE_PRESETS[number] | null = null;

      try {
        preset = presetData ? JSON.parse(presetData) : null;
      } catch (e) {
        console.error('Error parsing preset data', e);
      }

      const type = preset?.type || (e.dataTransfer.getData('type') as NodeType);
      const baseName = preset?.name
        ? truncateName(preset.name)
        : `New ${type}`;

      const uniqueName = generateUniqueName(baseName, nodesSafe);

      setPendingNode({
        type,
        position: newPosition,
        stage: stages[stageIndex],
        preset: preset || undefined
      });
    }
  }, [nodesSafe, stages, isConnecting]);

  const handleEditConnection = (connection: IStrategyConnection) => {
    setEditingConnection(connection);
    setIsModalOpen(true);
  };

  const handleSaveConnection = (updated: {
    source: string;
    target: string;
    conditions: ICondition[];
  }) => {
    setIsConnecting(true);
    
    if (editingConnection) {
      const updatedConnection = {
        ...editingConnection,
        ...updated,
        conditions: updated.conditions
      };
      
      onConnectionsChange(connectionsSafe.map(conn => 
        conn.id === editingConnection.id ? updatedConnection : conn
      ));
    } else {
      const exists = connectionsSafe.some(c => 
        c.source === updated.source && c.target === updated.target
      );
      
      if (!exists) {
        const newConnection: IStrategyConnection = {
          id: `${updated.source}-${updated.target}-${Date.now()}`,
          ...updated,
          conditions: updated.conditions
        };
        onConnectionsChange([...connectionsSafe, newConnection]);
      }
    }
    
    setIsModalOpen(false);
    setEditingConnection(null);
  };


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
    <>
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
            onPositionChange={(pos) => {
              onNodesChange(nodesSafe.map(n => n.id === node.id ? { ...n, position: pos } : n));
            }}
            onStartConnect={(sourceId) => setConnectingFrom(sourceId)}
            onCompleteConnect={(targetId) => {
              if (connectingFrom && connectingFrom !== targetId) {
                handleConnect(connectingFrom, targetId);
              }
              setConnectingFrom(null);
            }}
            onRemove={(id) => {
              onNodesChange(nodesSafe.filter(n => n.id !== id));
              onConnectionsChange(connectionsSafe.filter(c => c.source !== id && c.target !== id));
            }}
           onDragStart={(nodeId) => handleDragStart(nodeId)}
          />
        ))}

        {connectionsSafe.map(connection => (
          <ConnectionLine
            key={connection.id}
            connection={connection}
            nodes={nodesSafe}
            onEdit={() => handleEditConnection(connection)}
          />
        ))}
      </UI.CanvasContainer>
      {isModalOpen && (
        <ConnectionModal
          nodes={nodesSafe}
          connection={editingConnection || undefined}
          onSave={handleSaveConnection}
          onClose={() => {
            setIsModalOpen(false);
            setEditingConnection(null);
          }}
        />
      )}
      {pendingNode && (
        <UI.DurationModal>
          <h3>Set Maximum Execution Duration</h3>
          <UI.DurationInput
            type="number"
            min="1"
            placeholder="Enter duration in seconds"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <UI.ModalButtonGroup>
          <UI.ConfirmButton onClick={() => {
            if (duration) handleAddNodeWithDuration(duration);
          }}>
            Confirm
          </UI.ConfirmButton>
          <UI.CancelButton onClick={() => {
            setPendingNode(null);
            setDuration('');
          }}>
            Cancel
          </UI.CancelButton>
          </UI.ModalButtonGroup>
        </UI.DurationModal>
      )}

    </>
  );
};