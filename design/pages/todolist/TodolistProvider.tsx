import { createContext, useState, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../src/AppProvider";
import {
   TodoListContextType,
   Data,
   BackendData,
} from "./TodolistDataType.types";

import ToggleDoneApi from "./ToggleDoneApi";

const TodoListContext = createContext<TodoListContextType>({
   rows: [],
   setRows: () => {},
   noteList: null,
   setNoteList: () => {},
   toggleTodo: async () => {},
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

   useEffect(() => {
      fetch(`${api}/notetypes`)
         .then(async (res) => {
            if (!res.ok) {
               throw new Error("Something wrong");
            }
            return res.json();
         })
         .then((fetchData: string[]) => {
            setNoteList(fetchData);
         })
         .catch((error) => {
            console.error("Data fetching failed:", error);
         });
   }, []);

   const {
      data: fetchedBackendData,
      error,
      isLoading,
   } = useQuery<BackendData[]>({
      queryKey: ["todoDatas", currentNote],
      queryFn: () => fetchdatas({ keyword: currentNote }),
   });

   const toggleTodo = async (id: number, currentDoneStatus: boolean) => {
      try {
         console.log(currentDoneStatus);

         await ToggleDoneApi(id, !currentDoneStatus);
         queryClient.invalidateQueries({ queryKey: ["todoDatas"] });
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

   return (
      <TodoListContext.Provider
         value={{ rows, setRows, noteList, setNoteList, toggleTodo }}
      >
         {children}
      </TodoListContext.Provider>
   );
}
