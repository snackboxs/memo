const api = "http://localhost:8800";

export default async function ToggleDoneApi(
   id: number,
   newDoneStatus: boolean
) {
   // console.log(id, newDoneStatus);

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
      return await res.json();
   } catch (err) {
      console.error(`Error toggling todo item ${id}:`, err);
      throw err;
   }
}
