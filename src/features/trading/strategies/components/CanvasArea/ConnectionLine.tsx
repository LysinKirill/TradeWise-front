import { IConnectionLineProps } from "../../types";

export const ConnectionLine = ({ connection, nodes }: IConnectionLineProps) => {
  const sourceNode = nodes.find(n => n.id === connection.source);
  const targetNode = nodes.find(n => n.id === connection.target);

  if (!sourceNode || !targetNode) return null;

  const startX = sourceNode.position.x + 80;
  const startY = sourceNode.position.y + 40;
  const endX = targetNode.position.x ;
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
    >
      <path
        d={path}
        stroke="#7F56D9"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};
