import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Todolist from "../pages/todolist/Todolist"
import Cashnote from "../pages/cashnote/Cashnote"

export const router = createBrowserRouter([{
   path: "/",
   Component: Home,
   children: [
      {
         path: "todolist",
         Component: Todolist
      },
      {
         path: "cashnote",
         Component: Cashnote
      },
      {
         path: "diary",
         Component: Todolist
      },
   ]
}])