import { PresetCard } from '../PresetCard'; 
import { MODULE_PRESETS } from '../../constants';
import * as UI from './styles';
import { IModulesPanelProps } from '../../types';
import { useState } from 'react';

export const ModulesPanel = ({ onAddNode, onRemoveNode }: IModulesPanelProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDeleting(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    const nodeId = e.dataTransfer.getData('nodeId');
    if (nodeId) {
      onRemoveNode(nodeId);
    }
    setIsDeleting(false);
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
        
      >
        {isDeleting ? (
          <UI.DeleteZone>Drop here to delete</UI.DeleteZone>
        ) : (
          MODULE_PRESETS.map(preset => (
            <PresetCard
              key={preset.id}
              preset={preset}
              onDoubleClick={() => onAddNode(preset)}
            >
              
            </PresetCard>
          ))
        )}
      </UI.PresetsGrid>
      {/*<UI.DeleteZone
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDeleting(false)}
        onDrop={handleDrop}
        $isActive={isDeleting}
      >
        {isDeleting ? 'Drop to delete' : 'Drag hehe to delete node'}
      </UI.DeleteZone>*/} 
    </UI.Container>
  );
}