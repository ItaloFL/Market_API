/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number_phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CPF]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_email_number_phone_CPF_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_number_phone_key" ON "users"("number_phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_CPF_key" ON "users"("CPF");
