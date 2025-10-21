import { PrismaClient } from "../generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const USER_IDS = ["alice", "bob", "charlie"];
const categories = ["Work", "Study", "Personal", "Shopping", "Health"];

async function main() {
   console.log("Clearing Exiting Data");
   await prisma.data.deleteMany();
   await prisma.$executeRawUnsafe(
      "DELETE FROM sqlite_sequence WHERE name='Data'"
   );

   const todoArr = [];
   const NUM_TODOS = 50;

   for (let i = 0; i < NUM_TODOS; i++) {
      todoArr.push({
         universal_user_id: faker.helpers.arrayElement(USER_IDS),
         todolist: faker.lorem.sentence({ min: 3, max: 7 }),
         todolistType: faker.helpers.arrayElement(categories),
         doneList: faker.datatype.boolean(),
      });
   }

   const result = await prisma.data.createMany({ data: todoArr });
   console.log("Data Seeding Done");
}

main()
   .catch(async (e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });