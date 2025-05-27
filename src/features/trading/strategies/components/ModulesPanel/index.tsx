import { PresetCard } from '../PresetCard';
import { MODULE_PRESETS } from '../../constants';
import * as UI from './styles';
import { IModulePreset, IModulesPanelProps } from '../../types';
import { useEffect, useState } from 'react';
import { fetchSupportedModels } from '@/shared/api/models';

export const ModulesPanel = ({ onAddNode, onRemoveNode }: IModulesPanelProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [models, setModels] = useState<IModulePreset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDeleting(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    const nodeId = e.dataTransfer.getData('nodeId');
    if (nodeId) {
      onRemoveNode(nodeId);
      setIsDeleting(false);
    }
    setIsDeleting(false);
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        const data = await fetchSupportedModels();
        if (data.length === 0 || !data) {
          setModels(MODULE_PRESETS);
        } else {
          setModels(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, []);

  if (loading) return <UI.EmptyState>Loading models...</UI.EmptyState>;

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
          models.map(preset => (
              <PresetCard
                key={preset.id}
                preset={preset}
                onDoubleClick={() => onAddNode(preset)}
              />
            
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