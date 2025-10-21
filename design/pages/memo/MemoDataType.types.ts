import { Dispatch, SetStateAction } from "react";

export interface MemoContentType {
   openAddMemoBox: boolean;
   setOpenAddMemoBox: Dispatch<SetStateAction<boolean>>;
   currentMemo: string | null;
   setCurrentMemo: Dispatch<SetStateAction<string | null>>;
   memoList: string[] | null;
   setMemoList: Dispatch<SetStateAction<string[] | null>>;
}
