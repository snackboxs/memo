import {
  createContext, useContext,
  useState
} from "react";
import type { CashFlowType, CashData, CashContextType } from "./CashnoteDataType.types";


function createCashData(
  id: number,
  type: CashFlowType,
  amount: number,
  note: string,
  category: string,
  date: string
): CashData {
  return { id, type, amount, note, category, date };
}

const datas: CashData[] = [
  createCashData(1, "CASH_IN", 120, "Note1", "salary", "12-2-2025"),
  createCashData(2, "CASH_OUT", 120, "Note2", "food", "12-2-2025"),
  createCashData(3, "CASH_IN", 120, "Note3", "loan", "12-2-2025"),
  createCashData(4, "CASH_OUT", 120, "Note4", "food", "12-2-2025"),
  createCashData(5, "CASH_OUT", 120, "Note5", "food", "12-2-2025"),
  createCashData(6, "CASH_OUT", 120, "Note6", "food", "12-2-2025"),
];


const CashContext = createContext<CashContextType>({
  rows: [],
  setRows: () => {},
});

export function useCashContext() {
    return useContext(CashContext);
}

export default function CashnoteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rows, setRows] = useState<CashData[]>(datas);
  const contextValue: CashContextType = {
    rows,
    setRows,
  };
  return (
    <CashContext.Provider value={contextValue}>{children}</CashContext.Provider>
  );
}
