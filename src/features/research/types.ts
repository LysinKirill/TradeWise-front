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

export type StatType = 
  | 'Unknown'
  | 'BollingerBandLower'
  | 'BollingerBandMiddle'
  | 'BollingerBandUpper'
  | 'ExponentialMovingAverage'
  | 'RelativeStrengthIndex'
  | 'MovingAverageConvergenceDivergence'
  | 'MovingAverage';

export const statTypes: StatType[] = [
  'BollingerBandLower',
  'BollingerBandMiddle',
  'BollingerBandUpper',
  'ExponentialMovingAverage',
  'RelativeStrengthIndex',
  'MovingAverageConvergenceDivergence',
  //'MovingAverage'
];

export type StatData = {
  [key in StatType]?: number;
};

export type InstrumentDetailsModalProps = {
  instrument: IResearchData;
  onClose: () => void;
};