import { IConnectionsPanelProps } from './../../types';
import { CONNECTION_PRESETS, DEFAULT_CONNECTION } from '../../constants';
import { ConnectionCard } from '../ConnectionCard';
import * as UI from './styles';

export const ConnectionsPanel = ({ 
  connections = [], 
  presets = CONNECTION_PRESETS, 
  onAddConnection,
  onRemoveConnection
}: IConnectionsPanelProps) => {

  const safePresets = Array.isArray(presets) ? presets : [];
  const safeConnections = Array.isArray(connections) ? connections : [];
 
  return (
    <UI.Container>
      <UI.Header>
        <UI.Title>Connections</UI.Title>
        <UI.AddButton onClick={() => onAddConnection(DEFAULT_CONNECTION)}>
          + New Connection
        </UI.AddButton>
      </UI.Header>
      <UI.Content>
        {/*<UI.PresetsGrid>
        {safePresets.map(preset => (
          <ConnectionCard
            key={preset.id}
            preset={preset}
            onClick={() => onAddConnection(preset)}
          />
        ))}
      </UI.PresetsGrid>*/}
      

      <UI.ConnectionsList>
        {safeConnections.length === 0 ? (
          <UI.EmptyState>No connections created yet</UI.EmptyState>
        ) : (
          safeConnections.map(connection => (
            <ConnectionCard 
              key={connection.id} 
              connection={connection}
              onRemove={() => onRemoveConnection(connection.id)} 
            />
          ))
        )}
      </UI.ConnectionsList>
      </UI.Content>
    </UI.Container>
  );
}