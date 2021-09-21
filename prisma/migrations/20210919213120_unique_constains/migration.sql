/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `marca` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "marca_name_key" ON "marca"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
