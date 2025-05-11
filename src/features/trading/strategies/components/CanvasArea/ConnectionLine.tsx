import { IConnectionLineProps } from "../../types";

export const ConnectionLine = ({ connection, nodes }: IConnectionLineProps) => {
  const sourceNode = nodes.find((n: { id: string; }) => n.id === connection.source);
  const targetNode = nodes.find((n: { id: string; }) => n.id === connection.target);

  if (!sourceNode || !targetNode) return null;

  const calculatePath = () => {
    const startX = sourceNode.position.x + 20;
    const startY = sourceNode.position.y + 20;
    const endX = targetNode.position.x + 20;
    const endY = targetNode.position.y + 20;
    
    return `M ${startX},${startY} L ${endX},${endY}`;
  };

  return (
    <path
      d={calculatePath()}
      stroke={connection.color || "#999"}
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
  );
};