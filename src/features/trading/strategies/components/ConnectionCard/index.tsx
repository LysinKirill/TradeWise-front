import * as UI from './styles';
import { IConnectionCardProps } from '../../types';

export const ConnectionCard = ({ 
  connection, 
  onClick, 
  onRemove 
}: IConnectionCardProps) => {
  if (!connection) return null;

  return (
    <UI.CardContainer onClick={onClick}>
      <UI.CloseButton onClick={(e) => {
        e.stopPropagation();
        onRemove?.();
      }}>×</UI.CloseButton>
      
      <UI.CardHeader>
        <UI.CardTitle>{`${connection.source} → ${connection.target}`}</UI.CardTitle>
        <UI.ConnectionType $color={connection.color}>
          {connection.preset?.toUpperCase() || 'CUSTOM'}
        </UI.ConnectionType>
      </UI.CardHeader>
      
      <UI.ConnectionDetails>
        {connection.conditions.map((condition, index) => (
          <UI.ConditionBadge key={index}>
            {condition.parameterType}: {condition.condition} {condition.value}
          </UI.ConditionBadge>
        ))}
      </UI.ConnectionDetails>
    </UI.CardContainer>
  );
};