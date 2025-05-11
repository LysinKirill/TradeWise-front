import { IPresetCardProps } from '../../types';
import * as UI from './styles';

export const PresetCard = ({ preset, onClick, onDragStart, onDoubleClick }: IPresetCardProps) => {

  const stringifyValue = (value: unknown) => {
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  return (
    <UI.CardContainer 
      draggable
      onClick={onClick}
      onDragStart={onDragStart}
      data-preset-id={preset.id}
      onDoubleClick={onDoubleClick}
    >
      <UI.IconContainer $color={preset.color}>
        {preset.icon}
      </UI.IconContainer>
      <UI.CardContent>
        <UI.PresetTitle>{preset.name}</UI.PresetTitle>
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
  );
}