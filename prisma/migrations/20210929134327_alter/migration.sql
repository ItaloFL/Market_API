/*
  Warnings:

  - A unique constraint covering the columns `[email,number_phone,CPF]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "carrinho" DROP CONSTRAINT "carrinho_items_fkey";

-- DropIndex
DROP INDEX "users_CPF_key";

-- DropIndex
DROP INDEX "users_email_key";

-- DropIndex
DROP INDEX "users_number_phone_key";

-- AlterTable
ALTER TABLE "carrinho" ADD COLUMN     "productId" TEXT;

-- CreateTable
CREATE TABLE "_CarrinhoToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarrinhoToProduct_AB_unique" ON "_CarrinhoToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CarrinhoToProduct_B_index" ON "_CarrinhoToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_number_phone_CPF_key" ON "users"("email", "number_phone", "CPF");

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToProduct" ADD FOREIGN KEY ("A") REFERENCES "carrinho"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToProduct" ADD FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
