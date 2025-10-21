-- CreateTable
CREATE TABLE "Data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "universal_user_id" TEXT NOT NULL,
    "todolist" TEXT NOT NULL,
    "todolistType" TEXT NOT NULL,
    "doneList" BOOLEAN NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
