import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Todolist from "../pages/todolist/todolist"

export const router = createBrowserRouter([{
   path: "/",
   Component: Home,
   children: [
      {
         path: "todolist",
         Component: Todolist
      }
   ]
}])