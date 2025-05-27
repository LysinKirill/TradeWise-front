import React from 'react';
import * as UI from './styles';
import { IStrategyNodeProps } from '../../types';

export const StrategyNode = ({
  node,
  onRemove,
  onStartConnect,
  onCompleteConnect
}: IStrategyNodeProps) => {
  const dragStartHandler = (e: React.DragEvent) => {
    e.dataTransfer.setData('nodeId', node.id);
    e.dataTransfer.effectAllowed = 'move';

    const ghost = document.createElement('div');
    ghost.style.position = 'absolute';
    ghost.style.opacity = '0';
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    setTimeout(() => document.body.removeChild(ghost));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onStartConnect) onStartConnect(node.id);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCompleteConnect) onCompleteConnect(node.id);
  };

  return (
    <UI.StrategyNodeWrapper
      $x={node.position.x}
      $y={node.position.y}
      isStart={node.type === 'start'}
      draggable={node.type !== 'start'}
      onDragStart={dragStartHandler}
      onMouseDown={handleMouseDown}
    >
      <UI.NodeTitle isStart={node.type === 'start'}>
        {node.name || node.label || node.type.toUpperCase()}
      </UI.NodeTitle>
      {node.parameters.MaxExecutionDurationSeconds && (
        <UI.DurationBadge>
          {node.parameters.MaxExecutionDurationSeconds}
        </UI.DurationBadge>)}
      <UI.NodeHandle
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        +
      </UI.NodeHandle>
      {onRemove && node.type !== 'start' && (
        <UI.NodeCloseButton onClick={() => onRemove(node.id)}>
          ×
        </UI.NodeCloseButton>
      )}
    </UI.StrategyNodeWrapper>
  );
};