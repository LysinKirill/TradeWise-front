import { PresetCard } from '../PresetCard'; 
import { MODULE_PRESETS } from '../../constants';
import * as UI from './styles';
import { IModulesPanelProps } from '../../types';
import { useState } from 'react';

export const ModulesPanel = ({ onAddNode, onRemoveNode }: IModulesPanelProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    const nodeId = e.dataTransfer.getData('nodeId');
    if (nodeId) {
      onRemoveNode(nodeId);
    }
  };

  return (
    <UI.Container>
      <UI.Title>Modules</UI.Title>
      <UI.PresetsGrid
        onDragOver={(e) => {
          e.preventDefault();
          setIsDeleting(true);
        }}
        onDragLeave={() => setIsDeleting(false)}
        onDrop={handleDrop}
        $isDeleting={isDeleting}
      >
        {isDeleting ? (
          <UI.DeleteZone>Drop here to delete</UI.DeleteZone>
        ) : (
          MODULE_PRESETS.map(preset => (
            <PresetCard
              key={preset.id}
              preset={preset}
              onDoubleClick={() => onAddNode(preset)}
            />
          ))
        )}
      </UI.PresetsGrid>
    </UI.Container>
  );
}