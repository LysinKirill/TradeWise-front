/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import * as UI from './styles';

const COLORS = ['#90caf9', '#64b5f6', '#42a5f5', '#2196f3'];

const calculatePortfolioData = (portfolioPositions: any[]) => {
  return portfolioPositions.map((position: { ticker: any; quantity: number; currentPrice: number; }) => ({
    name: position.ticker,
    value: position.quantity * position.currentPrice
  }));
};

export const PortfolioChart = ({ data }:any) => {
  const chartData = calculatePortfolioData(data);

  return (
    <UI.ChartContainer>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </UI.ChartContainer>
  );
};