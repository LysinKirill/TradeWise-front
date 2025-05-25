export interface IResearchData {
  id: string;
  figi: string;
  name: string;
  lot: number;
  currency: string;
  sector: string;
  buyAvailable: boolean;
  sellAvailable: boolean;
}

export type ResearchTableProps = {
  data: IResearchData[];
  onRowClick: (instrument: IResearchData) => void;
};

export type Candle = {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
};