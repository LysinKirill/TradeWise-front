import { IConnectionCardProps, IConnectionPreset, IStrategyConnection } from '../../types';
import * as UI from './styles';

export const ConnectionCard = ({ preset, connection, onClick, onRemove }: IConnectionCardProps) => {
  if (!preset && !connection) return null;

  return (
    <UI.CardContainer onClick={onClick}>
      <UI.CloseButton onClick={(e) => {
        e.stopPropagation();
        onRemove?.();
      }}>×</UI.CloseButton>
      {preset ? (
        <PresetContent preset={preset} />
      ) : connection ? (
        <ConnectionContent connection={connection} />
      ) : null}
    </UI.CardContainer>
  );
};

const PresetContent = ({ preset }: { preset: IConnectionPreset }) => (
  <>
    <UI.CardHeader>
      <UI.CardTitle>{preset.name}</UI.CardTitle>
      <UI.ConnectionType $color={preset.color}>
        {preset.type.toUpperCase()}
      </UI.ConnectionType>
    </UI.CardHeader>
    <UI.ConnectionDetails>
      {preset.parameters.conditionType.replace('_', ' ')}
    </UI.ConnectionDetails>
  </>
);

const ConnectionContent = ({ connection }: { connection: IStrategyConnection }) => (
  <>
    <UI.CardHeader>
      <UI.CardTitle>{`${connection.source} → ${connection.target}`}</UI.CardTitle>
      <UI.ConnectionType $color={connection.color}>
        {connection.preset?.toUpperCase() || 'CUSTOM'}
      </UI.ConnectionType>
    </UI.CardHeader>
    <UI.ConnectionDetails>
      {connection.conditions.map((condition, index) => (
        <UI.ConditionBadge key={index}>
          {condition.parameterType}: {condition.condition}
        </UI.ConditionBadge>
      ))}
    </UI.ConnectionDetails>
  </>
);