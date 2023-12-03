/*
  Warnings:

  - A unique constraint covering the columns `[Username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Password` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "Password" VARCHAR(36) NOT NULL,
ADD COLUMN     "Username" VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_Username_key" ON "Users"("Username");
