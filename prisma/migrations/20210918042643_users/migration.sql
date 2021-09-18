-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "number_phone" TEXT NOT NULL,
    "DDD" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "number_house" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_number_phone_key" ON "users"("number_phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_CPF_key" ON "users"("CPF");
