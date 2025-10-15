import { type Dispatch, type SetStateAction } from "react";

export type CashFlowType = "CASH_IN" | "CASH_OUT";

export interface CashData {
  id: number;
  type: CashFlowType;
  amount: number;
  note: string;
  category: string;
  date: string;
}

export interface CashContextType {
  rows: CashData[];
  setRows: Dispatch<SetStateAction<CashData[]>>;
}
