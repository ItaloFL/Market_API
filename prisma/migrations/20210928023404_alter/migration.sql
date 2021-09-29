/*
  Warnings:

  - You are about to drop the `_CarrinhoToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CarrinhoToProduct" DROP CONSTRAINT "_CarrinhoToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarrinhoToProduct" DROP CONSTRAINT "_CarrinhoToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "carrinho" DROP CONSTRAINT "carrinho_items_fkey";

-- DropTable
DROP TABLE "_CarrinhoToProduct";

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_items_fkey" FOREIGN KEY ("items") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
