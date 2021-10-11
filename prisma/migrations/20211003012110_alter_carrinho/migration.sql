/*
  Warnings:

  - You are about to drop the `_CarrinhoToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `productId` on table `carrinho` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CarrinhoToProduct" DROP CONSTRAINT "_CarrinhoToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarrinhoToProduct" DROP CONSTRAINT "_CarrinhoToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "carrinho" DROP CONSTRAINT "carrinho_productId_fkey";

-- AlterTable
ALTER TABLE "carrinho" ALTER COLUMN "productId" SET NOT NULL;

-- DropTable
DROP TABLE "_CarrinhoToProduct";

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
