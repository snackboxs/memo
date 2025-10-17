import { createContext, useContext, useState } from "react";
import type {
   CashFlowType,
   CashData,
   CashContextType,
} from "./CashnoteDataType.types";

function createCashData(
   id: number,
   type: CashFlowType,
   amount: number,
   note: string,
   category: string,
   date: string,
   cashnoteType: string
): CashData {
   return { id, type, amount, note, category, date, cashnoteType };
}

const datas: CashData[] = [
   createCashData(1, "CASH_IN", 120, "Note1", "salary", "12-1-2025", "jan"),
   createCashData(2, "CASH_OUT", 150, "Note2", "food", "12-1-2025", "jan"),
   createCashData(3, "CASH_IN", 120, "Note3", "loan", "12-1-2025", "jan"),
   createCashData(4, "CASH_OUT", 120, "Note4", "food", "12-1-2025", "jan"),
   createCashData(5, "CASH_OUT", 120, "Note5", "food", "12-2-2025", "feb"),
   createCashData(6, "CASH_OUT", 140, "Note6", "food", "12-2-2025", "feb"),
   createCashData(7, "CASH_IN", 120, "Note7", "salary", "12-2-2025", "feb"),
   createCashData(8, "CASH_OUT", 120, "Note8", "food", "12-2-2025", "feb"),
   createCashData(9, "CASH_IN", 110, "Note9", "loan", "12-2-2025", "feb"),
   createCashData(10, "CASH_OUT", 120, "Note10", "food", "12-2-2025", "feb"),
   createCashData(17, "CASH_OUT", 120, "Note17", "food", "12-3-2025", "mar"),
   createCashData(18, "CASH_OUT", 120, "Note18", "food", "12-3-2025", "mar"),
   createCashData(19, "CASH_IN", 120, "Note19", "salary", "12-3-2025", "mar"),
   createCashData(20, "CASH_OUT", 120, "Note20", "food", "12-3-2025", "mar"),
   createCashData(21, "CASH_IN", 120, "Note21", "loan", "1-3-2025", "mar"),
   createCashData(22, "CASH_OUT", 120, "Note22", "food", "12-3-2025", "mar"),
   createCashData(11, "CASH_OUT", 120, "Note11", "food", "12-1-2025", "jan"),
   createCashData(12, "CASH_OUT", 220, "Note12", "food", "12-1-2025", "jan"),
   createCashData(13, "CASH_IN", 120, "Note13", "salary", "12-1-2025", "jan"),
   createCashData(14, "CASH_OUT", 120, "Note14", "food", "12-1-2025", "jan"),
   createCashData(15, "CASH_IN", 320, "Note15", "loan", "12-1-2025", "jan"),
   createCashData(16, "CASH_OUT", 120, "Note16", "food", "12-1-2025", "jan"),
   createCashData(23, "CASH_OUT", 120, "Note12", "food", "12-1-2025", "jan"),
];

const CashContext = createContext<CashContextType>({
   rows: [],
   setRows: () => {},
   openCashnoteDialogBox: false,
   setOpenCashnoteDialogBox: () => {},
   currentCashNote: null,
   setCurrentCashNote: () => {},
   cashnote: null,
   setCashnote: () => {},
   openCashnoteAddDataBox: false,
   setOpenCashnoteAddDataBox: () => {},
   cashType: null,
   setCashType: () => {},
});

export function useCashContext() {
   return useContext(CashContext);
}

const list = ["jan", "feb", "mar"];

export default function CashnoteProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [rows, setRows] = useState<CashData[]>(datas);
   const [currentCashNote, setCurrentCashNote] = useState<string | null>(null); // to make active node
   const [cashnote, setCashnote] = useState<string[] | null>(list);
   const [openCashnoteDialogBox, setOpenCashnoteDialogBox] =
      useState<boolean>(false);
   const [openCashnoteAddDataBox, setOpenCashnoteAddDataBox] = useState<boolean>(false);
   const [cashType, setCashType] = useState<string | null>(null)
   const contextValue: CashContextType = {
      rows,
      setRows,
      openCashnoteDialogBox,
      setOpenCashnoteDialogBox,
      currentCashNote,
      setCurrentCashNote,
      cashnote,
      setCashnote,
      openCashnoteAddDataBox,
      setOpenCashnoteAddDataBox,
      cashType,
      setCashType,
   };
   return (
      <CashContext.Provider value={contextValue}>
         {children}
      </CashContext.Provider>
   );
}
