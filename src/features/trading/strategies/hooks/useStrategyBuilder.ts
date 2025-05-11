// src/features/trading/strategies/hooks/useStrategyBuilder.ts
import { useState, useEffect } from 'react';
import { IStrategy, IStrategyNode, IStrategyConnection } from '../types';

export const useStrategyBuilder = (initialStrategy?: IStrategy) => {
  const [strategy, setStrategy] = useState<IStrategy>(initialStrategy || {
    name: '',
    description: '',
    nodes: [{
      id: 'start-node',
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

  useEffect(() => {
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

  const handleAddConnection = (connection: IStrategyConnection) => {
    setStrategy(prev => ({
      ...prev,
      connections: [...prev.connections, connection]
    }));
  };

  const handleValidate = async () => {
    const errors = [];
    if (!strategy.name) errors.push('Название стратегии обязательно');
    if (!strategy.nodes.some(n => n.type === 'start')) {
      errors.push('Стартовая нода обязательна');
    }
    if (strategy.nodes.filter(n => n.type === 'start').length > 1) {
      errors.push('Может быть только одна стартовая нода');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const handleRemoveNode = (nodeId: string) => {
    setStrategy(prev => ({
      ...prev,
      nodes: prev.nodes.filter(n => n.id !== nodeId),
      connections: prev.connections.filter(c => 
        c.source !== nodeId && c.target !== nodeId
      )
    }));
  };

  const handleRemoveConnection = (connectionId: string) => {
    const newConnections = connections.filter(c => c.id !== connectionId);
    setConnections(newConnections);
  };

  const handleCommitStrategy = async () => {
    const validation = await handleValidate();
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }
    
    // Здесь вызов API для сохранения
    return fetch('/api/strategies', {
      method: 'POST',
      body: JSON.stringify(strategy)
    });
  };

  return {
    strategy,
    updateProperty,
    handleAddNode,
    handleUpdateNode,
    handleAddConnection,
    handleValidate,
    handleCommitStrategy,
    handleRemoveConnection,
    handleRemoveNode
  };
};