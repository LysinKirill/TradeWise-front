import * as UI from './styles';
import { CanvasArea } from '../CanvasArea';
import { ModulesPanel } from '../ModulesPanel';
import { ConnectionsPanel } from '../ConnectionsPanel';
import { StrategyOverview } from '../StrategyOverview';
import { useStrategyBuilder } from '../../hooks/useStrategyBuilder';
import { IStrategyBuilderProps } from '../../types';
import { CONNECTION_PRESETS } from '../../constants';
import { Toast } from './Toast';
import { useState } from 'react';
import { Footer } from '@/shared/ui/components/Footer';

export const StrategyBuilder = ({ children }: IStrategyBuilderProps) => {
  const {
    strategy,
    updateProperty,
    handleAddNode,
    handleUpdateNode,
    handleAddConnection,
    handleCommitStrategy,
    handleRemoveConnection
  } = useStrategyBuilder();

  const [toast, setToast] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const handleCommit = async () => {
    try {
      await handleCommitStrategy();
      setToast({ type: 'success', message: 'Strategy committed successfully!' });
    } catch (error: any) {
      setToast({ type: 'error', message: error.message || 'Unknown error during commit.' });
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
            onNodesChange={(nodes) => updateProperty('nodes', nodes)}
            onConnectionsChange={(conns) => updateProperty('connections', conns)}
          />
          <ModulesPanel onAddNode={handleAddNode} />
          <UI.CommitSection>
            <UI.CommitButton onClick={handleCommit}>Commit strategy</UI.CommitButton>
          </UI.CommitSection>
        </UI.WidePanel>

        <UI.SidePanel>
          <StrategyOverview
            strategy={strategy}
            onNameChange={(name: string) => updateProperty('name', name)}
            onDescriptionChange={(desc: string) => updateProperty('description', desc)}
          />
          <ConnectionsPanel
            connections={strategy.connections}
            presets={CONNECTION_PRESETS}
            onAddConnection={handleAddConnection}
            onRemoveConnection={handleRemoveConnection}
          />
        </UI.SidePanel>
      </UI.Layout>

      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
      )}
    </UI.Container>
  );
};
