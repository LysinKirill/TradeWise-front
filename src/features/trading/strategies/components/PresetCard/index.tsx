import { IPresetCardProps } from '../../types';
import * as UI from './styles';
import modelIcon from '@assets/icons/modulePreset.png';

export const PresetCard = ({ preset, onClick, onDragStart, onDoubleClick }: IPresetCardProps) => {

  const stringifyValue = (value: unknown) => {
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/json', JSON.stringify(preset));
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <UI.CardWrapper>
      <UI.PresetTitle>{preset.name.split('_')[0]}</UI.PresetTitle>
      <UI.CardContainer
        draggable
        onClick={onClick}
        onDragStart={handleDragStart}
        data-preset-id={preset.id}
        onDoubleClick={onDoubleClick}
      >
        <UI.IconContainer $color={preset.color}>
          <img
            src={modelIcon}
            alt={preset.name}
            style={{ width: 40, height: 40 }}
          />
        </UI.IconContainer>
        <UI.CardContent>
        <UI.ModelName>{preset.name}</UI.ModelName>
          <UI.PresetType>{preset.type.toUpperCase()}</UI.PresetType>
          {Object.keys(preset.parameters).length > 0 && (
            <UI.ParametersList>
              {Object.entries(preset.parameters).map(([key, value]) => (
                <UI.ParameterBadge key={key}>
                  {key}: {stringifyValue(value)}
                </UI.ParameterBadge>
              ))}
            </UI.ParametersList>
          )}
        </UI.CardContent>
      </UI.CardContainer>
    </UI.CardWrapper>
  );
}