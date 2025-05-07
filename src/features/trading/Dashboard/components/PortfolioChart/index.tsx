import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import * as UI from './styles';

const COLORS = ['#90caf9', '#64b5f6', '#42a5f5', '#2196f3'];

export const PortfolioChart = ({ data }: { data: Array<{ name: string; value: number }> }) => (
  <UI.ChartContainer>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </UI.ChartContainer>
);