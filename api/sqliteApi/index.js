const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const MAX_LIMIT = 20;

app.get("/datas", async (req, res) => {
   const keyword = req.query.keyword;
   const list = await prisma.data.findMany({
      where: { todolistType: keyword },
   });

   return res.json(list);
});

app.get("/notetypes", async (req, res) => {
   try {
      const uniqueTypes = await prisma.data.findMany({
         select: {
            todolistType: true,
         },
         distinct: ["todolistType"],
         orderBy: { todolistType: "asc" },
      });
      const noteTypesList = uniqueTypes.map((item) => item.todolistType);
      
      setTimeout(() => {
         return res.json(noteTypesList);
      }, 500);
   } catch (error) {
      console.error("Error fetching unique note types:", error);
      // Server-side error
      return res.status(500).json({ error: "Failed to fetch note types" });
   }
});

app.patch("/datas/:id", async (req, res) => {
   const { id } = req.params;
   const { doneList } = req.body;

   if (typeof doneList !== "boolean") {
      return res
         .status(400)
         .json({ error: "Invalid 'doneList' status provided." });
   }
   try {
      const updatedItem = await prisma.data.update({
         where: {
            id: parseInt(id),
         },
         data: {
            doneList: doneList,
         },
      });
      setTimeout(() => {
         return res.status(200).json(updatedItem);
      }, 500);
   } catch (err) {
      console.log(`Error updating todo item ${id}:`, err);
      return res.status(500).json({ error: "Failed to update todo item." });
   }
});

app.delete("/datas/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const deletedItem = await prisma.data.delete({
         where: {
            id: parseInt(id),
         },
      });
      setTimeout(() => {
         return res.status(200).json(deletedItem);
      }, 500);
   } catch (err) {
      console.log("Error deleting todo item", err);
      return res.status(500).json({ error: "Failed to delete todo item" });
   }
});

app.listen(8800, () => console.log("Server is running at port 8800"));

// app.get("/datas", async (req, res) => {
//    const page = parseInt(req.query.page) || 1;
//    let requestedLimit = parseInt(req.query.limit) || 20;
//    const limit = requestedLimit > MAX_LIMIT ? MAX_LIMIT : requestedLimit;

//    const skip = (page - 1) * limit;

//    const list = await prisma.data.findMany({ skip: skip, take: limit });

//    return res.json(list);
// });
