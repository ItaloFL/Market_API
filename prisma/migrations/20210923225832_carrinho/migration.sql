-- CreateTable
CREATE TABLE "carrinho" (
    "id" TEXT NOT NULL,
    "custumer" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CarrinhoToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarrinhoToProduct_AB_unique" ON "_CarrinhoToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CarrinhoToProduct_B_index" ON "_CarrinhoToProduct"("B");

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_custumer_fkey" FOREIGN KEY ("custumer") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_items_fkey" FOREIGN KEY ("items") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToProduct" ADD FOREIGN KEY ("A") REFERENCES "carrinho"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToProduct" ADD FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
