-- CreateTable
CREATE TABLE "verb" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "exception" BOOLEAN NOT NULL DEFAULT false,
    "ich" TEXT,
    "du" TEXT,
    "erEsSie" TEXT,
    "wir" TEXT,
    "ihr" TEXT,
    "sie" TEXT
);
