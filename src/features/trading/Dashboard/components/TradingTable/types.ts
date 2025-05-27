export interface IPortfolioData {
  instrumentId: string;
  ticker: string;
  quantity: number;
  currentPrice: number;
  dailyYield: number;
}


export interface ITradeData {
  symbol: string;
  quantity: number;
  price: number;
  pl: number;
  plPercent: number;
  time: string;
}