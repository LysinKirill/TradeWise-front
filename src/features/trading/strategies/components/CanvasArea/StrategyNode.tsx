import { IStrategyNodeProps } from '../../types';
import * as UI from './styles';

export function StrategyNode({ node, onConnect, onPositionChange, onRemove }: IStrategyNodeProps) {

  const handleDrag = (e: React.DragEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onPositionChange({ x, y });
  };

  return (
    <UI.StrategyNodeWrapper
      $x={node.position.x}
      $y={node.position.y}
      data-node-id={node.id}
      draggable={node.type !== 'start'}
      isStart={node.type === 'start'}
    >
      <UI.NodeCloseButton onClick={() => onRemove?.(node.id)}>
        ×
      </UI.NodeCloseButton>
      <UI.NodeHeader>
        <UI.NodeTitle>{node.label || node.type}</UI.NodeTitle>
        <UI.NodeHandle
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('source', node.id);
            e.stopPropagation();
          }}
          onDragEnd={(e) => {
            const target = document.elementFromPoint(e.clientX, e.clientY);
            if (target?.closest('[data-node-id]')) {
              const targetId = target.closest('[data-node-id]')?.getAttribute('data-node-id');
              if (targetId) onConnect(node.id, targetId);
            }
          }}
        />
      </UI.NodeHeader>
      <UI.NodeHandle
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('source', node.id);
          e.stopPropagation();
        }}
        onDragEnd={(e) => {
          const targetElement = document.elementFromPoint(e.clientX, e.clientY);
          const targetNode = targetElement?.closest('[data-node-id]');
          const targetId = targetNode?.getAttribute('data-node-id');

          if (targetId && targetId !== node.id) {
            onConnect(node.id, targetId);
          }
        }}
      />
      {/* Add node content here */}
    </UI.StrategyNodeWrapper>
  );
}