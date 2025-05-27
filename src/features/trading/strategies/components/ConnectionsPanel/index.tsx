import { useState } from 'react';
import * as UI from './styles';
import { IConnectionsPanelProps } from '../../types';
import { ConnectionCard } from '../ConnectionCard';
import { ConnectionModal } from '../ConnectionModal';

export const ConnectionsPanel = ({ 
  nodes,
  connections = [], 
  onAddConnection,
  onUpdateConnection,
  onRemoveConnection
}: IConnectionsPanelProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingConnection, setEditingConnection] = useState<string | null>(null);

  const handleSave = (updated: any) => {
    if (editingConnection) {
      onUpdateConnection(editingConnection, updated);
    } else {
      onAddConnection(updated);
    }
    setIsModalOpen(false);
  };

  return (
    <UI.Container>
      <UI.Header>
        <UI.Title>Connections</UI.Title>
        <UI.AddButton onClick={() => setIsModalOpen(true)}>
          + New Connection
        </UI.AddButton>
      </UI.Header>

      <UI.Content>
        <UI.ConnectionsList>
          {connections.length === 0 ? (
            <UI.EmptyState>No connections created yet</UI.EmptyState>
          ) : (
            connections.map(connection => (
              <ConnectionCard 
                key={connection.id} 
                connection={connection}
                nodes={nodes}
                onClick={() => {
                  setEditingConnection(connection.id);
                  setIsModalOpen(true);
                }}
                onRemove={() => onRemoveConnection(connection.id)}
              />
            ))
          )}
        </UI.ConnectionsList>
      </UI.Content>

      {isModalOpen && (
        <ConnectionModal
          nodes={nodes || []}
          connection={connections.find(c => c.id === editingConnection)}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingConnection(null);
          }}
        />
      )}
    </UI.Container>
  );
};