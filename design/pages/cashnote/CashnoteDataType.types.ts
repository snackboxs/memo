import { type Dispatch, type SetStateAction } from "react";

export type CashFlowType = "CASH_IN" | "CASH_OUT";

export interface CashData {
   id: number;
   type: CashFlowType;
   amount: number;
   note: string;
   category: string;
   date: string;
   cashnoteType: string;
}

export interface CashContextType {
   rows: CashData[];
   setRows: Dispatch<SetStateAction<CashData[]>>;
   openCashnoteDialogBox: boolean;
   setOpenCashnoteDialogBox: Dispatch<SetStateAction<boolean>>;
   currentCashNote: string | null;
   setCurrentCashNote: Dispatch<SetStateAction<string | null>>;
   cashnote: string[] | null;
   setCashnote: Dispatch<SetStateAction<string[] | null>>;
   openCashnoteAddDataBox: boolean;
   setOpenCashnoteAddDataBox: Dispatch<SetStateAction<boolean>>;
   cashType: string | null;
   setCashType: Dispatch<SetStateAction<string | null>>;
}

export type Order = "asc" | "desc";

export interface HeadCell {
   disablePadding: boolean;
   id: keyof CashData;
   label: string;
}
