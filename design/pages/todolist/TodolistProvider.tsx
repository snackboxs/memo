import { createContext, useContext, useState } from "react"
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
   createData(1, "note1", "12-8-100", false, "food"),
   createData(2, "note2", "12-8-100", false, "food"),
   createData(3, "note3", "12-8-100", true, "study"),
   createData(4, "note4", "12-8-100", false, "food"),
   createData(4, "note4", "12-8-100", false, "study"),
];

interface TodoListContextType {
   rows: Data[],
   setRows: Dispatch <SetStateAction<Data[]>>, 
}

const TodoListContext = createContext<TodoListContextType>({
   rows: [],
   setRows: () => {}
})

export default function TodolistProvider() {
   const [rows, setRows] = useState(datas);

   return (

   )
}