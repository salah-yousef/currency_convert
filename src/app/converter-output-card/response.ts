export interface Response {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: any;
}

export interface Conversion {
  resultValue: number;
  baseValue: number;
  resultCurrency: string;
  baseCurrency: string;
  date: string;
}
