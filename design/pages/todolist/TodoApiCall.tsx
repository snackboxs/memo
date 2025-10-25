/// <reference types="vite/client" />

// import { QueryClient, useQueryClient } from "@tanstack/react-query";

const api = "http://localhost:8800";
export async function ToggleDoneApi(
   id: number,
   newDoneStatus: boolean,
   queryClient: any
) {
   try {
      const res = await fetch(`${api}/datas/${id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            doneList: newDoneStatus,
         }),
      });

      if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      }
      queryClient.invalidateQueries({ queryKey: ["todoDatas"] });
      return await res.json();
   } catch (err) {
      console.error(`Error toggling todo item ${id}:`, err);
      throw err;
   }
}

// const api = import.meta.env.VITE_API_URL;

export async function ToggleDeleteApi(id: number, queryClient: any) {
   try {
      const res = await fetch(`${api}/datas/${id}`, {
         method: "DELETE",
      });
      if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json(); 
      console.log(data); 

      queryClient.invalidateQueries({ queryKey: ["todoDatas"] });

      return data;
   } catch (error) {
      console.log(`Error deleting item ${id}:`, error);
      throw error;
   }
}
