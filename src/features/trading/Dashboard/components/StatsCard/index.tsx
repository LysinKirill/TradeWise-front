// src/features/dashboard/components/StatsCard/index.tsx
import * as UI from './styles';

interface StatsCardProps {
  title: string;
  value: string | number;
}

export const StatsCard = ({ title, value }: StatsCardProps) => (
  <UI.StatCard>
    <UI.StatLabel>{title}</UI.StatLabel>
    <UI.StatValue>{value}</UI.StatValue>
  </UI.StatCard>
);