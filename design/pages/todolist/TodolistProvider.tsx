import { log } from "console";
import { createContext, useState, useContext, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

interface Data {
   id: number;
   note: string;
   date: string;
   done: boolean;
   noteType: string;
}

function createData(
   id: number,
   note: string,
   date: string,
   done: boolean,
   noteType: string
): Data {
   return {
      id,
      note,
      date,
      done,
      noteType,
   };
}
const datas: Data[] = [
   createData(1, "note1", "12-8-100", false, "Food"),
   createData(2, "note2", "12-8-100", false, "Food"),
   createData(3, "note3", "12-8-100", true, "study"),
   createData(4, "note4", "12-8-100", false, "Food"),
   createData(4, "note4", "12-8-100", false, "Health"),
   createData(4, "note4", "12-8-100", false, "study"),
   createData(4, "note4", "12-8-100", false, "study"),
];

const list = ["Food", "Health", "Learn"];
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

export default function TodolistProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [rows, setRows] = useState<Data[]>([]);
   const [noteList, setNoteList] = useState<string[] | null>(list);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(20);

   useEffect(() => {
      fetch(`${api}/datas?page=${page}&limit=${limit}`)
         .then(async (res) => {
            if (!res.ok) {
               throw new Error("Network res was not ok");
            }
            // res ကို JSON အဖြစ် ပြောင်းဖို့ Promise နောက်တစ်ခုကို ပြန်ပေးမယ်
            return res.json();
         })
         .then((fetchedData: Data[]) => {
            const transformedData: Data[] = fetchedData.map((item) => ({
               id: item.id, // id က တူပါတယ်
               note: item.todolist, // 👈 todolist ကို note အဖြစ်ပြောင်း
               noteType: item.todolistType, // 👈 todolistType ကို noteType အဖြစ်ပြောင်း
               done: item.doneList, // 👈 doneList ကို done အဖြစ်ပြောင်း

               // date ကို created အဖြစ် ပြောင်း/ဖော်မတ်လုပ်
               // DateTime ကို string format ပြောင်းချင်ရင်၊ ဒါမှမဟုတ် created ကိုပဲ သုံးချင်ရင်
               date: new Date(item.created).toLocaleDateString(),

               // universal_user_id ကိုတော့ လျစ်လျူရှုထားနိုင်ပါတယ် (optional)
            }));
            if (page === 1) {
               setRows(fetchedData);
            } else {
               setRows((prevRows) => [...prevRows, ...fetchedData]);
            }
         })
         .catch((error) => {
            // 4. အပေါ်က အဆင့်တွေထဲမှာ Error တစ်ခုခု တက်ရင် ဒီနေရာကို ရောက်မယ်
            console.error("Data fetching failed:", error);
         });
   }, [page, limit]);
   console.log(rows);
   return (
      <TodoListContext.Provider
         value={{ rows, setRows, noteList, setNoteList }}
      >
         {children}
      </TodoListContext.Provider>
   );
}
