import { createContext, useState, useContext, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "../../src/AppProvider";

interface Data {
   id: number;
   note: string;
   date: string;
   done: boolean;
   noteType: string;
}
interface BackendData {
   id: number;
   todolist: string; // note
   todolistType: string; // notetype
   doneList: boolean; // done
   created: string; // date
   universal_user_id: string; //
}

interface TodoListContextType {
   rows: Data[];
   setRows: Dispatch<SetStateAction<Data[]>>;
   noteList: string[] | null;
   setNoteList: Dispatch<SetStateAction<string[] | null>>;
}

const TodoListContext = createContext<TodoListContextType>({
   rows: [],
   setRows: () => {},
   noteList: null,
   setNoteList: () => {},
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
         value={{ rows, setRows, noteList, setNoteList }}
      >
         {children}
      </TodoListContext.Provider>
   );
}

//  useEffect(() => {
//       fetch(`${api}/datas?page=${page}&limit=${limit}`)
//          .then(async (res) => {
//             if (!res.ok) {
//                throw new Error("Network res was not ok");
//             }
//             // res ကို JSON အဖြစ် ပြောင်းဖို့ Promise နောက်တစ်ခုကို ပြန်ပေးမယ်
//             return res.json();
//          })
//          .then((fetchedData: BackendData[]) => {
//             const transformedData: Data[] = fetchedData.map((item) => ({
//                id: item.id,
//                note: item.todolist,
//                noteType: item.todolistType,
//                done: item.doneList,

//                // date ကို created အဖြစ် ပြောင်း/ဖော်မတ်လုပ်
//                // DateTime ကို string format ပြောင်းချင်ရင်၊ ဒါမှမဟုတ် created ကိုပဲ သုံးချင်ရင်
//                date: new Date(item.created).toLocaleDateString(),
//                // universal_user_id ကိုတော့ လျစ်လျူရှုထားနိုင်ပါတယ် (optional)
//             }));
//             if (page === 1) {
//                setRows(transformedData);
//             } else {
//                setRows((prevRows) => [...prevRows, ...transformedData]);
//             }

//             const allNoteTypes = fetchedData.map((item) => item.todolistType);
//             // const uniqueNoteTypes = Array.from(new Set(allNoteTypes));
//             const uniqueNoteList = [...new Set(allNoteTypes)];
//          })
//          .catch((error) => {
//             console.error("Data fetching failed:", error);
//          });
//    }, [page, limit]);

// setRows((prevRows) => {
//    if (page === 1) {
//       return transformedData;
//    }
//    return [...prevRows, ...transformedData];
// });
