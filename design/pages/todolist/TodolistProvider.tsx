import { createContext, useState, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../src/AppProvider";
import {
   type TodoListContextType,
   type Data,
   type BackendData,
} from "./TodolistDataType.types";

import { ToggleDoneApi } from "./TodoApiCall";

const TodoListContext = createContext<TodoListContextType>({
   rows: [],
   setRows: () => {},
   noteList: null,
   setNoteList: () => {},
   toggleTodo: async () => {},
   isLoading: true,
   error: null,
});

export function useTodolistContext() {
   return useContext(TodoListContext);
}

const api = "http://localhost:8800";

async function fetchdatas({ keyword }: { keyword: string | null }) {
   try {
      const res = await fetch(`${api}/datas?keyword=${keyword}`);

      if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      }
      const fetchedData = await res.json();

      return fetchedData;
   } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
   }
}
export default function TodolistProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [rows, setRows] = useState<Data[]>([]);
   const [noteList, setNoteList] = useState<string[] | null>(null);
   const { currentNote } = useAppContext();

   const queryClient = useQueryClient();

   const { data: fetchedNoteList } = useQuery<string[]>({
      queryKey: ["noteTypes"],
      queryFn: async () => {
         const res = await fetch(`${api}/notetypes`);
         if (!res.ok) throw new Error("Something wrong");
         return res.json(); // ✅ data return
      },
   });

   useEffect(() => {
      if (fetchedNoteList) setNoteList(fetchedNoteList);
   }, [fetchedNoteList]);

   const {
      data: fetchedBackendData,
      error,
      isLoading,
   } = useQuery<BackendData[]>({
      queryKey: ["todoDatas", currentNote],
      queryFn: () => fetchdatas({ keyword: currentNote }),
   });

   const toggleTodo = async (id: number, currentDoneStatus: boolean) => {
      // setLoad(true)
      try {
         const fetchData = await ToggleDoneApi(
            id,
            !currentDoneStatus,
            queryClient
         );
      } catch (err) {
         console.error(
            "Toggle failed and rollback or user notification needed:",
            err
         );
      }
   };

   useEffect(() => {
      if (fetchedBackendData) {
         const transformedData: Data[] = fetchedBackendData.map((item) => ({
            id: item.id,
            note: item.todolist,
            noteType: item.todolistType,
            done: item.doneList,
            date: new Date(item.created).toLocaleDateString(),
         }));

         setRows(transformedData);
      }
   }, [fetchedBackendData]);

   console.log("loading is = " + typeof(isLoading));
   console.log("error = " + error);
   
   return (
      <TodoListContext.Provider
         value={{
            rows,
            setRows,
            noteList,
            setNoteList,
            toggleTodo,
            isLoading,
            error,
         }}
      >
         {children}
      </TodoListContext.Provider>
   );
}
