import { useState } from "react";
import { IConnectionLineProps } from "../../types";
import * as UI from './styles';
export const ConnectionLine = ({ connection, nodes, onEdit }: IConnectionLineProps & { onEdit: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sourceNode = nodes.find(n => n.id === connection.source);
  const targetNode = nodes.find(n => n.id === connection.target);

  if (!sourceNode || !targetNode) return null;

  const startX = sourceNode.position.x + 120;
  const startY = sourceNode.position.y + 60;
  const endX = targetNode.position.x + 2;
  const endY = targetNode.position.y + 40;

  const path = `M ${startX} ${startY} C ${startX + 100} ${startY}, ${endX - 100} ${endY}, ${endX} ${endY}`;

  return (
    <svg
      style={{
        position: 'absolute',
        overflow: 'visible',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
        
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d={path}
        stroke="#7F56D9"
        strokeWidth="4"
        fill="none"
        pointerEvents="visibleStroke" 
      />
      
      {isHovered && (
        <foreignObject
          x={(startX + endX)/2 - 12}
          y={(startY + endY)/2 - 12}
          width="24"
          height="24"
          style={{ pointerEvents: 'auto' }} 
        >
          <UI.GearButton onClick={onEdit}>
            ⚙️
          </UI.GearButton>
        </foreignObject>
      )}
    </svg>
  );
};