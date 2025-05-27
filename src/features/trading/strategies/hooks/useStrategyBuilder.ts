/* eslint-disable @typescript-eslint/no-unsafe-function-type */
// src/features/trading/strategies/hooks/useStrategyBuilder.ts
import { useState, useEffect, useCallback } from 'react';
import { IStrategy, IStrategyNode, IStrategyConnection, IConnectionPreset } from '../types';
import { createStrategy, editStrategy, validateStrategy } from '@/shared/api/strategies';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const DEBOUNCE_DELAY = 500;

export const useStrategyBuilder = (initialStrategy?: IStrategy) => {
  const [strategy, setStrategy] = useState<IStrategy>(initialStrategy || {
    name: '',
    description: '',
    nodes: [{
      id: uuidv4(),
      name: '',
      type: 'start',
      label: 'Start',
      position: { x: 20, y: 20 },
      stage: 'input',
      parameters: {},
      color: '#4CAF50'
    }],
    connections: [],
    stages: ['input', 'processing', 'output']
  });
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStrategyId, setCurrentStrategyId] = useState<string | null>(null);

  const initializeStrategy = (strategyData: IStrategy) => {
    setStrategy(strategyData);
    setIsEditing(true);
  };

  const ensureValidUUID = (id: string): string => {
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      return id;
    }
    return uuidv5(id, uuidv5.URL);
  };
  
  const mapStageType = (stage: string): number => {
    const stageTypeMap: Record<string, number> = {
      input: 1,
      processing: 2,
      output: 3
    };
    return stageTypeMap[stage] || 1;
  };

const transformToApiFormat = useCallback((strategy: IStrategy) => {
  const validateId = (id: string) => {
    if (!id) return null;
    return ensureValidUUID(id);
  };

  const strategyStages = strategy.nodes
  .filter(node => node.type !== 'finish')
  .map(node => ({
    id: validateId(node.id)!,
    stageType: mapStageType(node.stage),
    modelId: node?.modelId || 0,
    MaxExecutionDurationSeconds: node.parameters.MaxExecutionDurationSeconds || 0,
  }));

  const manualTransitions = strategy.connections
    .filter(conn => conn.source && conn.target)
    .map(conn => ({
      sourceStageId: validateId(conn.source),
      destinationStageId: validateId(conn.target),
      transitionConditions: conn.conditions.map(cond => ({
        instrumentId: cond.instrumentId,
        transitionConditionType: cond.transitionConditionType,
        statType: cond.statType,
        value: cond.value
      }))
    }));

  const startNode = strategy.nodes.find(n => n.type === 'start');
  if (!startNode) throw new Error('Start node required');

  const endNodes = strategy.nodes
    .filter(node => 
      !strategy.connections.some(conn => conn.source === node.id) &&
      node.type !== 'start'
    )
    .map(node => ({
      sourceStageId: ensureValidUUID(node.id),
      destinationStageId: null,
      transitionConditions: []
    }));

  const strategyTransitions = [
    {
      sourceStageId: null,
      destinationStageId: validateId(startNode.id),
      transitionConditions: []
    },
    ...manualTransitions,
    ...endNodes,
  ];
  
  if (strategyStages.length === 0) {
    setValidationError('At least one stage required');
  }

  if (strategyTransitions.length === 0) {
    setValidationError('At least one transition required');
  }

  return {
    id: strategy.id,
    StrategyStages: strategyStages,
    StrategyTransitions: strategyTransitions,
    title: strategy.name,
    description: strategy.description
  };
}, []);
  

  const validateDebounce = useCallback(
    debounce(async (currentStrategy: IStrategy) => {
      try {
        setIsValidating(true);
        const response = await validateStrategy(transformToApiFormat(currentStrategy));
        if (response.status !== 200) {
          setValidationError(response.detail);
        }
        setValidationError(null);
      } catch (error: any) {
        setValidationError(error.message);
      } finally {
        setIsValidating(false);
      }
    }, DEBOUNCE_DELAY),
    [transformToApiFormat]
  );

  useEffect(() => {
    validateDebounce(strategy);
    console.log('Strategy updated:', strategy);
  }, [strategy]);

  const updateProperty = <K extends keyof IStrategy>(key: K, value: IStrategy[K]) => {
    setStrategy(prev => ({ ...prev, [key]: value }));
  };

  const handleAddNode = (node: IStrategyNode) => {
    setStrategy(prev => ({
      ...prev,
      nodes: [...prev.nodes, node]
    }));
  };

  const handleUpdateNode = (nodeId: string, updates: Partial<IStrategyNode>) => {
    setStrategy(prev => ({
      ...prev,
      nodes: prev.nodes.map(node =>
        node.id === nodeId ? { ...node, ...updates } : node
      )
    }));
  };

  const handleAddConnection = (conn: IStrategyConnection | IConnectionPreset) => {
    const newConn = 'id' in conn && 'source' in conn && 'target' in conn
      ? conn
      : {
        //id: `conn-${Date.now()}`,
        source: 'source-id',
        target: 'target-id',
        conditions: [],
        ...conn
      };

    updateProperty('connections', [...strategy.connections, newConn]);
  };

  const handleValidate = async () => {
    const errors = [];
    if (!strategy.name) errors.push('Strategy name is required');
    if (!strategy.nodes.some(n => n.type === 'start')) {
      errors.push('Start node is required');
    }
    if (strategy.nodes.filter(n => n.type === 'start').length > 1) {
      errors.push('Only one start node can be');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const handleRemoveNode = (nodeId: string) => {
    const nodeToRemove = strategy.nodes.find(n => n.id === nodeId);
    if (!nodeToRemove || nodeToRemove.type === 'start') return;

    setStrategy(prev => ({
      ...prev,
      nodes: prev.nodes.filter(n => n.id !== nodeId),
      connections: prev.connections.filter(c =>
        c.source !== nodeId && c.target !== nodeId
      )
    }));
  };

  const handleUpdateConnection = (id: string, updates: Partial<IStrategyConnection>) => {
    setStrategy(prev => ({
      ...prev,
      connections: prev.connections.map(conn => 
        conn.id === id ? { ...conn, ...updates } : conn
      )
    }));
  };
  
  const handleRemoveConnection = (id: string) => {
    setStrategy(prev => ({
      ...prev,
      connections: prev.connections.filter(c => c.id !== id)
    }));
  };

  const handleCommitStrategy = async () => {
    const validation = await handleValidate();
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }

    const data = transformToApiFormat(strategy);

    if (isEditing && currentStrategyId) {
      return editStrategy(data);
    }

    return createStrategy(transformToApiFormat(strategy));
  };

  return {
    strategy,
    updateProperty,
    handleAddNode,
    handleUpdateNode,
    handleAddConnection,
    handleValidate,
    handleCommitStrategy,
    handleUpdateConnection,
    handleRemoveConnection,
    handleRemoveNode,
    initializeStrategy,
    isEditing
  };
};

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};