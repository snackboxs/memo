import type { Dispatch, SetStateAction } from "react";

export interface Data {
   id: number;
   note: string;
   date: string;
   done: boolean;
   noteType: string;
}
export interface BackendData {
   id: number;
   todolist: string; // note
   todolistType: string; // notetype
   doneList: boolean; // done
   created: string; // date
   universal_user_id: string; //
}

export interface ApiError {
    message: string;
    code?: number; // Example custom property
}

export interface TodoListContextType {
   rows: Data[];
   setRows: Dispatch<SetStateAction<Data[]>>;
   noteList: string[] | null;
   setNoteList: Dispatch<SetStateAction<string[] | null>>;
   toggleTodo: (id: number, currentDoneStatus: boolean) => Promise<void>;
   isLoading: boolean;
   error: ApiError | null;
   // load: boolean;
   // setLoad: Dispatch<SetStateAction<boolean>>;
}
