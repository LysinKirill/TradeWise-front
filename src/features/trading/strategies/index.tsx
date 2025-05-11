import { StrategyBuilder } from './components/StrategyBuilder';
import { useStrategyBuilder } from './hooks/useStrategyBuilder';
import { IStrategy, IStrategyNode } from './types';
import { CONNECTION_PRESETS, MODULE_PRESETS } from './constants';
import { CanvasArea } from './components/CanvasArea';
import { ConnectionsPanel } from './components/ConnectionsPanel';
import { ModulesPanel } from './components/ModulesPanel';

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
    handleRemoveNode
  } = useStrategyBuilder();

  return (
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