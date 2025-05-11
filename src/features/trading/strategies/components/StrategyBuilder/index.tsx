import * as UI from './styles';
import { CanvasArea } from '../CanvasArea';
import { ModulesPanel } from '../ModulesPanel';
import { ConnectionsPanel } from '../ConnectionsPanel';
import { StrategyOverview } from '../StrategyOverview';
import { useStrategyBuilder } from '../../hooks/useStrategyBuilder';
import { IStrategyBuilderProps } from '../../types';
import { CONNECTION_PRESETS } from '../../constants';

export const StrategyBuilder = ({
  children,
}: IStrategyBuilderProps) => {
  const {
    strategy,
    updateProperty,
    handleAddNode,
    handleUpdateNode,
    handleAddConnection,
    handleCommitStrategy
  } = useStrategyBuilder();

  const handleCommit = async () => {
    try {
      await handleCommitStrategy();
      alert('Strategy saved!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <UI.Container>
      <UI.Layout>
        <UI.WidePanel>
          <CanvasArea
            stages={strategy.stages}
            nodes={strategy.nodes}
            connections={strategy.connections}
            onNodesChange={nodes => updateProperty('nodes', nodes)}
            onConnectionsChange={conns => updateProperty('connections', conns)}
          />
          <ModulesPanel onAddNode={handleAddNode} />
        </UI.WidePanel>

        <UI.SidePanel>
          <StrategyOverview
            strategy={strategy}
            onNameChange={(name: string) => updateProperty('name', name)}
            onDescriptionChange={(description: string) => updateProperty('description', description)}
            
          />
          <ConnectionsPanel
            connections={strategy.connections}
            presets={CONNECTION_PRESETS}
            onAddConnection={handleAddConnection}
          />
        </UI.SidePanel>
      </UI.Layout>

      <UI.Footer>
        <UI.CommitButton onClick={handleCommit}>
          Commit strategy
        </UI.CommitButton>
      </UI.Footer>
    </UI.Container>
  );
};