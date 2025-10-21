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
   const page = parseInt(req.query.page) || 1;
   let requestedLimit = parseInt(req.query.limit) || 20;
   const limit = requestedLimit > MAX_LIMIT ? MAX_LIMIT : requestedLimit;

   const skip = (page - 1) * limit;

   const list = await prisma.data.findMany({ skip: skip, take: limit });

   return res.json(list);
});

app.listen(8800, () => console.log("Server is running at port 8800"));
