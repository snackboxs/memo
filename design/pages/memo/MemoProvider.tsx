import {createContext, useContext, useState } from "react";
import { MemoContentType } from "./MemoDataType.types";

const MemoContext = createContext<MemoContentType>({
   openAddMemoBox: false,
   setOpenAddMemoBox: () => {},
   currentMemo: null,
   setCurrentMemo: () => {},
   memoList: null,
   setMemoList: () => {},
});

export function useMemoContext() {
   return useContext(MemoContext);
}

const list = ["jan", "feb", "mar"];

export default function MemoProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [openAddMemoBox, setOpenAddMemoBox] = useState(false);
   const [memoList, setMemoList] = useState<string[] | null>(list);
   const [currentMemo, setCurrentMemo] = useState<string | null>(null);

   const contextValue: MemoContentType = {
      openAddMemoBox,
      setOpenAddMemoBox,
      currentMemo,
      setCurrentMemo,
      memoList,
      setMemoList,
   };

   return (
      <MemoContext.Provider value={contextValue}>
         {children}
      </MemoContext.Provider>
   );
}
