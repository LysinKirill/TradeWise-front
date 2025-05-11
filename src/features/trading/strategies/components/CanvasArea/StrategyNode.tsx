import React from 'react';
import * as UI from './styles';
import { IStrategyNodeProps } from '../../types';

export const StrategyNode = ({
  node,
  onPositionChange,
  onRemove,
  onStartConnect,
  onCompleteConnect
}: IStrategyNodeProps) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onStartConnect) onStartConnect(node.id);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCompleteConnect) onCompleteConnect(node.id);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();

    const onMouseMove = (moveEvent: MouseEvent) => {
      const parentRect = (e.currentTarget as HTMLElement).parentElement!.getBoundingClientRect();
      const newX = moveEvent.clientX - parentRect.left - 40;
      const newY = moveEvent.clientY - parentRect.top - 40;
      onPositionChange({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <UI.StrategyNodeWrapper
      $x={node.position.x}
      $y={node.position.y}
      isStart={node.type === 'start'}
      onMouseDown={handleDragStart}
    >
      <UI.NodeTitle>{node.name || node.label || node.type}</UI.NodeTitle>
      <UI.NodeHandle onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
      {onRemove && (
        <UI.NodeCloseButton onClick={() => onRemove(node.id)}>×</UI.NodeCloseButton>
      )}
      {console.log(node)}
    </UI.StrategyNodeWrapper>
  );
};
