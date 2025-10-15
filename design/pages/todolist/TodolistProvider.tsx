import { createContext, useState, useContext } from "react";
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

export default function TodolistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rows, setRows] = useState<Data[]>(datas);
  const [noteList, setNoteList] = useState<string[] | null>(list);

  return (
    <TodoListContext.Provider value={{ rows, setRows, noteList, setNoteList }}>
      {children}
    </TodoListContext.Provider>
  );
}
