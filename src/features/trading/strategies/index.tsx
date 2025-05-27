import { StrategyBuilder } from './components/StrategyBuilder';
import { useStrategyBuilder } from './hooks/useStrategyBuilder';
import { IStrategy } from './types';
import { CONNECTION_PRESETS, MODULE_PRESETS } from './constants';
import { CanvasArea } from './components/CanvasArea';
import { ConnectionsPanel } from './components/ConnectionsPanel';
import { ModulesPanel } from './components/ModulesPanel';
import { Footer } from '@/shared/ui/components/Footer';
import * as UI from './styles';
import { ValidationModal } from './components/validationModal/ValidationModal';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Strategies = () => {
  const {
    nodes,
    connections,
    strategy,
    validationError,
    handleNodesChange,
    handleConnectionsChange,
    handleCommitStrategy,
    handleRemoveConnection,
    handleRemoveNode,
    initializeStrategy
  } = useStrategyBuilder();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [currentStrategyId, setCurrentStrategyId] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.editStrategy) {
      const { id, ...strategyData } = location.state.editStrategy;
      initializeStrategy(strategyData);
      setIsEditing(true);
      setCurrentStrategyId(id);
    }
    if (validationError) {
      setShowErrorModal(true);
    }
  }, [validationError, location, initializeStrategy]);

  return (
    <>
      <StrategyBuilder
        nodes={nodes}
        connections={connections}
        onNodesChange={handleNodesChange}
        onConnectionsChange={handleConnectionsChange}
      >
        <ModulesPanel
          presets={MODULE_PRESETS}
          onAddNode={handleNodesChange}
          onRemoveNode={handleRemoveNode}
        />
        <CanvasArea
          nodes={nodes}
          connections={connections}
          stages={strategy.stages}
          onConnectionsChange={handleConnectionsChange}
          onNodesChange={handleNodesChange}
        />
        <ConnectionsPanel
          connections={connections}
          presets={CONNECTION_PRESETS}
          onAddConnection={handleConnectionsChange}
          onRemoveConnection={handleRemoveConnection}
        />
        <CommitSection
          strategy={strategy}
          error={validationError}
          onCommit={handleCommitStrategy}
        />
      </StrategyBuilder>
      <ValidationModal
        error={validationError}
        onClose={() => setShowErrorModal(false)}
      />
      <UI.Footer>
       
      </UI.Footer>
    </>
  );
}

const CommitSection = ({ strategy, error, onCommit }: {
  strategy: IStrategy;
  error: string;
  onCommit: () => void;
}) => (
  <div className="commit-section">
    <button onClick={onCommit}>Commit Strategy</button>
    {error && <div className="error">{error}</div>}
    <div className="preview">
      <h3>{strategy.name}</h3>
      <p>{strategy.description}</p>
    </div>
  </div>
);

export default Strategies;