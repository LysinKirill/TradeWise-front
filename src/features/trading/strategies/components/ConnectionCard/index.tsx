/* eslint-disable @typescript-eslint/no-explicit-any */
import * as UI from './styles';
import { IConnectionCardProps } from '../../types';

export const ConnectionCard = ({ 
  connection, 
  nodes,
  onClick, 
  onRemove 
}: IConnectionCardProps) => {
  if (!connection) return null;

  const sourceNode = nodes?.find(n => n.id === connection.source);
  const targetNode = nodes?.find(n => n.id === connection.target);

  return (
    <UI.CardContainer onClick={onClick}>
      <UI.CloseButton onClick={(e) => {
        e.stopPropagation();
        onRemove?.();
      }}>×</UI.CloseButton>
      
      <UI.CardHeader>
        <UI.CardTitle>{`${sourceNode?.name || sourceNode?.type || 'Unknown'} → ${targetNode?.name || 'Unknown'}`}</UI.CardTitle>
      </UI.CardHeader>
      
      <UI.ConnectionDetails>
        {connection.conditions.map((condition:any, index:any) => (
          <UI.ConditionBadge key={index}>
            {condition?.parameterType}: {condition?.condition} {condition.value}
          </UI.ConditionBadge>
        ))}
      </UI.ConnectionDetails>
    </UI.CardContainer>
  );
};